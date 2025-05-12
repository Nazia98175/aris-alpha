import { NextRequest, NextResponse } from 'next/server'

import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'
import { env } from '../../../../../env'

const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-04-30.basil', // Use stable release
})

const webhookSecret = env.STRIPE_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
    try {
        const body = await req.text()
        const signature = req.headers.get('stripe-signature')!

        const event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
        const supabase = await createClient()

        console.log('Stripe event:', event.type)

        switch (event.type) {
            // ✅ MAIN subscription creation logic
            case 'customer.subscription.created': {
                const stripeSubscription = event.data.object
                console.log('customer.subscription.created', stripeSubscription)
                const supabase = await createClient()
                await supabase.from('subscriptions').insert({
                    uid: stripeSubscription.id,
                    user_id: stripeSubscription.metadata.user_id,
                    current_period_end: stripeSubscription.items.data[0].current_period_end,
                    current_period_start: stripeSubscription.items.data[0].current_period_start,
                    latest_invoice: stripeSubscription.latest_invoice?.toString(),
                    status: stripeSubscription.status,
                })
            }

            case 'customer.subscription.updated':
            case 'customer.subscription.deleted':
            case 'customer.subscription.paused':
            case 'customer.subscription.resumed': {
                const subscription = event.data.object as Stripe.Subscription

                await supabase
                    .from('subscriptions')
                    .update({
                        current_period_start: subscription.items.data[0].current_period_start,
                        current_period_end: subscription.items.data[0].current_period_end,
                        latest_invoice: subscription.latest_invoice?.toString() ?? null,
                        status: subscription.status,
                    })
                    .eq('uid', subscription.id)

                break
            }

            case 'invoice.paid': {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const invoice = event.data.object as any
                const subscriptionId = invoice.subscription as string

                if (subscriptionId)
                    await supabase
                        .from('subscriptions')
                        .update({ latest_invoice: invoice.id, status: invoice.status })
                        .eq('uid', subscriptionId)

                break
            }

            case 'invoice.payment_failed': {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const invoice = event.data.object as any
                const subscriptionId = invoice.subscription as string

                if (subscriptionId)
                    await supabase
                        .from('subscriptions')
                        .update({ latest_invoice: invoice.id, status: invoice.status })
                        .eq('uid', subscriptionId)

                break
            }

            default:
                console.log(`Unhandled event type ${event.type}`)
        }

        return NextResponse.json({ received: true })
    } catch (err) {
        console.error('Stripe webhook error:', err)
        return NextResponse.json({ message: 'Webhook error', ok: false }, { status: 400 })
    }
}

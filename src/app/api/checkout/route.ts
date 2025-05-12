// app/api/checkout/route.ts

import { NextRequest, NextResponse } from 'next/server'

import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'
import { env } from '../../../../env'

const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-04-30.basil',
})

export async function POST(req: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: authUser, error: authError } = await supabase.auth.getUser()
        if (authError || !authUser.user.email) throw new Error('Unauthorized User')
        const { data: user, error } = await supabase
            .from('users')
            .select('id, uid, email')
            .eq('email', authUser.user.email)
            .maybeSingle()
        if (error || !user) throw new Error('Unauthorized User')

        let customerId = user.uid as string
        if (!user.uid) {
            const customer = await stripe.customers.create({
                email: user.email,
                metadata: {
                    userId: user.id,
                },
            })
            const { error } = await supabase.from('users').update({ uid: customer.id }).eq('id', user.id)
            if (error) throw new Error('Something went wrong while processing checkout')

            customerId = customer.id
        }

        const productId = env.STRIPE_PRODUCT_ID
        const origin = req.headers.get('origin')

        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            customer: customerId,
            payment_method_types: ['card'],
            line_items: [{ price: productId, quantity: 1 }],
            metadata: { user_id: user.id },
            subscription_data: { metadata: { user_id: user.id } },
            success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/checkout/cancel`,
        })

        console.log(session)

        return NextResponse.json({ url: session.url })
    } catch (error) {
        console.error(error)
        return new NextResponse('Failed to create checkout session', { status: 500 })
    }
}

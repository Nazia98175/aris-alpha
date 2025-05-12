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

        if (!user.uid) throw new Error('Subscription link is not available right now. Contact administrator')

        const origin = req.headers.get('origin')

        const session = await stripe.billingPortal.sessions.create({
            customer: user.uid,
            return_url: `${origin}/dashboard`,
        })

        return NextResponse.json({ url: session.url })
    } catch (error) {
        console.error(error)
        return new NextResponse('Failed to create portal session', { status: 500 })
    }
}

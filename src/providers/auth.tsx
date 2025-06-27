'use client'

import React, { PropsWithChildren, createContext, useEffect, useState } from 'react'

import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { QueryKeys } from '@/types'
import { Tables } from '../../supabase/types/database.types'
import { supabase } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'

type UserSession = {
    user: Tables<'users'>
    subscription?: Tables<'subscriptions'> | null
}

export const AuthContext = createContext<UserSession | null | undefined>(null)

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [session, setSession] = useState<UserSession | null | undefined>(null)
    const { data, isLoading } = useQuery({
        queryKey: [QueryKeys.user_session],
        queryFn: async () => {
            const { data } = await supabase.auth.getUser()

            if (!data.user?.email) throw new Error('Unauthorized user')

            const { data: user, error } = await supabase
                .from('users')
                .select('*')
                .eq('email', data.user.email)
                .maybeSingle()
            if (!user || error) throw new Error('Unauthorized user')

            const { data: subscription } = await supabase
                .from('subscriptions')
                .select('*')
                .eq('user_id', user.id)
                .eq('status', 'active')
                .maybeSingle()

            return { user, subscription }
        },
    })

    useEffect(() => {
        if (!data?.user?.id) return

        const channel = supabase
            .channel(`subscription-updates-${data.user.id}`)
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'subscriptions',
                    filter: `user_id=eq.${data.user.id}`,
                },
                async (payload) => {
                    console.log('Subscription change:', payload)

                    // Refetch latest subscription info
                    const { data: updatedSubscription } = await supabase
                        .from('subscriptions')
                        .select('*')
                        .eq('user_id', data.user.id)
                        .eq('status', 'active')
                        .maybeSingle()

                    setSession((prev) => ({
                        ...prev!,
                        subscription: updatedSubscription,
                    }))
                },
            )
            .subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [data?.user?.id])

    useEffect(() => {
        setSession(data)
    }, [data])

    if (isLoading)
        return (
            <div className="grid h-screen w-full place-content-center">
                <LoadingSpinner />
            </div>
        )

    if (!session) return <>Unauthorized User</>

    return <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
}

export default AuthProvider

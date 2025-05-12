'use client'

import { ArrowUpRight, CreditCard } from 'lucide-react'

import Image from 'next/image'
import LoadingButton from '@/components/ui/loading-button'
import { MutationKeys } from '@/types'
import React from 'react'
import { SidebarFooter } from '@/components/ui/sidebar'
import { useAuth } from '@/hooks/use-auth'
import { useMutation } from '@tanstack/react-query'

const PortalSidebarFooter = () => {
    const { subscription } = useAuth()

    const processCheckoutMutation = useMutation({
        mutationKey: [MutationKeys.user_checkout],
        mutationFn: async () => {
            const res = await fetch('/api/checkout', { method: 'POST' })
            if (!res.ok) throw new Error('Something went wrong while processing checkout')
            const data = await res.json()
            if (data.url) window.open(data.url, '_blank')
        },
    })

    const subscriptionPortalQuery = useMutation({
        mutationKey: [MutationKeys.user_portal],
        mutationFn: async () => {
            const res = await fetch('/api/portal', { method: 'POST' })
            if (!res.ok) throw new Error('Something went wrong while redirecting you to subscription portal')
            const data = await res.json()
            if (data.url) window.open(data.url, '_blank')
        },
    })

    const isActive = subscription?.status === 'active'

    return (
        <SidebarFooter className="flex flex-col items-center gap-4">
            {isActive ? (
                <LoadingButton
                    variant="vibrant"
                    size="lg"
                    className="w-full"
                    loading={subscriptionPortalQuery.isPending}
                    onClick={() => subscriptionPortalQuery.mutate()}
                >
                    <CreditCard /> Manage Subscription
                </LoadingButton>
            ) : (
                <>
                    <div className="relative h-40 w-40">
                        <Image alt="balloons" src="/assets/icons/balloons.png" fill className="object-contain" />
                    </div>

                    <p className="text-sm font-medium text-white">You are using free plan</p>
                    <LoadingButton
                        loading={processCheckoutMutation.isPending}
                        variant="vibrant"
                        size="lg"
                        className="w-full"
                        onClick={() => processCheckoutMutation.mutate()}
                    >
                        <ArrowUpRight /> Upgrade Plan
                    </LoadingButton>
                </>
            )}
        </SidebarFooter>
    )
}

export default PortalSidebarFooter

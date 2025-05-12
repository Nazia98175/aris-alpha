'use client'

import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import NavUser from '../layout/portal/nav-user'
import React from 'react'
import { useAuth } from '@/hooks/use-auth'
import { useSidebar } from '../ui/sidebar'

const Header = () => {
    const { subscription } = useAuth()
    const { setOpenMobile } = useSidebar()

    const paidPlan = subscription?.status === 'active'

    return (
        <div>
            <div className="hidden w-full items-start justify-between md:flex">
                <div className="space-y-2">
                    <div className="grid h-6 w-fit place-content-center rounded-xl border border-[#8C00FF] px-2.5 text-white sm:h-9">
                        <span className="text-sm font-medium uppercase sm:text-base">
                            {paidPlan ? 'Paid Plan' : 'Free Plan'}
                        </span>
                    </div>
                    <h5 className="text-xl font-semibold text-white sm:text-3xl">Welcome to Aris Alpha</h5>
                </div>

                <NavUser />
            </div>

            <div className="w-full space-y-4 md:hidden">
                <div className="flex items-center justify-between">
                    <Button
                        variant="outline"
                        className="border-none bg-transparent"
                        size="icon"
                        onClick={() => setOpenMobile(true)}
                    >
                        <Menu />
                    </Button>
                    <NavUser />
                </div>
                <div className="space-y-2">
                    <div className="grid h-6 w-fit place-content-center rounded-xl border border-[#8C00FF] px-2.5 text-white sm:h-9">
                        <span className="text-sm font-medium uppercase sm:text-base">
                            {paidPlan ? 'Paid Plan' : 'Free Plan'}
                        </span>
                    </div>
                    <h5 className="text-xl font-semibold text-white sm:text-3xl">Welcome to Aris Alpha</h5>
                </div>
            </div>
        </div>
    )
}

export default Header

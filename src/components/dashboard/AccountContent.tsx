'use client'

import { motion } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import AccountSettings from './AccountSettings'
import FeedPreferences from './FeedPreferences'

const AccountContent = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const tabParam = searchParams.get('tab') || 'account'
    const [activeTab, setActiveTab] = useState<'account' | 'feed-preferences'>(
        tabParam === 'feed-preferences' ? 'feed-preferences' : 'account',
    )
    const tabs = [
        { label: 'Account', value: 'account' },
        { label: 'Feed Preferences', value: 'feed-preferences' },
    ]
    useEffect(() => {
        router.replace(`?tab=${activeTab}`)
    }, [activeTab, router])

    const getTranslateX = () => {
        return activeTab === 'account' ? 'translate-x-0' : 'translate-x-full'
    }

    return (
        <div className="bg-darker rounded-lg border border-white/[7%] p-3 text-white backdrop-blur-[32px] md:p-6">
            <div className="bg-darkbrown relative mx-auto mb-2 w-fit rounded-full sm:mx-0 md:mb-4">
                <div className="relative flex w-full max-w-[361px] overflow-hidden rounded-full">
                    <motion.div
                        layout
                        className={`bg-primaryblue absolute top-0 left-0 h-full w-1/2 rounded-full shadow-[0px_0px_10px_0px_#2A64F6] transition-transform duration-300 ease-in-out ${getTranslateX()}`}
                    />
                    {tabs.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value as 'account' | 'feed-preferences')}
                            className="relative z-10 flex w-1/2 items-center justify-center px-[24px] py-1.5 text-sm font-medium whitespace-nowrap text-white transition-colors duration-300 md:px-[39px] md:py-[5.5px] md:text-base"
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
            <p className="mb-6 text-sm text-white/80">User settings, preferences, and controls</p>
            {activeTab === 'account' ? <AccountSettings /> : <FeedPreferences />}
        </div>
    )
}

export default AccountContent

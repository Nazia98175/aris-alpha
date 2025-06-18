'use client'

import React, { useState } from 'react'
import AccountSettings from './AccountSettings'
import FeedPreferences from './FeedPreferences'
import { motion } from 'framer-motion'

const AccountContent = () => {
    const [activeTab, setActiveTab] = useState<'Account' | 'Feed Preferences'>('Account')

    const tabs = ['Account', 'Feed Preferences']

    const getTranslateX = () => {
        switch (activeTab) {
            case 'Account':
                return 'translate-x-0'
            case 'Feed Preferences':
                return 'translate-x-full'
            default:
                return ''
        }
    }

    return (
        <div className="bg-darker rounded-lg border border-white/[7%] p-3 text-white backdrop-blur-[32px] md:p-6">
            {/* Tab Navigation */}
            <div className="bg-darkbrown relative mx-auto mb-2 w-fit rounded-full sm:mx-0 md:mb-4">
                <div className="relative flex w-full max-w-[361px] overflow-hidden rounded-full">
                    {/* Sliding background */}
                    <motion.div
                        layout
                        className={`bg-primaryblue absolute top-0 left-0 h-full w-1/2 rounded-full shadow-[0px_0px_10px_0px_#2A64F6] transition-transform duration-300 ease-in-out ${getTranslateX()}`}
                    />
                    {/* Tabs */}
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as 'Account' | 'Feed Preferences')}
                            className="relative z-10 flex w-1/2 items-center justify-center px-[14px] py-1 text-sm font-medium whitespace-normal text-white transition-colors duration-300 md:px-[39px] md:py-[5.5px] md:text-base md:whitespace-nowrap"
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <p className="mb-6 text-sm text-white/80">User settings, preferences, and controls</p>

            {activeTab === 'Account' ? <AccountSettings /> : <FeedPreferences />}
        </div>
    )
}

export default AccountContent

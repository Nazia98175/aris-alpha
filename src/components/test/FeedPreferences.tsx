'use client'

import React from 'react'
import PreferenceGroup from './PreferenceGroup'

const FeedPreferences = () => {
    return (
        <div className="rounded-lg bg-white/[3%] p-3 md:p-6">
            <div className="h-auto w-full max-w-[780px] backdrop-blur-[32px]">
                <div className="grid grid-cols-1 gap-3 md:gap-8">
                    <PreferenceGroup
                        title="Asset Classes"
                        options={['Stocks', 'Crypto', 'ETFs', 'Options', 'Commodities']}
                        defaultChecked={['Crypto', 'Options']}
                    />
                    <PreferenceGroup
                        title="Trading Style"
                        options={['Passive', 'Tactical', 'Short-term', 'Long-term']}
                        defaultChecked={['Tactical']}
                    />
                    <PreferenceGroup
                        title="Primary Focus"
                        options={[
                            'Entry/Exit Signals',
                            'Portfolio Allocation',
                            'Volatility/Sentiment',
                            'News & Momentum Alerts',
                            'Forecasts & Outlooks',
                        ]}
                        defaultChecked={['Portfolio Allocation', 'News & Momentum Alerts']}
                    />
                </div>
            </div>
        </div>
    )
}

export default FeedPreferences

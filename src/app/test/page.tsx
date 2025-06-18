'use client'

import React, { useState } from 'react'
import TabNavigation from '@/components/test/TabNavigation'
import { TestLayout } from '@/components/test/TestLayout'
import AccountContent from '@/components/test/AccountContent'

const TestDashboard = () => {
    const [activeTab, setActiveTab] = useState('Overview')

    return (
        <TestLayout>
            <div className="flex w-full max-w-full items-center justify-center">
                <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            <div className="mt-6 text-white">
                {activeTab === 'Overview' ? <div>Overview Content Here</div> : <AccountContent />}
            </div>
        </TestLayout>
    )
}

export default TestDashboard

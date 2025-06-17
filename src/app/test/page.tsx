// File: src/app/dashboard/page.tsx
import TabNavigation from '@/components/test/TabNavigation'
import { TestLayout } from '@/components/test/TestLayout'
import React from 'react'

const TestDashboard = () => {
    return (
        <TestLayout>
            <div className="flex w-full max-w-full items-center justify-center">
                <TabNavigation />
            </div>
            {/* Overview Page Content */}
            <div className="mt-6 text-white">Overview Content Here</div>
        </TestLayout>
    )
}

export default TestDashboard

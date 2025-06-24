import CompleteOverview from '@/components/overview/CompleteOverview'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Aris Alpha | Overview',
    description: 'Real-time trading dashboard with candlestick charts, market insights, and portfolio analytics.',
    openGraph: {
        title: 'Aris Alpha | Overview',
        description: 'Real-time trading dashboard with candlestick charts, market insights, and portfolio analytics.',
        images: ['/assets/dashboard/webp/overview-seo.webp'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aris Alpha | Overview',
        description: 'Real-time trading dashboard with candlestick charts, market insights, and portfolio analytics.',
        images: ['/assets/dashboard/webp/overview-seo.webp'],
    },
}
const page = () => {
    return (
        <div className="bg-fadeblack min-h-screen">
            <div className="mx-auto w-full max-w-[1920px]">
                <CompleteOverview />
            </div>
        </div>
    )
}

export default page

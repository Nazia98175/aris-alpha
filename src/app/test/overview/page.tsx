import CompleteOverview from '@/components/overview/CompleteOverview'
import React from 'react'

const page = () => {
    return (
        <div className="bg-fadeblack pt-10 pb-14 min-h-screen px-4 lg:px-6">
            <div className="mx-auto w-full max-w-[1360px]">
                <CompleteOverview />
            </div>
        </div>
    )
}

export default page

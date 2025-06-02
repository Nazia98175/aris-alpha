import React from 'react'

type Status = 'filled' | 'active' | 'next'

const StepIndicator = ({ status }: { status: Status }) => {
    let outerClass = 'border-gray-600'
    let innerClass = 'bg-gray-600'
    let content = null

    if (status === 'filled') {
        outerClass = 'border-blue-900'
        innerClass = 'bg-blue-900'
        content = '✓'
    } else if (status === 'active') {
        outerClass = 'border-blue-900'
        innerClass = 'bg-blue-900'
    }

    return (
        <div
            className={`flex h-[30px] w-[30px] items-center justify-center rounded-full border-4 ${outerClass} bg-black`}
        >
            {status !== 'next' && (
                <div
                    className={`h-[11.24px] w-[11.24px] rounded-full ${innerClass} flex items-center justify-center text-xs text-white`}
                >
                    {content}
                </div>
            )}
        </div>
    )
}

export default StepIndicator

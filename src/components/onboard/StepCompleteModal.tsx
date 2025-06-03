import React from 'react'

const StepCompleteModal = ({ step }: { step: number }) => {
    return (
        <div className="mx-auto max-w-[674px] rounded-4xl bg-[#FCF6F1] p-48 backdrop-blur-[10px]">
            {' '}
            <h2 className="text-2xl font-semibold text-black">Step {step} Complete</h2>
            <p className="mt-2 text-gray-600">Got it. Your feed will sync with your style.</p>
        </div>
    )
}

export default StepCompleteModal

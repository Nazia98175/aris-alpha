import React from 'react'
import { StepCompletedIcon } from './Icons'

const StepCompleteModal = ({ step }: { step: number }) => {
    return (
        <div className="mx-auto flex w-full max-w-[606px] flex-col items-center justify-center rounded-4xl bg-[#FCF6F1] px-4 pt-12 pb-16 backdrop-blur-[10px] sm:px-6 md:px-7 md:pt-16 lg:px-11 lg:pt-[85px]">
            <span className="h-auto max-w-16 md:max-w-24 lg:max-w-[185px]">
                <StepCompletedIcon />
            </span>
            <h2 className="mt-6 text-center text-4xl leading-[120%] text-nowrap text-black md:mt-10 md:text-5xl lg:mt-16 xl:text-[64px]">
                Step {step + 1} Complete
            </h2>
            <p className="mt-6 text-center text-xl text-[#3F3F3F] md:text-2xl lg:mt-8 xl:text-4xl">
                Got it. Your feed will sync with your style.
            </p>
        </div>
    )
}

export default StepCompleteModal

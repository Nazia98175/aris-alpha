import React from 'react'
import { CheckIcon } from './Icons'

interface StepIndicatorProps {
    stepNumber: number
    currentStep: number
}

const StepIndicator = ({ stepNumber, currentStep }: StepIndicatorProps) => {
    const isCompleted = stepNumber < currentStep
    const isActive = stepNumber === currentStep
    const isNext = stepNumber === currentStep + 1

    const outerClass = isCompleted || isActive ? 'border-[#2A64F6]' : 'border-[#808080]'
    const innerClass = isCompleted || isActive ? 'bg-[#2A64F6]' : 'bg-[#808080]'
    const showInner = isCompleted || isActive || isNext

    return (
        <div className="relative z-10">
            {isCompleted ? (
                <span className="flex max-h-[30px] min-h-[30px] w-full max-w-[30px] min-w-[30px] items-center justify-center rounded-full bg-[#2A64F6] p-2 shadow-[0px_0px_10px_rgba(119,68,255,0.7)]">
                    <CheckIcon />
                </span>
            ) : (
                <div
                    className={`flex h-[30px] w-[30px] items-center justify-center rounded-full border-4 ${outerClass} bg-[#000103]`}
                >
                    {showInner && (
                        <div
                            className={`max-h-[11.24px] min-h-[11.24px] max-w-[11.24px] min-w-[11.24px] rounded-full ${innerClass}`}
                        />
                    )}
                </div>
            )}
        </div>
    )
}

export default StepIndicator

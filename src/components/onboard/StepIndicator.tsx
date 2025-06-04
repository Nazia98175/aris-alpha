import React from 'react'
import { CheckIcon } from './Icons'

interface StepIndicatorProps {
    stepNumber: number
    currentStep: number
    isFinalScreen?: boolean
}

const StepIndicator = ({ stepNumber, currentStep, isFinalScreen = false }: StepIndicatorProps) => {
    // If final screen, mark all steps completed
    const isCompleted = isFinalScreen ? true : stepNumber < currentStep
    const isCurrent = stepNumber === currentStep && !isFinalScreen
    const isNext = stepNumber === currentStep + 1 && !isFinalScreen

    const outerClass = isCompleted || isCurrent ? 'border-[#2A64F6]' : 'border-[#808080]'
    const innerClass = isCompleted || isCurrent ? 'bg-[#2A64F6]' : 'bg-[#808080]'
    const showInner = isCompleted || isCurrent || isNext

    return (
        <div className="relative z-10">
            {isCompleted ? (
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#2A64F6] p-2 shadow-[0px_0px_10px_rgba(42,100,246,0.7)]">
                    <CheckIcon />
                </span>
            ) : (
                <div
                    className={`flex h-[30px] w-[30px] items-center justify-center rounded-full border-4 ${outerClass} bg-[#000103]`}
                >
                    {showInner && <div className={`h-[11.24px] w-[11.24px] rounded-full ${innerClass}`} />}
                </div>
            )}
        </div>
    )
}

export default StepIndicator

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
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2A64F6] p-1 shadow-[0px_0px_10px_rgba(42,100,246,0.7)] sm:h-6 sm:w-6 md:p-1.5 lg:h-[30px] lg:w-[30px]">
                    <CheckIcon />
                </span>
            ) : (
                <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 sm:h-6 sm:w-6 sm:border-[3.5px] lg:h-[30px] lg:w-[30px] lg:border-4 ${outerClass} bg-background`}
                >
                    {showInner && <div className={`h-2 w-2 rounded-full sm:h-2 sm:w-2 lg:h-3 lg:w-3 ${innerClass}`} />}
                </div>
            )}
        </div>
    )
}

export default StepIndicator

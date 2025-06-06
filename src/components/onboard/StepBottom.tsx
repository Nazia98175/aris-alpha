import React from 'react'
import NavigationButton from './NavigationButton'
import { useOnboarding } from './useOnboardinghook'

const StepBottom = () => {
    const { stepIndex, updateStep } = useOnboarding()

    return (
        <div className="mx-auto mt-7 flex w-full max-w-[486px] flex-col-reverse items-center justify-between gap-3 sm:flex-row">
            <button
                className="text-white/70 hover:underline sm:font-medium md:text-xl"
                onClick={() => updateStep(stepIndex + 1, true)}
            >
                Skip For Now
            </button>
            <div className="flex items-center gap-3">
                <NavigationButton
                    disabled={stepIndex === 0}
                    variant="secondary"
                    onClick={() => updateStep(stepIndex - 1)}
                />
                <NavigationButton variant="primary" onClick={() => updateStep(stepIndex + 1)} />
            </div>
        </div>
    )
}

export default StepBottom

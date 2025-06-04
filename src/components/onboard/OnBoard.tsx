'use client'
import { useEffect, useState } from 'react'
import BackBtn from './BackBtn'
import NextBtn from './NextBtn'
import Step1 from './StrategyFeed'
import Step2 from './Step2'
import Step3 from './TakeAction'
import Step4 from './CutNoise'
import Step5 from './MainObjective'
import StepIndicator from './StepIndicator'
import StepCompleteModal from './StepCompleteModal'
import BuildYourStrategyFeed from './BuildYourStrategyFeed'

const TOTAL_STEPS = 5
const OnBoard = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false)

    // When the page loads, get the step from localStorage
    useEffect(() => {
        const savedStep = localStorage.getItem('onboard-step')
        if (savedStep) {
            setCurrentStep(Number(savedStep))
        }
    }, [])

    // Save the step whenever it changes
    useEffect(() => {
        localStorage.setItem('onboard-step', currentStep.toString())
    }, [currentStep])

    const handleNext = () => {
        if (currentStep < TOTAL_STEPS) {
            setShowConfirmation(true)
            setTimeout(() => {
                setShowConfirmation(false)
                setCurrentStep((prev) => prev + 1)
            }, 8000)
        } else if (currentStep === TOTAL_STEPS) {
            setShowConfirmation(true)
            setTimeout(() => {
                setShowConfirmation(false)
                setIsCompleted(true)
            }, 8000)
        }
    }

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1)) // min step 1
    }

    // Show the right step
    const renderStep = () => {
        if (currentStep === 1) return <Step1 />
        if (currentStep === 2) return <Step2 />
        if (currentStep === 3) return <Step3 />
        if (currentStep === 4) return <Step4 />
        if (currentStep === 5) return <Step5 />
        return null
    }

    const progressBarWidth = `${(currentStep / 5) * 100}%`
    return (
        <section
            className={`mx-auto flex min-h-full w-full pb-8 ${!showConfirmation && !isCompleted ? 'max-w-[477px]' : ''} flex-col px-4`}
        >
            <div className="relative mb-10 flex justify-between">
                <div className="absolute top-1/2 left-0 h-1.5 w-full -translate-y-1/2 bg-[#808080]" />
                {steps.map((_, i) => (
                    <StepIndicator key={i} stepNumber={i + 1} currentStep={stepIndex + 1} />
                ))}
            </div>
            {showConfirmation ? (
                <div className="mx-auto my-[72px] h-3 w-full max-w-[654px] overflow-hidden rounded-[67px] bg-[#3D4048] md:h-5 xl:h-6">
                    <div
                        style={{ width: progressBarWidth }}
                        className="h-full w-full rounded-[120px] bg-white transition-all duration-300 ease-in-out"
                    ></div>
                </div>
            ) : (
                <div className="relative mx-auto mt-5 flex w-full max-w-[477px] items-center justify-between gap-4">
                    <div className="absolute top-1/2 left-0 z-0 h-1 w-full -translate-y-1/2 bg-[#808080]"></div>
                    {[1, 2, 3, 4, 5].map((step) => (
                        <StepIndicator key={step} stepNumber={step} currentStep={isCompleted ? 6 : currentStep} />
                    ))}
                </div>
            )}

            {showConfirmation ? (
                <StepCompleteModal step={currentStep} />
            ) : isCompleted ? (
                <BuildYourStrategyFeed />
            ) : (
                renderStep()
            )}

            {!isCompleted && !showConfirmation && (
                <div className="mt-7 flex w-full flex-col-reverse items-center justify-between gap-3 sm:flex-row">
                    <button onClick={handleNext} className="font-medium text-white/70 md:text-xl">
                        Skip For Now
                    </button>
                    <div className="flex items-center gap-3">
                        <BackBtn onClick={handleBack} />
                        <NextBtn onClick={handleNext} />
                    </div>
                </div>
            )}
        </section>
    )
}

export default OnBoard

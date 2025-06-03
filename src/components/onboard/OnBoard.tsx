'use client'
import { useEffect, useState } from 'react'
import BackBtn from './BackBtn'
import NextBtn from './NextBtn'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import StepIndicator from './StepIndicator'

const OnBoard = () => {
    const [currentStep, setCurrentStep] = useState(1)

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
        setCurrentStep((prev) => Math.min(prev + 1, 5)) // max step 5
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

    return (
        <section className="mx-auto flex min-h-full w-full max-w-[477px] flex-col px-4 pb-8">
            <div className="relative mt-5 flex items-center justify-between gap-4">
                <div className="absolute top-1/2 left-0 z-0 h-1 w-full -translate-y-1/2 bg-[#808080]"></div>
                {[1, 2, 3, 4, 5].map((step) => (
                    <StepIndicator key={step} stepNumber={step} currentStep={currentStep} />
                ))}
            </div>

            {renderStep()}

            <div className="mt-7 flex w-full flex-col-reverse items-center justify-between gap-3 sm:flex-row">
                <button onClick={handleNext} className="font-medium text-white/70 md:text-xl">
                    Skip For Now
                </button>
                <div className="flex items-center gap-3">
                    <BackBtn onClick={handleBack} />
                    <NextBtn onClick={handleNext} />
                </div>
            </div>
        </section>
    )
}

export default OnBoard

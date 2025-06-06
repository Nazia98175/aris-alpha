'use client'
import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import BuildYourStrategyFeed from './BuildYourStrategyFeed'
import NavigationButton from './NavigationButton'
import StepCompleteModal from './StepCompleteModal'
import StepIndicator from './StepIndicator'
import { steps } from './Helper'
import { useOnboarding } from './useOnboardinghook'
import { useRouter } from 'next/navigation'

export default function Onboarding() {
    const {
        formData,
        updateFormData,
        showModal,
        setShowModal,
        showFinalScreen,
        setShowFinalScreen,
        currentSlug,
        stepIndex,
        updateStep,
        nextStepIndex,
    } = useOnboarding()

    const StepContent = steps[stepIndex].component
    const router = useRouter()

    // Track previous slug to close modal after URL change
    const prevSlug = useRef(currentSlug)

    useEffect(() => {
        if (showModal && currentSlug !== prevSlug.current) {
            setShowModal(false)
        }
        prevSlug.current = currentSlug
    }, [currentSlug, showModal, setShowModal])

    return (
        <div className="mx-auto mt-8 mb-10 w-full px-4 sm:mt-5">
            {!showModal && (
                <div className="relative z-20 mx-auto flex w-full max-w-[90%] justify-between sm:max-w-[395px]">
                    <div className="absolute top-1/2 left-1/2 h-1 w-full max-w-[97%] -translate-x-1/2 -translate-y-1/2 bg-[#808080] sm:h-1.5" />
                    {steps.map((_, i) => (
                        <StepIndicator
                            key={i}
                            stepNumber={i + 1}
                            currentStep={stepIndex + 1}
                            isFinalScreen={showFinalScreen}
                        />
                    ))}
                </div>
            )}

            <AnimatePresence mode="wait">
                {showFinalScreen ? (
                    <motion.div
                        key="final"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BuildYourStrategyFeed />
                    </motion.div>
                ) : showModal ? (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.2 }}
                    >
                        <StepCompleteModal
                            step={stepIndex + 1}
                            onComplete={() => {
                                if (nextStepIndex === null || nextStepIndex >= steps.length) {
                                    setShowModal(false)
                                    setShowFinalScreen(true)
                                    setTimeout(() => router.push('/onboarding/cta'), 3000)
                                } else {
                                    router.push(`?step=${steps[nextStepIndex].slug}`)
                                }
                            }}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key={currentSlug}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.5 }}
                    >
                        <StepContent formData={formData} updateFormData={updateFormData} />
                    </motion.div>
                )}
            </AnimatePresence>

            {!showModal && !showFinalScreen && (
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
            )}
        </div>
    )
}

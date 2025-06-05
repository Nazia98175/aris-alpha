'use client'
import { AnimatePresence, motion } from 'framer-motion'
import BuildYourStrategyFeed from './BuildYourStrategyFeed'
import NavigationButton from './NavigationButton'
import ProgressBarAnimation from './ProgressBarAnimation'
import StepCompleteModal from './StepCompleteModal'
import StepIndicator from './StepIndicator'
import { steps } from './Helper'
import StrategyFeed from './StrategyFeed'
import { useOnboarding } from './useOnboardinghook'

export default function Onboarding() {
    const {
        formData,
        updateFormData,
        showModal,
        showFinalScreen,
        progressPercent,
        startPercent,
        currentSlug,
        stepIndex,
        updateStep,
        targetStepIndex,
    } = useOnboarding()

    const StepComponent = () => {
        const step = steps[stepIndex].slug
        const props = { formData, updateFormData }

        switch (step) {
            case 'strategy-feed':
                return <StrategyFeed {...props} />
            default:
                return steps[stepIndex].component(props)
        }
    }

    const modalStepIndex = targetStepIndex !== null ? targetStepIndex : stepIndex

    return (
        <div className="relative mx-auto mt-5 mb-10 px-4">
            {showModal && <ProgressBarAnimation startPercent={startPercent} targetPercent={progressPercent} />}

            {!showModal && (
                <div className="relative z-20 mx-auto mb-10 flex w-full max-w-[395px] justify-between">
                    <div className="absolute top-1/2 left-0 h-1.5 w-full -translate-y-1/2 bg-[#808080]" />
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
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                    >
                        <StepCompleteModal step={modalStepIndex} />
                    </motion.div>
                ) : (
                    <motion.div
                        key={currentSlug}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{ duration: 0.4 }}
                    >
                        <StepComponent />
                    </motion.div>
                )}
            </AnimatePresence>

            {!showModal && !showFinalScreen && (
                <div className="mx-auto mt-7 flex w-full max-w-[486px] flex-col-reverse items-center justify-between gap-3 sm:flex-row">
                    <button
                        className="font-medium text-white/70 md:text-xl"
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
                        <NavigationButton
                            variant="primary"
                            onClick={() => {
                                if (!showModal) updateStep(stepIndex + 1)
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

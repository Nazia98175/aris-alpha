'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import BuildYourStrategyFeed from './BuildYourStrategyFeed'
import NavigationButton from './NavigationButton'
import ProgressBarAnimation from './ProgressBarAnimation'
import StepCompleteModal from './StepCompleteModal'
import StepIndicator from './StepIndicator'
import { steps } from './Helper'
import { AnimatePresence, motion } from 'framer-motion'

export default function Onboarding() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [showModal, setShowModal] = useState(false)
    const [showFinalScreen, setShowFinalScreen] = useState(false)
    const [progressPercent, setProgressPercent] = useState(0)
    const [startPercent, setStartPercent] = useState(0)

    const currentSlug = searchParams.get('step') || steps[0].slug
    const stepIndex = steps.findIndex((s) => s.slug === currentSlug) || 0
    const StepComponent = steps[stepIndex].component
    const totalSteps = steps.length

    const updateStep = (index: number) => {
        if (index >= totalSteps) {
            setStartPercent((stepIndex / totalSteps) * 100)
            setProgressPercent(100)
            setShowModal(true)
            setTimeout(() => {
                setShowModal(false)
                setShowFinalScreen(true)
                setTimeout(() => router.push('/onboarding/cta'), 2000)
            }, 1800)
            return
        }

        if (index > stepIndex) {
            setStartPercent((stepIndex / totalSteps) * 100)
            setProgressPercent((index / totalSteps) * 100)
            setShowModal(true)
            setTimeout(() => {
                setShowModal(false)
                router.push(`?step=${steps[index].slug}`)
            }, 1800)
        } else {
            router.push(`?step=${steps[index].slug}`)
        }
    }

    useEffect(() => {
        setProgressPercent((stepIndex / totalSteps) * 100)
    }, [stepIndex, totalSteps])

    return (
        <div className={`relative mx-auto mt-5 mb-10 px-4`}>
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
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                    >
                        <StepCompleteModal step={stepIndex} />
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
                    <button className="font-medium text-white/70 md:text-xl">Skip For Now</button>
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

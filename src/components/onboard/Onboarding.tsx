'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import BuildYourStrategyFeed from './BuildYourStrategyFeed'
import NavigationButton from './NavigationButton'
import ProgressBarAnimation from './ProgressBarAnimation'
import StepCompleteModal from './StepCompleteModal'
import StepIndicator from './StepIndicator'
import { steps } from './Helper'

export default function Onboarding() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const [showModal, setShowModal] = useState(false)
    const [showFinalScreen, setShowFinalScreen] = useState(false)
    const [progressPercent, setProgressPercent] = useState(0)
    const [startPercent, setStartPercent] = useState(0)

    const currentSlug = searchParams.get('step') || steps[0].slug
    const stepIndex =
        steps.findIndex((s) => s.slug === currentSlug) !== -1 ? steps.findIndex((s) => s.slug === currentSlug) : 0

    const StepComponent = steps[stepIndex].component

    const totalSteps = steps.length

    const updateStep = (index: number) => {
        if (index > totalSteps) {
            // Index beyond last step, do nothing or clamp
            return
        }

        if (index === totalSteps) {
            // Final step completed — show final screen
            setStartPercent((stepIndex / totalSteps) * 100)
            setProgressPercent(100)
            setShowModal(true)

            setTimeout(() => {
                setShowModal(false)
                setShowFinalScreen(true)
                setTimeout(() => {
                    router.push('/onboarding/cta')
                }, 2000)
            }, 1800)
            return
        }

        if (index > stepIndex) {
            const oldPercent = (stepIndex / totalSteps) * 100
            const newPercent = (index / totalSteps) * 100

            setStartPercent(oldPercent)
            setProgressPercent(newPercent)
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
    }, [stepIndex])

    useEffect(() => {
        setProgressPercent((stepIndex / (steps.length - 1)) * 100)
    }, [stepIndex])

    return (
        <div className={`relative mx-auto mt-5 px-4 ${showModal || showFinalScreen ? 'max-w-full' : 'max-w-[454px]'}`}>
            {/* Progress bar during modal transition */}
            {showModal && <ProgressBarAnimation startPercent={startPercent} targetPercent={progressPercent} />}

            {/* Step indicators always visible and above modal */}
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

            {/* Main content area */}

            {showFinalScreen ? (
                <BuildYourStrategyFeed />
            ) : showModal ? (
                <StepCompleteModal step={stepIndex} />
            ) : (
                <StepComponent />
            )}

            {/* Navigation controls hidden on modal and final screen */}
            {!showModal && !showFinalScreen && (
                <div className="mt-7 flex w-full flex-col-reverse items-center justify-between gap-3 sm:flex-row">
                    <button onClick={() => updateStep(steps.length)} className="font-medium text-white/70 md:text-xl">
                        Skip For Now
                    </button>
                    <div className="flex items-center gap-3">
                        <NavigationButton variant="back" onClick={() => updateStep(Math.max(stepIndex - 1, 0))} />
                        <NavigationButton variant="next" onClick={() => updateStep(stepIndex + 1)} />
                    </div>
                </div>
            )}
        </div>
    )
}

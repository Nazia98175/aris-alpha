// useOnboardinghook.ts
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { steps } from './Helper'

export function useOnboarding() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [formData, setFormData] = useState({
        strategyFeed: [] as string[],
        focusYourFeed: [] as string[],
        takeAction: [] as string[],
        cutNoise: [] as string[],
        mainObjective: [] as string[],
    })

    const [showModal, setShowModal] = useState(false)
    const [showFinalScreen, setShowFinalScreen] = useState(false)
    const [progressPercent, setProgressPercent] = useState(0)
    const [startPercent, setStartPercent] = useState(0)
    const [targetStepIndex, setTargetStepIndex] = useState<number | null>(null)

    const currentSlug = searchParams.get('step') || steps[0].slug
    const stepIndex = steps.findIndex((s) => s.slug === currentSlug)
    const totalSteps = steps.length

    const updateFormData = (key: keyof typeof formData, value: string[]) => {
        setFormData((prev) => ({ ...prev, [key]: value }))
    }

    const updateStep = (index: number) => {
        if (index === stepIndex) return

        if (index >= totalSteps) {
            setStartPercent((stepIndex / totalSteps) * 100)
            setProgressPercent(100)
            setShowModal(true)
            setTargetStepIndex(null)

            setTimeout(() => {
                setShowModal(false)
                setShowFinalScreen(true)
                setTimeout(() => router.push('/onboarding/cta'), 2000)
            }, 1800)
            return
        }

        const goingForward = index > stepIndex

        if (goingForward) {
            setTargetStepIndex(index)
            setStartPercent((stepIndex / totalSteps) * 100)
            setProgressPercent((index / totalSteps) * 100)
            setShowModal(true)

            setTimeout(() => {
                router.push(`?step=${steps[index].slug}`)
                setShowModal(false)
                setTargetStepIndex(null)
            }, 1800)
        } else {
            setTargetStepIndex(index)
            router.push(`?step=${steps[index].slug}`)
            setTargetStepIndex(null)
        }
    }

    useEffect(() => {
        setProgressPercent((stepIndex / totalSteps) * 100)
    }, [stepIndex, totalSteps])

    return {
        formData,
        updateFormData,
        showModal,
        setShowModal,
        showFinalScreen,
        setShowFinalScreen,
        progressPercent,
        startPercent,
        currentSlug,
        stepIndex,
        totalSteps,
        updateStep,
        targetStepIndex,
    }
}

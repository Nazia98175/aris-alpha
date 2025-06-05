'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { steps } from './Helper'

export function useOnboarding() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const currentSlug = searchParams.get('step') || steps[0].slug
    const stepIndex = steps.findIndex((s) => s.slug === currentSlug)
    const totalSteps = steps.length

    const [formData, setFormData] = useState({
        strategyFeed: [],
        focusYourFeed: [],
        takeAction: [],
        cutNoise: [],
        mainObjective: [],
    })
    console.log(formData)

    const [showModal, setShowModal] = useState(false)
    const [showFinalScreen, setShowFinalScreen] = useState(false)

    // Track the next step index to go after modal
    const [nextStepIndex, setNextStepIndex] = useState<number | null>(null)

    const updateFormData = (key: keyof typeof formData, value: string[]) => {
        setFormData((prev) => ({ ...prev, [key]: value }))
    }

    const updateStep = (index: number, skipModal = false) => {
        if (index === stepIndex || index < 0) return

        if (index >= totalSteps) {
            // No next step, show final modal
            setNextStepIndex(null)
            setShowModal(true)
            return
        }

        if (skipModal || index < stepIndex) {
            router.push(`?step=${steps[index].slug}`)
            return
        }

        // For normal forward navigation, save next step then show modal
        setNextStepIndex(index)
        setShowModal(true)
    }

    return {
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
    }
}

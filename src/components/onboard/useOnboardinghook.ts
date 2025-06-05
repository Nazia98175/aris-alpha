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
    const [showModal, setShowModal] = useState(false)
    const [showFinalScreen, setShowFinalScreen] = useState(false)

    const updateFormData = (key: keyof typeof formData, value: string[]) => {
        setFormData((prev) => ({ ...prev, [key]: value }))
    }

    const updateStep = (index: number, skipModal = false) => {
        if (index === stepIndex || index < 0) return

        if (index >= totalSteps) {
            setShowModal(true)
            return
        }

        if (skipModal || index < stepIndex) {
            router.push(`?step=${steps[index].slug}`)
            return
        }

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
    }
}

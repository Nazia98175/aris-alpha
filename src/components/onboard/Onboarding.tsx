'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import BuildYourStrategyFeed from './BuildYourStrategyFeed'
import { steps } from './Helper'
import NavigationButton from './NavigationButton'
import StepCompleteModal from './StepCompleteModal'
import StepIndicator from './StepIndicator'
import { useOnboarding } from './useOnboardinghook'
import { supabase } from '@/lib/supabase/client'

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

    async function handleOnboardingComplete() {
        try {
            const { data, error: authError } = await supabase.auth.getUser()

            if (authError || !data.user) {
                // No authenticated user - save to session and redirect to CTA
                setShowModal(false)
                setShowFinalScreen(true)
                sessionStorage.setItem('onBoardData', JSON.stringify(formData))
                setTimeout(() => router.push('/onboarding/cta'), 3000)
                return
            }

            // Check if user exists in users table
            let { data: user, error } = await supabase
                .from('users')
                .select('*')
                .eq('email', data.user.email as string)
                .maybeSingle()

            if (error) {
                console.error('Error fetching user:', error)
                throw new Error('Failed to fetch user data')
            }

            if (!user) {
                // User authenticated but not in users table - create the user
                const { data: newUser, error: createError } = await supabase
                    .from('users')
                    .insert({
                        email: data.user.email!,
                        // Add other required fields based on your schema
                        // For example: first_name, last_name, etc.
                    })
                    .select()
                    .single()

                if (createError) {
                    console.error('Error creating user:', createError)
                    throw new Error('Failed to create user record')
                }

                // Use the newly created user
                user = newUser
            }

            // Save onboarding data
            await supabase.from('onboarding').upsert(
                {
                    user_id: user.id,
                    cutNoise: JSON.stringify(formData.cutNoise),
                    focusYourFeed: JSON.stringify(formData.focusYourFeed),
                    mainObjective: JSON.stringify(formData.mainObjective),
                    takeAction: JSON.stringify(formData.takeAction),
                    strategyFeed: JSON.stringify(formData.strategyFeed),
                },
                {
                    onConflict: 'user_id',
                },
            )

            // Update onboarding status if needed
            if (!user.isOnBoarded) {
                await supabase.from('users').update({ isOnBoarded: true }).eq('id', user.id)
            }

            return router.push('/dashboard')
        } catch (error) {
            console.error('Onboarding error:', error)
            // Fallback to non-authenticated flow
            setShowModal(false)
            setShowFinalScreen(true)
            sessionStorage.setItem('onBoardData', JSON.stringify(formData))
            setTimeout(() => router.push('/onboarding/cta'), 3000)
        }
    }

    useEffect(() => {
        if (showModal && currentSlug !== prevSlug.current) {
            setShowModal(false)
        }
        prevSlug.current = currentSlug
    }, [currentSlug, showModal, setShowModal])

    return (
        <div className="y-4 mx-auto w-full px-4 sm:my-6">
            {!showModal && (
                <div className="relative z-20 mx-auto flex w-full max-w-[85%] justify-between min-[350px]:max-w-[320px] sm:max-w-[395px]">
                    <div className="absolute top-1/2 left-1/2 h-[3px] w-full max-w-[97%] -translate-x-1/2 -translate-y-1/2 bg-[#808080] sm:h-1 lg:h-1.5" />
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
                    <StepCompleteModal
                        key="modal"
                        step={stepIndex + 1}
                        desc={steps[stepIndex].desc}
                        icon={steps[stepIndex].icon}
                        onComplete={() => {
                            if (nextStepIndex === null || nextStepIndex >= steps.length) {
                                handleOnboardingComplete()
                            } else {
                                router.push(`?step=${steps[nextStepIndex].slug}`)
                            }
                        }}
                    />
                ) : (
                    <motion.div
                        key={currentSlug}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <StepContent formData={formData} updateFormData={updateFormData} />
                    </motion.div>
                )}
            </AnimatePresence>
            {!showModal && !showFinalScreen && (
                <div className="mx-auto mt-3 flex w-full max-w-[486px] flex-col-reverse items-center justify-between gap-3 sm:mt-7 sm:flex-row xl:mt-3">
                    <button
                        className="text-white/70 hover:underline sm:font-medium md:text-xl"
                        onClick={() => updateStep(stepIndex + 1, true)}
                    >
                        Skip For Now
                    </button>
                    <div className="flex items-center gap-3">
                        <NavigationButton
                            variant="secondary"
                            className={`${stepIndex === 0 ? 'hidden' : ''}`}
                            onClick={() => updateStep(stepIndex - 1)}
                        />
                        <NavigationButton variant="primary" onClick={() => updateStep(stepIndex + 1)} />
                    </div>
                </div>
            )}
        </div>
    )
}

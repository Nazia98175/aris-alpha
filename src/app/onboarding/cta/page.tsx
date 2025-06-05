import OnboardHeader from '@/components/onboard/OnboardHeader'
import ReadyToFilter from '@/components/onboard/ReadyToFilter'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Onboarding | CTA',
    description:
        'Get started with our quick and interactive onboarding process. Learn how to build your strategy with ease.',
}
const CtaPage = () => {
    return (
        <section className="min-h-screen bg-[url('/assets/backgrounds/onboard-bg.webp')] bg-cover bg-fixed bg-center">
            <OnboardHeader />
            <ReadyToFilter />
        </section>
    )
}

export default CtaPage

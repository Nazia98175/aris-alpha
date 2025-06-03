import OnboardHeader from '@/components/onboard/OnboardHeader'
import ReadyToFilter from '@/components/onboard/ReadyToFilter'
import React from 'react'

const CtaPage = () => {
    return (
        <section className="min-h-screen bg-[url('/assets/backgrounds/onboard-bg.webp')] bg-cover bg-fixed bg-center">
            <OnboardHeader />
            <ReadyToFilter />
        </section>
    )
}

export default CtaPage

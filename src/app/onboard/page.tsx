import OnboardHeader from '@/components/onboard/OnboardHeader'
import Step1 from '@/components/onboard/step-1'
import React from 'react'

const OnBoardPage = () => {
    return (
        <section className="bg-opacity-40 min-h-screen bg-[url('/assets/homepage/webp/onboard-bg.webp')] bg-cover bg-center">
            <OnboardHeader />
            <Step1 />
        </section>
    )
}

export default OnBoardPage

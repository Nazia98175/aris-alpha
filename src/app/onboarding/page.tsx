import OnboardHeader from '@/components/onboard/OnboardHeader'
import Onboarding from '@/components/onboard/Onboarding'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
    title: 'Onboarding | Aris Alpha',
    description:
        'Get started with our quick and interactive onboarding process. Learn how to build your strategy with ease.',
}

const OnBoardPage = () => {
    return (
        <section className="flex min-h-screen flex-col bg-[url('/assets/backgrounds/onboard-bg.webp')] bg-cover bg-fixed bg-center">
            <OnboardHeader />
            <Suspense fallback={<div className="flex-1">Loading...</div>}>
                <div className="flex flex-1 flex-col">
                    <Onboarding />
                </div>
            </Suspense>
        </section>
    )
}

export default OnBoardPage

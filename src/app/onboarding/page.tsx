import OnboardHeader from '@/components/onboard/OnboardHeader'
import Onboarding from '@/components/onboard/Onboarding'
import { Suspense } from 'react'

const OnBoardPage = () => {
    return (
        <section className="min-h-screen bg-[url('/assets/backgrounds/onboard-bg.webp')] bg-cover bg-fixed bg-center">
            <OnboardHeader />
            <Suspense fallback={<div>Loading...</div>}>
                <Onboarding />
            </Suspense>
        </section>
    )
}

export default OnBoardPage

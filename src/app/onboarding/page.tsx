import OnboardHeader from '@/components/onboard/OnboardHeader'
import Onboarding from '@/components/onboard/Onboarding'

const OnBoardPage = () => {
    return (
        <section className="min-h-screen bg-[url('/assets/backgrounds/onboard-bg.webp')] bg-cover bg-fixed bg-center">
            <OnboardHeader />

            <Onboarding />
        </section>
    )
}

export default OnBoardPage

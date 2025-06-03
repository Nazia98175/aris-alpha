import OnBoard from '@/components/onboard/OnBoard'
import OnboardHeader from '@/components/onboard/OnboardHeader'

const OnBoardPage = () => {
    return (
        <section className="min-h-screen bg-[url('/assets/backgrounds/onboard-bg.webp')] bg-cover bg-fixed bg-center">
            <OnboardHeader />
            <OnBoard />
        </section>
    )
}

export default OnBoardPage

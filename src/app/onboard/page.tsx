import OnBoard from '@/components/onboard/OnBoard'
import OnboardHeader from '@/components/onboard/OnboardHeader'

const OnBoardPage = () => {
    return (
        <section className="bg-opacity-40 min-h-screen bg-[url('/assets/homepage/webp/onboard-bg.webp')] bg-cover bg-center">
            <OnboardHeader />
            <OnBoard />
        </section>
    )
}

export default OnBoardPage

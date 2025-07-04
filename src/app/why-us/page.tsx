import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/public/footer'
import { OurPhilosophy } from '@/components/why-us/OurPhilosophy'
import { OurSolution } from '@/components/why-us/OurSolution'
import ProblemWeSolve from '@/components/why-us/ProblemWeSolve'
import WhoAreWe from '@/components/why-us/WhoAreWe'
import { tradeData } from '../actions/trade.actions'
import { SliderOverlay } from '@/components/home/Icons'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Aris Alpha | Why Choose Us',
    description:
        'Discover how Aris Alpha is solving real trading problems, offering unique solutions, and delivering value with AI-driven strategies',
    openGraph: {
        title: 'Aris Alpha | Why Choose Us',
        description:
            'Discover how Aris Alpha is solving real trading problems, offering unique solutions, and delivering value with AI-driven strategies',
        images: ['https://i.ibb.co/hzVMCg6/why-us-seo.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aris Alpha | Why Choose Us',
        description:
            'Discover how Aris Alpha is solving real trading problems, offering unique solutions, and delivering value with AI-driven strategies',
        images: ['https://i.ibb.co/hzVMCg6/why-us-seo.png'],
    },
}
const WhyUsPage = async () => {
    const trade = await tradeData()

    return (
        <section className="relative">
            <Navbar navBg="!bg-background" />
            <WhoAreWe />
            <span className="absolute bottom-0 left-0 block w-full translate-y-[70%] rotate-180">
                <SliderOverlay />
            </span>
            <ProblemWeSolve />
            <section className="relative h-auto bg-[url('/assets/backgrounds/bg-ellipse.webp')] bg-contain bg-no-repeat md:bg-center 2xl:bg-cover">
                <OurSolution />
            </section>
            <section className="relative mt-[74px] h-auto w-full bg-[url('/assets/backgrounds/bg-ellipse.webp')] bg-contain bg-no-repeat px-4 md:bg-bottom xl:h-[804px] 2xl:bg-cover 2xl:bg-center">
                <div className="relative z-10 h-full w-full">
                    <OurPhilosophy trade={trade} />
                </div>
                <div className="gradient-dark-black-layer absolute bottom-0 left-0 z-0 h-[200px] w-full"></div>
                <div className="gradient-dark-black-layer-top absolute top-0 left-0 z-0 h-[200px] w-full"></div>
            </section>
            <Footer />
        </section>
    )
}

export default WhyUsPage

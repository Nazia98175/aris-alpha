import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/public/footer'
import { OurPhilosophy } from '@/components/why-us/OurPhilosophy'
import { OurSolution } from '@/components/why-us/OurSolution'
import ProblemWeSolve from '@/components/why-us/ProblemWeSolve'
import WhoAreWe from '@/components/why-us/WhoAreWe'
// import { Metadata } from 'next'
// import Image from 'next/image'

// export const metadata: Metadata = {
//     title: 'Working | CTA',
//     description:
//         'Get started with our quick and interactive onboarding process. Learn how to build your strategy with ease.',
// }
const WhyUsPage = () => {
    return (
        <section className="relative">
            <Navbar navBg="!bg-[#000103]" />
            <WhoAreWe />
            <ProblemWeSolve />
            <section className="relative h-auto bg-[url('/assets/backgrounds/working-bg.webp')] bg-no-repeat md:bg-contain md:bg-center xl:h-[804px]">
                <OurSolution />
            </section>
            <section className="relative h-auto bg-[url('/assets/backgrounds/working-bg.webp')] bg-no-repeat md:bg-contain md:bg-bottom xl:h-[804px]">
                <OurPhilosophy />
            </section>
            <Footer />
        </section>
    )
}

export default WhyUsPage

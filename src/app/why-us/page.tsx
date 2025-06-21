import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/public/footer'
import WhoAreWe from '@/components/why-us/WhoAreWe'
import { Metadata } from 'next'
import Image from 'next/image'

// export const metadata: Metadata = {
//     title: 'Working | CTA',
//     description:
//         'Get started with our quick and interactive onboarding process. Learn how to build your strategy with ease.',
// }
const WhyUsPage = () => {
    return (
        <section className="relative">
            <Navbar navBg="!bg-[#000103]" />
            {/* <ReadyToFilter /> */}
            <WhoAreWe />

            <section className="relative min-h-screen bg-[url('/assets/backgrounds/second-working-bg.webp')] bg-contain bg-center">
                <div className="relative bg-black/50">
                    {/* <WorkingFooter /> */}
                    <Footer />
                </div>
            </section>
        </section>
    )
}

export default WhyUsPage

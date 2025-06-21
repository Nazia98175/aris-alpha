import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/public/footer'
import BuiltAroundReality from '@/components/why-it-works/BuiltAroundReality'
import SignalClarity from '@/components/why-it-works/SignalClarity'
import ThatsWhyItWorks from '@/components/why-it-works/ThatsWhyItWorks'
import WhatYouGet from '@/components/why-it-works/WhatYouGet'
import WhyItOutperforms from '@/components/why-it-works/WhyItOutperforms'
import WhyItWorks from '@/components/why-it-works/WhyItWorks'

// export const metadata: Metadata = {
//     title: 'Working | CTA',
//     description:
//         'Get started with our quick and interactive onboarding process. Learn how to build your strategy with ease.',
// }
const WhyItWorksPage = () => {
    return (
        <section className="relative">
            <Navbar navBg="!bg-[#000103]" />
            {/* <ReadyToFilter /> */}
            <WhyItWorks />
            <SignalClarity />
            <BuiltAroundReality />
            <section className="relative min-h-screen bg-[url('/assets/backgrounds/working-bg.webp')] bg-no-repeat md:bg-contain md:bg-center">
                <WhatYouGet />
                <WhyItOutperforms />
                <ThatsWhyItWorks />
                {/* <WorkingFooter /> */}
                <Footer />
            </section>
        </section>
    )
}

export default WhyItWorksPage

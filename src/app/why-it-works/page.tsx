import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/public/footer'
import BuiltAroundReality from '@/components/why-it-works/BuiltAroundReality'
import SignalClarity from '@/components/why-it-works/SignalClarity'
import ThatsWhyItWorks from '@/components/why-it-works/ThatsWhyItWorks'
import WhatYouGet from '@/components/why-it-works/WhatYouGet'
import WhyItOutperforms from '@/components/why-it-works/WhyItOutperforms'
import WhyItWorks from '@/components/why-it-works/WhyItWorks'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Aris Alpha | Why It Works',
    description:
        'Discover the core principles and innovations that make Aris Alpha’s AI trading system outperform traditional methods. Real-time clarity, logic-based models, and proven results.',
    openGraph: {
        title: 'Aris Alpha | Why It Works',
        description:
            'Discover the core principles and innovations that make Aris Alpha’s AI trading system outperform traditional methods. Real-time clarity, logic-based models, and proven results.',
        images: ['https://i.ibb.co/GvzP8XRV/why-it-work-seo.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aris Alpha | Why It Works',
        description:
            'Discover the core principles and innovations that make Aris Alpha’s AI trading system outperform traditional methods. Real-time clarity, logic-based models, and proven results.',
        images: ['https://i.ibb.co/GvzP8XRV/why-it-work-seo.png'],
    },
}
const WhyItWorksPage = () => {
    return (
        <section className="relative">
            <Navbar navBg="!bg-background" />
            <WhyItWorks />
            <SignalClarity />
            <BuiltAroundReality />
            <WhatYouGet />
            <section className="relative h-auto bg-[url('/assets/backgrounds/bg-ellipse.webp')] bg-contain bg-no-repeat md:bg-center 2xl:bg-cover">
                <div className="relative z-10">
                    <WhyItOutperforms />
                    <ThatsWhyItWorks />
                    <Footer />
                </div>
                <div className="gradient-dark-black-layer-top absolute top-0 left-0 z-0 h-[200px] w-full"></div>
            </section>
        </section>
    )
}

export default WhyItWorksPage

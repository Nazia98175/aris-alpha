import Navbar from '@/components/layout/navbar'
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
}
const WhyItWorksPage = () => {
    return (
        <section className="relative">
            <Navbar navBg="!bg-background" />
            <WhyItWorks />
            <SignalClarity />
            <BuiltAroundReality />
            <WhatYouGet />
            <section className="relative h-auto bg-[url('/assets/homepage/png/working-another-bg.png')] bg-contain bg-no-repeat md:bg-center">
                <WhyItOutperforms />
                <ThatsWhyItWorks />
                <Footer />
            </section>
        </section>
    )
}

export default WhyItWorksPage

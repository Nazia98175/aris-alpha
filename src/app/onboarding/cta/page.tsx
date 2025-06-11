import OnboardHeader from '@/components/onboard/OnboardHeader'
import ReadyToFilter from '@/components/onboard/ReadyToFilter'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
    title: 'Onboarding | CTA',
    description:
        'Get started with our quick and interactive onboarding process. Learn how to build your strategy with ease.',
}
const CtaPage = () => {
    return (
        <section className="min-h-screen bg-[url('/assets/backgrounds/onboard-bg.webp')] bg-cover bg-fixed bg-center relative">
            <Image
                width={1140}
                height={696}
                src="/assets/onboarding/webp/strategy-feed.webp"
                alt="strategy-feed"
                className="rounded-sm object-cover blur-[14px] lg:rounded-4xl absolute bottom-0 left-1/2 translate-x-[-50%]"
            />
            <OnboardHeader />
            <ReadyToFilter />
        </section>
    )
}

export default CtaPage

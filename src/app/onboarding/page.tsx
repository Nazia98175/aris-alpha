import Navbar from '@/components/layout/Navbar'
import LoaderSpinner from '@/components/onboard/LoaderSpinner'
import Onboarding from '@/components/onboard/Onboarding'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
    title: 'Aris Alpha | Onboarding ',
    description:
        'Get started with our quick and interactive onboarding process. Learn how to build your strategy with ease.',
}

const OnBoardPage = () => {
    return (
        <section className="flex min-h-screen flex-col bg-[url('/assets/backgrounds/onboard-bg.webp')] bg-cover bg-fixed bg-center">
            <Navbar navBg="!bg-background" />
            <Suspense fallback={<LoaderSpinner />}>
                <Onboarding />
            </Suspense>
        </section>
    )
}

export default OnBoardPage

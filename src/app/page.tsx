import AiHandle from '@/components/home/ai-handle'
import AlphaBuild from '@/components/home/alpha-build'
import Dashboard from '@/components/home/dashboard'
import Header from '@/components/home/header'
import InstantlyAction from '@/components/home/instantly-action'
import Projects from '@/components/home/Projects'
import Reviews from '@/components/home/reviews'
import Footer from '@/components/layout/public/footer'
import Navbar from '@/components/layout/public/Navbar'
import Image from 'next/image'

export default async function Home() {
    return (
        <div className="relative">
            <main className="bg-[url('/assets/homepage/webp/hero-bg.webp')] bg-cover bg-right">
                <Navbar />
                <Header />
                <Projects />
            </main>
            <Reviews />
            <Dashboard />
            <AiHandle />
            <AlphaBuild />
            <div className="relative">
                <Image
                    fill
                    className="absolute bottom-[10%] left-0 z-[-1] h-[700px] w-full object-cover object-right md:object-fill"
                    src="/assets/homepage/webp/hero-bg.webp"
                    alt="background"
                />
                <InstantlyAction />
                <Footer />
            </div>
        </div>
    )
}

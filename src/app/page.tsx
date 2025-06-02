import Chart from '@/components/home/chart'
import Header from '@/components/home/header'
import MarkIntelligence from '@/components/home/market-intelligence'
import NewsLetterSubscribe from '@/components/home/newsletter-subscribe'
import StayHead from '@/components/home/stay-head'
import Footer from '@/components/layout/public/footer'
import Navbar from '@/components/layout/public/Navbar'
import { tradeData } from './actions/trade.actions'
import Projects from '@/components/home/Projects'
import Reviews from '@/components/home/reviews'
import Instantly from '@/components/home/Instantly'
import ArisAlphaBuild from '@/components/home/ArisAlphaBuild'

export default async function Home() {
    const trade = await tradeData()

    return (
        <div className="relative overflow-hidden">
            <main className="bg-[url('/assets/homepage/webp/hero-bg.webp')] bg-cover">
                <Navbar />
                <Header />
                <Projects />
            </main>
            <Reviews />
            <MarkIntelligence />
            <StayHead />
            <Chart trade={trade} />
            <NewsLetterSubscribe />
            <ArisAlphaBuild />
            <div className="relative">
                <img
                    className="absolute bottom-[10%] left-0 z-[-1] h-[700px] w-full object-cover object-right md:object-fill"
                    src="/assets/homepage/webp/hero-bg.webp"
                    alt="background"
                />
                <Instantly />
                <Footer />
            </div>
        </div>
    )
}

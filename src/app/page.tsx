import Chart from '@/components/home/chart'
import Header from '@/components/home/header'
import MarkIntelligence from '@/components/home/market-intelligence'
import NewsLetterSubscribe from '@/components/home/newsletter-subscribe'
import StayHead from '@/components/home/stay-head'
import Footer from '@/components/layout/public/footer'
import Navbar from '@/components/layout/public/Navbar'
import { tradeData } from './actions/trade.actions'

export default async function Home() {
    const trade = await tradeData()

    return (
        <div className="relative overflow-hidden">
            <div className="relative h-screen overflow-hidden">
                <div className="relative z-10 flex h-full flex-col" id="home">
                    <Navbar />

                    {/* <div className="grid h-0 flex-grow place-content-center"> */}
                    <Header />
                    {/* </div> */}
                </div>

                {/* <div className="absolute top-0 right-0 bottom-0 left-0 -z-10">
                    <div className="h-full w-full">
                        <Image
                            alt="navbar-top-overlay"
                            src="/assets/backgrounds/navbar-top-bg-overlay.png"
                            fill
                            priority={false}
                        />
                    </div>
                </div> */}
                {/* <div
                    className="absolute -top-[45%] right-0 -bottom-[300px] -z-10 w-[35%] rotate-45"
                    style={{
                        filter: 'blur(10px)',
                        background:
                            'linear-gradient(125.82deg, rgba(0, 26, 255, 0.5248) -3.98%, rgba(0, 13, 125, 0.0192) 42.03%)',
                    }}
                ></div>

                <div
                    className="absolute -top-40 -right-10 bottom-[0%] w-[10%] -rotate-[16deg] rounded-tl-full rounded-bl-full blur-[40px] lg:w-40"
                    style={{
                        background:
                            'linear-gradient(258.8deg, rgba(0, 26, 255, 0.8) 16.35%, rgba(140, 0, 255, 0.8) 77.56%)',
                    }}
                ></div>
                <div className="absolute top-1/2 -right-10 h-[60%] w-[5%] -translate-y-1/2 -rotate-[16deg] transform rounded-tl-full rounded-bl-full bg-[#FFFFFFC2] blur-[40px] lg:w-20"></div>
                <div
                    className="absolute -top-40 bottom-[0%] -left-10 w-[10%] rotate-[16deg] rounded-tr-full rounded-br-full blur-[40px] lg:w-40"
                    style={{
                        background:
                            'linear-gradient(258.8deg, rgba(0, 26, 255, 0.8) 16.35%, rgba(140, 0, 255, 0.8) 77.56%)',
                    }}
                ></div>
                <div className="absolute top-1/2 -left-10 h-[60%] w-[5%] -translate-y-1/2 rotate-[16deg] transform rounded-tr-full rounded-br-full bg-[#FFFFFFC2] blur-[40px] lg:w-20"></div> */}
            </div>

            <MarkIntelligence />
            <StayHead />
            <Chart trade={trade} />
            <NewsLetterSubscribe />
            <Footer />
        </div>
    )
}

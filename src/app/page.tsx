import ArisAlphaBuild from '@/components/home/ArisAlphaBuild'
import Dashboard from '@/components/home/dashboard'
import Header from '@/components/home/header'
import Instantly from '@/components/home/Instantly'
import Projects from '@/components/home/Projects'
import Reviews from '@/components/home/reviews'
import Footer from '@/components/layout/public/footer'
import Navbar from '@/components/layout/public/navbar'

export default async function Home() {

    return (
        <div className="relative overflow-hidden">
            <main className="bg-[url('/assets/homepage/webp/hero-bg.webp')] bg-cover">
                <Navbar />
                <Header />
                <Projects />
            </main>
            <Reviews />
            <Dashboard />
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

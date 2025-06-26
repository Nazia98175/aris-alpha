'use client'

import { useState, useEffect, useRef } from 'react'
import AiHandle from '@/components/home/ai-handle'
import AlphaBuild from '@/components/home/alpha-build'
import Dashboard from '@/components/home/dashboard'
import Header from '@/components/home/header'
import InstantlyAction from '@/components/home/instantly-action'
import Projects from '@/components/home/Projects'
import Reviews from '@/components/home/reviews'
import Footer from '@/components/layout/public/footer'
import Image from 'next/image'
import Navbar from '@/components/layout/navbar'

export default function Home() {
    const [aiHandleScrolled, setAiHandleScrolled] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)
    const aiHandleRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Check if desktop on mount and resize
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 768)
        }

        checkDesktop()
        window.addEventListener('resize', checkDesktop)

        return () => window.removeEventListener('resize', checkDesktop)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            // Only apply effect on desktop (768px and above)
            if (window.innerWidth < 768) {
                setAiHandleScrolled(true) // Always show on mobile
                return
            }

            if (aiHandleRef.current) {
                const rect = aiHandleRef.current.getBoundingClientRect()
                const windowHeight = window.innerHeight

                if (rect.bottom <= windowHeight * 0.4) {
                    setAiHandleScrolled(true)
                } else {
                    setAiHandleScrolled(false)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="relative">
            <main className="bg-[url('/assets/homepage/webp/hero-bg.webp')] bg-cover bg-right">
                <Navbar navBg="" />
                <Header />
                <Projects />
            </main>
            <div className="relative overflow-visible">
                <div className="absolute -top-2 h-32 w-full max-w-full bg-gradient-to-t from-black/70 to-black blur-xl"></div>
                <Reviews />
                <div className="bottom-overlay from-background absolute right-0 -bottom-10 left-0 h-[200px] w-full bg-linear-to-t to-transparent blur-2xl"></div>
            </div>
            <Dashboard />
            <div ref={aiHandleRef}>
                <AiHandle />
            </div>
            <div className="relative">
                <div
                    className={`relative transition-all duration-1000 ${
                        aiHandleScrolled || !isDesktop ? 'opacity-100' : 'opacity-0'
                    }`}
                >
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
            </div>
        </div>
    )
}

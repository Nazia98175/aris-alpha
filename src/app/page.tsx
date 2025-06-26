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
import { SliderOverlay } from '@/components/home/Icons'

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
            <div className="relative z-10">
                {/* <div className="absolute h-40 w-full max-w-full bg-[linear-gradient(to_bottom,rgba(0,1,3,0)_0%,#000103_100%)] blur-xl top-[-140px]"></div> */}
                <Reviews />
                <span className="absolute top-0 left-0 block w-full translate-y-[-70%]">
                    <SliderOverlay />
                </span>
                <span className="absolute bottom-0 left-0 block w-full translate-y-[70%] rotate-180">
                    <SliderOverlay />
                </span>
                {/* <div className="bottom-overlay from-red-500 absolute right-0 -bottom-10 left-0 h-[200px] w-full bg-linear-to-t to-transparent blur-2xl"></div> */}
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

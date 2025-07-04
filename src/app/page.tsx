'use client'

import { useState, useEffect, useRef } from 'react'
import AiHandle from '@/components/home/AiHandle'
import AlphaBuild from '@/components/home/AlphaBuild'
import Dashboard from '@/components/home/dashboard'
import Header from '@/components/home/header'
import InstantlyAction from '@/components/home/InstantlyAction'
import Projects from '@/components/home/Projects'
import Reviews from '@/components/home/reviews'
import Footer from '@/components/layout/public/footer'
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
            <main className="relative bg-[url('/assets/backgrounds/bg-ellipse.webp')] bg-cover bg-right min-[2500px]:!pb-[100px]">
                <div className="relative z-50">
                    <Navbar/>
                    <Header />
                    <Projects />
                </div>
                <div className="gradient-dark-black-layer absolute bottom-0 left-0 z-0 h-[200px] w-full"></div>
            </main>
            <Reviews />

            <div className="relative">
                <Dashboard />
                <div className="gradient-dark-black-layer-top absolute top-0 left-0 z-0 h-[200px] w-full"></div>
                <div className="gradient-dark-black-layer absolute bottom-0 left-0 z-0 h-[200px] w-full"></div>
            </div>
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
                    <div className="relative bg-[url('/assets/backgrounds/bg-ellipse.webp')] bg-cover bg-center bg-no-repeat">
                        <div className="relative z-10">
                            <InstantlyAction />
                            <Footer />
                        </div>
                        <div className="gradient-dark-black-layer absolute bottom-0 left-0 z-0 h-[200px] w-full"></div>
                        <div className="gradient-dark-black-layer-top absolute top-0 left-0 z-0 h-[200px] w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

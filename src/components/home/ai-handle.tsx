'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import CommonBtn from '../ui/common-btn'
import { BuySellIcon, ForeCastIcon, NoguessIcon, OutLookIcon } from './Icons'

interface FeatureCard {
    id: number
    icon: JSX.Element
    title: string
    description: string
    image: string
}

const AiHandle = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
    const containerRef = useRef<HTMLDivElement>(null)

    const features: FeatureCard[] = [
        {
            id: 1,
            icon: <BuySellIcon />,
            title: 'Buy/Sell Alerts',
            description: 'No guessing. We flag the moment.',
            image: '/assets/homepage/png/buy-sell.png',
        },
        {
            id: 2,
            icon: <NoguessIcon />,
            title: 'No guessing. We flag the moment.',
            description: 'No spread cants, just deart insights.',
            image: '/assets/homepage/png/no-guessing.png',
        },
        {
            id: 3,
            icon: <ForeCastIcon />, 
            title: 'Sentiment Forecasts',
            description: 'No gimmicks. Only clear market moves.',
            image: '/assets/homepage/png/forecast.png', 
        },
        {
            id: 4,
            icon: <OutLookIcon />, 
            title: 'Weekly Outlooks',
            description: "Be prepared—know what's ahead.",
            image: '/assets/homepage/png/outlook.png', 
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const windowHeight = window.innerHeight

            sectionRefs.current.forEach((ref, index) => {
                if (ref) {
                    const { top, bottom } = ref.getBoundingClientRect()
                    const sectionCenter = top + (bottom - top) / 2

                    // Check if section center is in the middle third of viewport
                    if (sectionCenter > windowHeight / 3 && sectionCenter < (windowHeight * 2) / 3) {
                        setActiveIndex(index)
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial check

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="relative bg-black py-16 pb-20">
            <div className="custom-container">
                <h2 className="gradient-text secondary-heading mx-auto mb-6 w-fit text-center sm:mb-8 lg:mb-12 xl:mb-[72px]">
                    Let the AI Handle the Chaos
                </h2>

                <div className="relative flex gap-8 lg:gap-16">
                    {/* Left side - Cards */}
                    <div className="flex-1 space-y-24 lg:space-y-32">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                ref={(el) => (sectionRefs.current[index] = el)}
                                className="min-h-[300px] lg:min-h-[400px] flex flex-col justify-center"
                            >
                                <span className="flex size-16 items-center justify-center rounded-[12px] border border-[#0000001A] bg-[#2A64F6] lg:size-[86px]">
                                    {feature.icon}
                                </span>
                                <h2 className="secondary-heading mt-6 mb-2 text-white">{feature.title}</h2>
                                <p className="text-sm leading-[130%] text-[#D0D0D0] sm:text-base xl:text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right side - Sticky Image */}
                    <div className="hidden md:block max-w-[400px] lg:max-w-[550px] xl:max-w-[656px]">
                        <div className="sticky top-10">
                            <div className="relative overflow-hidden rounded-2xl">
                                {features.map((feature, index) => (
                                    <div
                                        key={feature.id}
                                        className={`transition-all duration-700 ${
                                            activeIndex === index
                                                ? 'opacity-100'
                                                : 'absolute inset-0 opacity-0'
                                        }`}
                                    >
                                        <Image
                                            className="w-full rounded-2xl shadow-2xl"
                                            unoptimized
                                            height={400}
                                            width={656}
                                            src={feature.image}
                                            alt={feature.title}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <CommonBtn
                    className="mx-auto mt-12 w-fit sm:mt-16 lg:mt-20 lg:!py-[18px] xl:mt-24"
                    btnText="Get Started"
                    btnUrl="/"
                    variant="primary"
                />
            </div>
        </section>
    )
}

export default AiHandle

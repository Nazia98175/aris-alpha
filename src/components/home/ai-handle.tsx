'use client'

import Image from 'next/image'
import { JSX, useEffect, useRef, useState } from 'react'
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
            // Only apply scroll effect on desktop (md and above)
            if (window.innerWidth < 768) return

            sectionRefs.current.forEach((ref, index) => {
                if (ref) {
                    const { top, bottom } = ref.getBoundingClientRect()
                    const sectionCenter = top + (bottom - top) / 2
                    const windowHeight = window.innerHeight

                    // Check if section center is in the middle third of viewport
                    if (sectionCenter > windowHeight / 3 && sectionCenter < (windowHeight * 2) / 3) {
                        setActiveIndex(index)
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="relative py-10 sm:pt-16 sm:pb-20 xl:pb-28" id='about-us'>
            <Image
                className="w-full absolute opacity-[32%] z-[-1] mix-blend-hard-light"
                unoptimized
                height={150}
                width={200}
                src={'/assets/homepage/webp/ai-handle-bg.webp'}
                alt={"AiHandle"}
            />
            <div className="custom-container">
                <h2 className="gradient-text secondary-heading mx-auto mb-6 w-fit text-center sm:mb-8 lg:mb-12 xl:mb-[72px]">
                    Let the AI Handle the Chaos
                </h2>
                {/* Mobile/Tablet Layout - Static Cards */}
                <div className="block space-y-8 md:hidden">
                    {features.map((feature) => (
                        <div key={feature.id} className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-4 sm:p-8">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                                <div className="flex-1">
                                    <span className="flex size-16 items-center justify-center rounded-[12px] border border-[#0000001A] bg-[#2A64F6]">
                                        {feature.icon}
                                    </span>
                                    <h3 className="mt-4 mb-2 text-xl font-semibold text-white">{feature.title}</h3>
                                    <p className="text-sm leading-[130%] text-[#D0D0D0]">{feature.description}</p>
                                </div>
                                <div className="mt-4 sm:mt-0 sm:w-[300px]">
                                    <Image
                                        className="w-full rounded-lg"
                                        unoptimized
                                        height={150}
                                        width={200}
                                        src={feature.image}
                                        alt={feature.title}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Desktop Layout - Scroll Effect */}
                <div className="relative hidden gap-8 md:flex lg:gap-16">
                    {/* Left side - Cards */}
                    <div className="flex-1 space-y-8 lg:space-y-16 xl:space-y-[100px]">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                ref={(el) => {
                                    sectionRefs.current[index] = el
                                }}
                                className="flex min-h-[244px] flex-col justify-center lg:min-h-[335px] xl:min-h-[400px]"
                            >
                                <span className="flex size-16 items-center justify-center rounded-[12px] border border-[#0000001A] bg-[#2A64F6] lg:size-[86px]">
                                    {feature.icon}
                                </span>
                                <h2 className="mt-6 mb-2 text-2xl leading-[120%] text-white lg:text-4xl xl:text-[48px]">
                                    {feature.title}
                                </h2>
                                <p className="text-sm leading-[130%] text-[#D0D0D0] sm:text-base xl:text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* Right side - Sticky Image */}
                    <div className="max-w-[400px] lg:max-w-[550px] xl:max-w-[656px]">
                        <div className="sticky top-10">
                            <div className="relative overflow-hidden rounded-2xl">
                                {features.map((feature, index) => (
                                    <div
                                        key={feature.id}
                                        className={`transition-all duration-700 ${
                                            activeIndex === index ? 'opacity-100' : 'absolute inset-0 opacity-0'
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
                    className="mx-auto mt-6 w-fit sm:mt-14 lg:!py-[18px]"
                    btnText="Get Started"
                    btnUrl="/signup"
                    variant="primary"
                />
            </div>
        </section>
    )
}

export default AiHandle

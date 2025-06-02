'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { reviewSlider } from './helper'

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [mobileIndex, setMobileIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(true)
    const sliderRef = useRef<HTMLDivElement>(null)

    const extendedSlider = [...reviewSlider, ...reviewSlider, ...reviewSlider, ...reviewSlider, ...reviewSlider]
    const centerOffset = reviewSlider.length * 2

    useEffect(() => {
        const interval = setInterval(() => {
            setMobileIndex((prev) => (prev + 1) % reviewSlider.length)
            setCurrentIndex((prev) => prev + 1)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (currentIndex >= centerOffset + reviewSlider.length) {
            setTimeout(() => {
                setIsTransitioning(false)
                setCurrentIndex(centerOffset)
                setTimeout(() => {
                    setIsTransitioning(true)
                }, 50)
            }, 1000)
        }
        if (currentIndex < centerOffset - reviewSlider.length) {
            setTimeout(() => {
                setIsTransitioning(false)
                setCurrentIndex(centerOffset)

                setTimeout(() => {
                    setIsTransitioning(true)
                }, 50)
            }, 1000)
        }
    }, [currentIndex, centerOffset])

    return (
        <div className="overflow-hidden py-12 md:py-24">
            <div className="relative">
                {/* Mobile View  */}
                <div className="px-4 sm:hidden">
                    <div className="relative">
                        {reviewSlider.map((obj, i) => (
                            <article
                                className={`absolute w-full transition-all duration-1000 ${
                                    i === mobileIndex
                                        ? 'translate-x-0 opacity-100'
                                        : i === (mobileIndex - 1 + reviewSlider.length) % reviewSlider.length
                                          ? '-translate-x-full opacity-0'
                                          : 'translate-x-full opacity-0'
                                } flex flex-col justify-between rounded-[30px] border-y bg-[#FFFFFF0A] p-4 text-center h-full ${
                                    i === mobileIndex ? 'border-[#2A64F6]' : 'border-transparent'
                                }`}
                                key={i}
                            >
                                <div className="grow">
                                    <Image
                                        className="mx-auto size-16 rounded-full border border-[#D0D0D0]"
                                        src={obj.userImg}
                                        height={64}
                                        width={64}
                                        alt={obj.title}
                                        unoptimized
                                    />
                                    <p className="my-4 text-sm text-[#D0D0D0]">{obj.desc}</p>
                                </div>
                                <h6 className="text-lg font-medium text-white">{obj.title}</h6>
                                <p className="mt-2 text-sm text-[#D0D0D0]">{obj.position}</p>
                            </article>
                        ))}
                        {/* Placeholder for height */}
                        <div className="invisible">
                            <article className="flex flex-col justify-between rounded-[30px] bg-transparent p-6 text-center">
                                <div className="grow">
                                    <div className="mx-auto size-16" />
                                    <p className="my-4 text-sm">{reviewSlider[0].desc}</p>
                                </div>
                                <h6 className="text-lg font-medium">Placeholder</h6>
                                <p className="mt-2 text-sm">Placeholder</p>
                            </article>
                        </div>
                    </div>
                </div>

                {/* Desktop View */}
                <div className="mx-auto hidden max-w-[1920px] sm:block">
                    <div className="relative flex items-center justify-center">
                        <div
                            ref={sliderRef}
                            className={`flex gap-10 ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
                            style={{
                                transform: `translateX(calc(50% - ${(currentIndex + 0.5) * 520}px))`,
                            }}
                        >
                            {extendedSlider.map((obj, i) => {
                                const adjustedIndex = (currentIndex + centerOffset) % reviewSlider.length
                                const itemIndex = i % reviewSlider.length
                                const isActive = itemIndex === adjustedIndex

                                return (
                                    <article
                                        className={`flex min-w-[480px] flex-col justify-between rounded-[30px] border-y bg-[#FFFFFF0A] p-10 text-center transition-all duration-500 ${
                                            isActive ? 'border-[#2A64F6] opacity-100' : 'border-transparent'
                                        }`}
                                        key={i}
                                    >
                                        <div className="grow">
                                            <Image
                                                className="mx-auto size-20 rounded-full border border-[#D0D0D0]"
                                                src={obj.userImg}
                                                height={80}
                                                width={80}
                                                alt={obj.title}
                                                unoptimized
                                            />
                                            <p className="my-6 text-sm text-[#D0D0D0] xl:text-base">{obj.desc}</p>
                                        </div>
                                        <h6 className="text-xl font-medium text-white">{obj.title}</h6>
                                        <p className="mt-2 text-base text-[#D0D0D0] xl:text-lg">{obj.position}</p>
                                    </article>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews

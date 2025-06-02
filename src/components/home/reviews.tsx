'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { reviewSlider } from './helper'

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(true)
    const sliderRef = useRef<HTMLDivElement>(null)

    // Create extended array for infinite scroll
    const extendedSlider = [...reviewSlider, ...reviewSlider, ...reviewSlider, ...reviewSlider, ...reviewSlider]
    const centerOffset = reviewSlider.length * 2 // Start from middle set

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    // Handle infinite loop
    useEffect(() => {
        // When reaching the end of visible set, reset to middle without transition
        if (currentIndex >= centerOffset + reviewSlider.length) {
            setTimeout(() => {
                setIsTransitioning(false)
                setCurrentIndex(centerOffset)

                // Re-enable transition after reset
                setTimeout(() => {
                    setIsTransitioning(true)
                }, 50)
            }, 1000)
        }

        // Handle backward infinite loop if needed
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
        <div className="overflow-hidden py-24">
            <div className="relative mx-auto max-w-6xl">
                <div className="relative flex items-center justify-center px-20">
                    {/* Mask for edge fade effect */}
                    <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />
                    <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

                    <div className="overflow-hidden">
                        <div
                            ref={sliderRef}
                            className={`flex gap-10 ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
                            style={{
                                transform: `translateX(${-(currentIndex * 440) + 440}px)`,
                            }}
                        >
                            {extendedSlider.map((obj, i) => {
                                const adjustedIndex = (currentIndex + centerOffset) % reviewSlider.length
                                const itemIndex = i % reviewSlider.length
                                const isActive = itemIndex === adjustedIndex

                                return (
                                    <article
                                        className={`flex min-w-[400px] flex-col justify-between rounded-[30px] bg-[#FFFFFF0A] p-10 text-center transition-all duration-500 ${
                                            isActive
                                                ? 'border-y border-[#2A64F6] opacity-100'
                                                : 'border-y border-transparent opacity-60'
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

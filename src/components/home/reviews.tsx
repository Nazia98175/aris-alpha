'use client'

import Image from 'next/image'
import { reviewSlider } from './helper'
import { useEffect, useRef } from 'react'

const Reviews = () => {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        // Clone the items for seamless loop
        const scrollContent = scrollContainer.querySelector('.scroll-content') as HTMLDivElement
        if (!scrollContent) return

        const items = scrollContent.innerHTML
        scrollContent.innerHTML = items + items + items // Triple the content for smoother loop

        let scrollPos = 0
        let animationId: number

        const scroll = () => {
            scrollPos += 2.5 // Adjust speed here (higher = faster)

            // Reset position when scrolled halfway through the duplicated content
            if (scrollPos >= scrollContent.scrollWidth / 3) {
                scrollPos = 0
            }

            scrollContainer.scrollLeft = scrollPos
            animationId = requestAnimationFrame(scroll)
        }

        // Start scrolling
        animationId = requestAnimationFrame(scroll)

        // Pause on hover
        const handleMouseEnter = () => {
            cancelAnimationFrame(animationId)
        }

        const handleMouseLeave = () => {
            animationId = requestAnimationFrame(scroll)
        }

        scrollContainer.addEventListener('mouseenter', handleMouseEnter)
        scrollContainer.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            cancelAnimationFrame(animationId)
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <section className="bg-background py-12 md:py-24">
            <div ref={scrollRef} className="overflow-hidden" style={{ scrollBehavior: 'auto' }}>
                <div className="scroll-content flex gap-4 sm:gap-6 lg:gap-10">
                    {reviewSlider.map((obj, i) => {
                        return (
                            <article
                                className="flex min-w-[350px] cursor-pointer flex-col justify-between rounded-[30px] border-y border-transparent bg-[#FFFFFF0A] p-4 text-center transition-colors duration-300 hover:border-[#111d3c] sm:min-w-[480px] sm:p-6 lg:p-10"
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
                                <div>
                                    <h6 className="text-xl font-medium text-white">{obj.title}</h6>
                                    <p className="mt-2 text-base text-[#D0D0D0] xl:text-lg">{obj.position}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Reviews

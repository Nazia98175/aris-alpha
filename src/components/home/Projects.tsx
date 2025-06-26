'use client'
import React, { useEffect, useRef, useState } from 'react'

interface CounterProps {
    end: number
    duration?: number
    prefix?: string
    suffix?: string
    decimals?: number
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, prefix = '', suffix = '', decimals = 0 }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (!isVisible) return

        const startTime = Date.now()
        const endTime = startTime + duration

        const updateCounter = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / duration, 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentCount = easeOutQuart * end

            countRef.current = currentCount
            setCount(currentCount)

            if (now < endTime) {
                requestAnimationFrame(updateCounter)
            } else {
                setCount(end)
            }
        }

        requestAnimationFrame(updateCounter)
    }, [end, duration, isVisible])

    const formattedCount = count.toFixed(decimals)
    const displayValue = decimals > 0 ? formattedCount : Math.floor(count).toLocaleString()

    return (
        <span ref={elementRef}>
            {prefix}
            {displayValue}
            {suffix}
        </span>
    )
}

const Projects: React.FC = () => {
    return (
        <div className="custom-container py-4">
            <div className="flex flex-col items-center justify-between rounded-[30px] border-y-2 border-solid border-[#091641] bg-[#010314] shadow-[0px_16px_80px_0px_#664DFF1A] sm:flex-row">
                <div className="w-full px-6 py-6 text-center md:px-10 lg:px-16 lg:py-8">
                    <h2 className="text-3xl leading-[120%] sm:text-4xl md:text-5xl xl:text-[64px]">
                        <Counter end={20} suffix="M+" duration={2500} />
                    </h2>
                    <p className="mt-2 text-base leading-[130%] text-[#A1A1AA] xl:text-lg">Signals processed</p>
                </div>
                <div className="w-full border-y border-[#091641] px-6 py-6 text-center sm:border-x md:px-10 lg:px-16 lg:py-8">
                    <h2 className="text-3xl leading-[120%] sm:text-4xl md:text-5xl xl:text-[64px]">
                        <Counter end={4000} suffix="+" duration={2500} />
                    </h2>
                    <p className="mt-2 text-base leading-[130%] text-[#A1A1AA] xl:text-lg">Active users</p>
                </div>
                <div className="w-full px-6 py-6 text-center md:px-10 lg:px-16 lg:py-8">
                    <h2 className="text-3xl leading-[120%] sm:text-4xl md:text-5xl xl:text-[64px]">
                        <Counter prefix="+" end={12} suffix="%" duration={2500} />
                    </h2>
                    <p className="mt-2 text-base leading-[130%] text-[#A1A1AA] xl:text-lg">Avg return</p>
                </div>
            </div>
        </div>
    )
}

export default Projects

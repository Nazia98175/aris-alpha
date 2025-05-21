'use client'

import { AlertCircle, BarChart3, Calendar, LineChart } from 'lucide-react'

import { Button } from '../ui/button'
import Container from '../ui/container'
import Link from 'next/link'
import React from 'react'

const steps = [
    {
        number: '01',
        title: 'Live Buy/Sell Alerts',
        description: 'Real-time signals with clear timing.',
        active: true,
        icon: AlertCircle,
    },
    {
        number: '02',
        title: 'Portfolio Allocation Guidance',
        description: 'Know exactly how much to invest.',
        active: false,
        icon: BarChart3,
    },
    {
        number: '03',
        title: 'Sentiment Reports',
        description: 'Understand market mood before it shifts.',
        active: false,
        icon: LineChart,
    },
    {
        number: '04',
        title: 'Weekly & Monthly Outlooks',
        description: 'Plan your next move with foresight.',
        active: false,
        icon: Calendar,
    },
]

const StayHead = () => {
    return (
        <div className="relative">
            <Container className="relative flex flex-col gap-10 sm:gap-28">
                <div className="flex flex-col items-center gap-7 sm:gap-10" id="why-us">
                    <div className="w-fit rounded-full border border-[#656FC9] px-4 py-2 text-base font-medium">
                        Why Us
                    </div>
                    <h2 className="mx-auto max-w-2xl text-center text-3xl leading-10 font-medium sm:text-7xl sm:leading-24">
                        Trade With Data, Not Doubt
                    </h2>
                    <div
                        className="w-full max-w-xl"
                        style={{
                            border: '1px solid',

                            borderImageSource:
                                'linear-gradient(270deg, rgba(226, 226, 226, 0) 0%, #FFFFFF 47.12%, rgba(124, 124, 124, 0) 100%)',
                            borderImageSlice: 1,
                        }}
                    ></div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="group relative min-h-[260px] rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-8 transition-all duration-300 hover:translate-y-[-4px] hover:border-[#001aff]/30 hover:bg-[rgba(255,255,255,0.05)] hover:shadow-[0_10px_30px_-15px_rgba(0,26,255,0.15)]"
                            style={{
                                clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%, 0 0)',
                            }}
                        >
                            <div className="mb-6 transition-all duration-300 group-hover:translate-y-[-2px] group-hover:transform">
                                <div className="inline-flex rounded-lg bg-[rgba(255,255,255,0.05)] p-3 transition-colors duration-300 group-hover:bg-[#001aff]/10">
                                    <step.icon className="h-6 w-6 text-[#9fb0d8] transition-colors duration-300 group-hover:text-[#001aff]" />
                                </div>
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-white/90 transition-colors duration-300 group-hover:text-white">
                                {step.title}
                            </h3>

                            <p className="text-[#9fb0d8]/80 transition-colors duration-300 group-hover:text-[#9fb0d8]">
                                {step.description}
                            </p>

                            <div className="absolute top-0 right-0 h-0 w-0 border-t-[30px] border-r-[30px] border-t-transparent border-r-[rgba(255,255,255,0.08)] transition-colors duration-300 group-hover:border-r-[#001aff]/20"></div>
                        </div>
                    ))}
                </div>
                <Link href="/signup" className="mx-auto">
                    <Button size="xl">Access Your First Signals - Free</Button>
                </Link>
            </Container>
        </div>
    )
}

export default StayHead

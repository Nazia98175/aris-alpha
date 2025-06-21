'use client'

import React from 'react'
import { CheckIcon, NextVector } from '../home/Icons'

const traditionalPoints = ['Too many alerts', 'Reacts to headlines', 'Unclear sizing', 'Late entries']

const arisPoints = [
    'Only high-conviction signals',
    'Anticipates structural shifts',
    'Portfolio-aware allocations',
    'Early signals',
]

const WhyItOutperforms = () => {
    return (
        <section className="mx-auto flex w-full max-w-[908px] flex-col items-center px-6 py-10 text-white md:py-20 xl:px-0">
            <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl">Why It Outperforms</h2>

            <div className="flex w-full max-w-[908px] flex-col items-center justify-center gap-6 md:justify-between lg:flex-row">
                {/* Traditional Tools */}
                <div className="relative h-auto w-full max-w-full rounded-[15px] border border-white/[20%] bg-[#310F0E]/[30%] p-6 md:rounded-[30px] lg:h-[398px] lg:max-w-[432px]">
                    <div className="relative mb-7 md:mb-14">
                        <h3 className="border-b border-[#D0D0D0] pb-4 text-[26px] font-normal md:text-[32px] lg:text-[40px]">
                            Traditional Tools
                        </h3>
                        <div className="absolute top-[54px] z-10 h-[2px] w-24 bg-[#A03E3A] md:top-[63px] lg:top-[75px]" />
                    </div>
                    <ul className="ml-3 space-y-6 text-xl leading-[130%] font-normal text-white/80 xl:text-2xl">
                        {traditionalPoints.map((point, index) => (
                            <li key={index} className="ml-5 list-disc">
                                {point}
                            </li>
                        ))}
                    </ul>

                    <span className="absolute top-1/2 right-[-45px] hidden -translate-y-1/2 rotate-0 text-base text-[#D0D0D0] lg:block">
                        <span className="absolute -top-4 right-[55px] text-[#D0D0D0]">Noise</span>
                        <NextVector />
                    </span>
                </div>

                {/* Aris Alpha */}
                <div className="h-auto w-full max-w-full rounded-[15px] border border-[#002787]/[20%] bg-[#2A64F6]/[20%] p-6 md:rounded-[30px] lg:h-[398px] lg:max-w-[432px]">
                    <div className="relative mb-7 md:mb-14">
                        <h3 className="border-b border-[#D0D0D0] pb-4 text-[26px] font-normal md:text-[32px] lg:text-[40px]">
                            Aris Alpha
                        </h3>
                        <div className="absolute top-[54px] z-10 h-[2px] w-24 bg-[#2A64F6] md:top-[63px] lg:top-[75px]" />
                    </div>
                    {/* <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/noise.png')] opacity-10 mix-blend-screen" /> */}
                    <ul className="ml-3 space-y-6 text-xl leading-[130%] font-normal text-white/80 xl:text-2xl">
                        {arisPoints.map((point, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <CheckIcon />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WhyItOutperforms

'use client'
import React from 'react'
import { TargetIcon, ZapIcon, PieChartIcon } from '../home/Icons'

const whatYouGet = [
    {
        icon: <TargetIcon />,
        title: 'Signals with clear\nentry logic',
        special: false,
    },
    {
        icon: <PieChartIcon />,
        title: 'Suggested allocation ranges',
        special: true, // Middle glowing container
    },
    {
        icon: <ZapIcon />,
        title: 'Fast alerts when momentum starts building',
        special: false,
    },
]

const WhatYouGet = () => {
    return (
        <section className="mx-auto flex w-full max-w-[1140px] flex-col items-center justify-center px-6 py-10 md:py-20 xl:px-0">
            <h2 className="main-heading mb-10 text-center !font-normal">What You Get</h2>

            <div className="grid max-w-full grid-cols-1 gap-6 lg:grid-cols-3">
                {whatYouGet.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex h-auto w-full max-w-full flex-col items-center justify-center gap-5 rounded-[15px] px-2 py-6 text-center text-white transition-shadow duration-300 md:h-[266px] md:rounded-[30px] md:px-4 md:py-8 lg:max-w-[364px] ${
                            item.special
                                ? 'relative overflow-hidden border-y-2 border-transparent bg-white/[6%] backdrop-blur-[32px]'
                                : 'bg-white/[6%]'
                        }`}
                    >
                        <div>{item.icon}</div>
                        <p className="medium-text !font-normal">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhatYouGet

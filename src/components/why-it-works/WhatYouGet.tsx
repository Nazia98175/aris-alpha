'use client'

import React from 'react'
import { TargetIcon, ZapIcon, PieChartIcon } from '../home/Icons'

const whatYouGet = [
    {
        icon: <TargetIcon />,
        title: 'Signals with clear entry logic',
        special: false,
    },
    {
        icon: <PieChartIcon />,
        title: 'Suggested allocation ranges',
        special: true,
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
                {whatYouGet.map((item, idx) => {
                    const isSpecial = item.special

                    return (
                        <div
                            key={idx}
                            className={`relative flex h-[182px] w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-[15px] px-4 py-8 text-center text-white backdrop-blur-[20px] md:min-h-[266px] md:rounded-[30px] ${
                                isSpecial ? 'bg-white/[4%]' : 'bg-white/[6%]'
                            }`}
                        >
                            {/* Gradient Top & Bottom Borders */}
                            {isSpecial && (
                                <>
                                    <span className="absolute top-0 left-0 h-[2px] w-full rounded-t-[15px] bg-gradient-to-r from-[#2A64F633] via-[#2A64F633] to-[#2A64F633] md:rounded-t-[30px]" />
                                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-b-[15px] bg-gradient-to-r from-[#2A64F633] via-[#2A64F633] to-[#2A64F633] md:rounded-b-[30px]" />
                                </>
                            )}

                            <div>{item.icon}</div>
                            <p className="medium-text !font-poppins !font-normal">{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default WhatYouGet

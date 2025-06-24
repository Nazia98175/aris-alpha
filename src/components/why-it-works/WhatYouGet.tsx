'use client'

import React from 'react'
import { TargetIcon, ZapIcon, PieChartIcon } from '../home/Icons'

const whatYouGet = [
    {
        icon: <TargetIcon />,
        title: 'Signals with clear entry logic',
    },
    {
        icon: <PieChartIcon />,
        title: 'Suggested allocation ranges',
    },
    {
        icon: <ZapIcon />,
        title: 'Fast alerts when momentum starts building',
    },
]

const WhatYouGet = () => {
    return (
        <section className="mx-auto flex w-full max-w-[1140px] flex-col items-center justify-center px-4 py-10 md:py-20 xl:px-0">
            <h2 className="secondary-heading mb-10 text-center !font-normal">What You Get</h2>

            <div className="grid max-w-full grid-cols-1 gap-6 lg:grid-cols-3">
                {whatYouGet.map((item, idx) => (
                    <div
                        key={idx}
                        className="group relative flex h-[182px] w-full cursor-pointer flex-col items-center justify-center gap-5 overflow-hidden rounded-[15px] bg-white/5 px-4 py-8 text-center text-white backdrop-blur-[20px] md:min-h-[266px] md:rounded-[30px]"
                    >
                        {/* Hover Borders with Transition */}
                        <span className="absolute top-0 left-0 h-[2px] w-full scale-x-0 bg-gradient-to-r from-[#2A64F633] via-[#2A64F633] to-[#2A64F633] transition-all duration-300 group-hover:scale-x-100 md:rounded-t-[30px]" />
                        <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-gradient-to-r from-[#2A64F633] via-[#2A64F633] to-[#2A64F633] transition-all duration-300 group-hover:scale-x-100 md:rounded-b-[30px]" />

                        <div>{item.icon}</div>
                        <p className="strokeLinejoin !font-poppins !leading-[150%] !font-normal">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhatYouGet

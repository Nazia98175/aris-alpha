'use client'

import React from 'react'

const WhyItWorks = () => {
    return (
        <section className="relative flex h-auto flex-col items-center justify-center bg-[url('/assets/backgrounds/working-bg.webp')] bg-cover bg-center px-4 py-10 text-white md:h-[493px] md:py-20 xl:px-0">
            <h2 className="main-heading">Why It Works</h2>
            <p className="mt-4 text-center text-sm leading-[150%] font-medium text-white md:text-base">
                Most signals are noise. Ours aren’t.
            </p>
            <div className="font-outfit mt-6 w-full max-w-[702px] rounded-lg border border-white/[0.2] bg-white/5 px-6 py-6 text-center shadow-md backdrop-blur-[32px] md:px-4 md:py-3">
                <p className="mb-2 text-base leading-[200%] font-normal text-white md:text-lg">
                    We built Aris Alpha for one purpose:
                </p>
                <p className="mb-2 text-lg leading-[140%] font-semibold text-white md:text-xl md:leading-[200%]">
                    Detect when markets are about to shift — before it becomes obvious.
                </p>
            </div>
        </section>
    )
}

export default WhyItWorks

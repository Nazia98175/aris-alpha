'use client'

import Image from 'next/image'
import React from 'react'

const SignalClarity = () => {
    return (
        <section className="mx-auto flex w-full max-w-[1140px] flex-col items-center justify-between gap-5 px-6 py-10 text-white md:gap-10 md:py-20 lg:flex-row xl:px-0">
            {/* Left Content */}
            <div className="w-full max-w-full lg:max-w-[454px]">
                <h2 className="secondary-heading">
                    Signal Clarity Over <br className="hidden md:block" /> Chaos
                </h2>

                <p className="description mt-4 !text-[#D0D0D0]/[80%]">
                    Most platforms flood you with alerts. We don’t.
                </p>
                <p className="description mt-8 !text-[#D0D0D0]/[80%]">
                    Aris Alpha filters thousands of data points and surfaces only high-conviction setups — the kind
                    elite investors act on.
                </p>

                <div className="mt-3 w-full max-w-[454px] cursor-pointer rounded-full bg-white/[8%] px-5 py-3 text-left text-sm text-white backdrop-blur-[32px] md:mt-6 md:text-base">
                    Fewer signals. But the right ones.
                </div>
            </div>

            {/* Right Side Image */}
            <div className="h-auto w-full max-w-full md:max-w-[639px] xl:h-[407px]">
                <Image
                    src="/assets/homepage/webp/platforms.webp"
                    alt="Typical Platforms vs Aris Alpha"
                    width={639}
                    height={407}
                    className="h-auto w-full rounded-[15px] border border-[#808080] md:rounded-[30px]"
                />
            </div>
        </section>
    )
}

export default SignalClarity

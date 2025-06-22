'use client'

import React from 'react'
import Image from 'next/image'
import { CheckIcon } from '../home/Icons'

const BuiltAroundReality = () => {
    return (
        <section className="mx-auto flex w-full max-w-[1140px] flex-col items-center justify-center gap-5 px-6 py-10 text-white md:gap-10 md:py-20 lg:flex-row xl:px-0">
            {/* Left: Image */}
            <div className="h-auto w-full max-w-full lg:max-w-[656px] xl:h-[529px]">
                <Image
                    src="/assets/homepage/webp/chart-graph.webp"
                    alt="Market Chart"
                    className="h-auto w-full rounded-[24px]"
                    width={656}
                    height={407}
                />
            </div>

            {/* Right: Content */}
            <div className="w-full max-w-full lg:max-w-[433px]">
                <h2 className="secondary-heading">Built Around Market Reality</h2>
                <p className="description mb-3 !text-[#D0D0D0]/[80%] md:mb-6">
                    The best traders don’t guess. They move early — when conviction starts to build.
                </p>

                {/* System note button-style */}
                <div className="mb-3 w-full max-w-[433px] cursor-pointer rounded-full bg-white/[8%] px-5 py-3 text-left text-sm text-white backdrop-blur-[32px] md:mb-6 md:text-base">
                    Our system is built to do the same:
                </div>

                {/* Features List */}
                <ul className="space-y-3 text-base text-[#D0D0D0]/[80%] md:text-lg">
                    <li className="flex items-center gap-2">
                        <span>
                            <CheckIcon />
                        </span>
                        Wait for confirmation
                    </li>
                    <li className="flex items-center gap-2">
                        <span>
                            <CheckIcon />
                        </span>
                        Ignore the noise
                    </li>
                    <li className="flex items-center gap-2">
                        <span>
                            <CheckIcon />
                        </span>
                        Trigger only when risk and reward align
                    </li>
                </ul>

                <p className="mt-3 text-sm font-medium text-white md:mt-6 md:text-base">
                    It mirrors how top desks position. Now, so can you.
                </p>
            </div>
        </section>
    )
}

export default BuiltAroundReality

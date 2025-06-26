'use client'

import React from 'react'
import Image from 'next/image'
import { CheckIcon } from '../home/Icons'
import { BuiltAroundSvg, SignalTrigger } from '../onboard/Icons'

const BuiltAroundReality = () => {
    return (
        <div className="relative mx-auto w-full max-w-[1920px]">
            <div className="relative top-6 lg:absolute xl:top-1">
                <BuiltAroundSvg />
            </div>
            <section className="relative mx-auto flex w-full max-w-[1140px] flex-col items-center justify-end gap-10 px-4 py-16 text-white lg:flex-row lg:gap-[64px] xl:px-0">
                {/* Left: SVG with curved lines and labels */}

                {/* Right: Content */}
                <div className="w-full max-w-full lg:max-w-[433px]">
                    <h2 className="secondary-heading">Built Around Market Reality</h2>
                    <p className="description mb-3 !leading-[160%] !text-[#D0D0D0]/[80%] md:mb-6">
                        The best traders don’t guess. They move early — when conviction starts to build.
                    </p>

                    {/* System note */}
                    <div className="mb-3 w-full max-w-[433px] rounded-[16px] bg-white/[8%] px-5 py-3 text-left text-sm text-white backdrop-blur-[32px] md:mb-6 md:text-base">
                        Our system is built to do the same:
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 text-base !leading-[160%] text-[#D0D0D0]/[80%] md:text-lg">
                        <li className="flex items-center gap-2">
                            <CheckIcon />
                            Wait for confirmation
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckIcon />
                            Ignore the noise
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckIcon />
                            Trigger only when risk and reward align
                        </li>
                    </ul>

                    <p className="mt-3 text-sm leading-[150%] font-medium text-white md:mt-6 md:text-base">
                        It mirrors how top desks position. Now, so can you.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default BuiltAroundReality

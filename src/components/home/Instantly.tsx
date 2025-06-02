import React from 'react'
import { BlackChekcIcon } from './Icons'
import Image from 'next/image'

const Instantly = () => {
    return (
        <section className="custom-container relative w-full">
            <div className="relative overflow-hidden rounded-2xl border border-[#808080] bg-[#FCF6F1] p-4 shadow-[0px_16px_80px_0px_rgba(102,77,255,0.10)] sm:p-[40px] md:rounded-[30px] md:p-[50px] lg:p-[64px]">
                <div className="flex flex-col-reverse items-center justify-between gap-7 lg:flex-row">
                    <div className="w-full max-w-[614px]">
                        <h3 className="secondary-heading text-[#010101]">Turn Signals Into Action — Instantly</h3>
                        <p className="small-text pt-3 !text-[#3f3f3f] sm:pt-4">
                            You don’t need more data. You need direction.
                        </p>
                        <h4 className="medium-text pt-3 !text-[#3f3f3f] sm:pt-5 md:pt-[36px]">
                            We cut the noise so you can move with confidence.
                        </h4>
                        <div className="mt-5 mb-7 grid grid-cols-1 gap-3 border-b border-[#182542] pb-5 sm:mt-[30px] sm:mb-10 sm:gap-4 md:mt-[40px] md:grid-cols-2">
                            <div className="flex items-center gap-2">
                                <BlackChekcIcon />
                                <p className="text-lg font-medium text-[#3f3f3f] md:text-xl">Focused execution</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <BlackChekcIcon />
                                <p className="text-lg font-medium text-[#3f3f3f] md:text-xl">No guesswork</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <BlackChekcIcon />
                                <p className="text-lg font-medium text-[#3f3f3f] md:text-xl">Built for clarity</p>
                            </div>
                        </div>
                        <button className="bg-primary flex h-[45px] w-full max-w-[170px] cursor-pointer items-center justify-center rounded-[40px] text-base text-white shadow-[0px_0px_10px_0px_rgba(119,68,255,0.70)] transition-all duration-300 hover:scale-95 md:h-[63px]">
                            Get started
                        </button>
                    </div>
                    <div className="static top-[50%] w-full max-w-[600px] transform lg:absolute lg:right-[-23%] lg:-translate-y-1/2">
                        <Image
                            width={500}
                            height={500}
                            className="h-full w-full"
                            src="/assets/homepage/webp/my-trades.webp"
                            alt="my trades"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Instantly

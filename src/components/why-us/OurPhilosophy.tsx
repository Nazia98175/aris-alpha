'use client'

import Image from 'next/image'

export const OurPhilosophy = () => {
    return (
        <section className="w-full px-4 pt-10 text-white lg:pt-20 xl:px-0">
            <div className="mx-auto w-full max-w-[1140px]">
                <div className="bg-howlblack relative h-auto rounded-[15px] border px-0 pt-4 backdrop-blur-[33.3px] md:rounded-[32px] md:pt-6 xl:h-[586px]">
                    <div className="relative z-10 px-2 md:px-4 xl:px-0">
                        <h2 className="secondary-heading text-center">Our Philosophy</h2>

                        <p className="description !text-waterwhite/[80%] mx-auto mt-2 max-w-[830px] !text-center !leading-[160%] md:mt-4">
                            Real alpha doesn’t come from bold predictions — it comes from clarity, constant improvement,
                            and strategies that work even in tough markets. We don’t follow hype or trends. We build
                            systems that adapt, improve, and deliver results over time.
                        </p>
                    </div>
                    <Image
                        src="/assets/homepage/webp/philosophy-chart-second.webp"
                        alt="Alpha strategy performance graph"
                        width={1139}
                        height={487}
                        className="relative top-0 z-0 h-auto w-full rounded-[15px] md:rounded-[32px] xl:-top-24"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

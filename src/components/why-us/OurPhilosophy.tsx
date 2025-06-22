'use client'

import Image from 'next/image'

export const OurPhilosophy = () => {
    return (
        <section className="w-full px-6 py-10 text-white md:py-20 xl:px-0">
            <div className="mx-auto w-full max-w-[1140px]">
                <div className="relative h-auto rounded-[32px] border bg-[#1F1D2D] px-0 pt-6 backdrop-blur-[33.3px] md:pt-10 xl:h-[586px] xl:px-0">
                    <div className="relative z-10">
                        <h2 className="secondary-heading text-center">Our Philosophy</h2>

                        <p className="description mx-auto mt-4 max-w-[830px] !text-center !text-[#D0D0D0]/[80%]">
                            Real alpha doesn’t come from bold predictions — it comes from clarity, constant improvement,
                            and strategies that work even in tough markets. We don’t follow hype or trends. We build
                            systems that adapt, improve, and deliver results over time.
                        </p>
                    </div>
                    <Image
                        src="/assets/homepage/webp/philosophy-chart.webp"
                        alt="Alpha strategy performance graph"
                        width={1139}
                        height={487}
                        className="relative top-0 z-0 h-auto w-full rounded-[32px] object-contain xl:-top-21"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

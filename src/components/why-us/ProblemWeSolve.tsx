'use client'

import React from 'react'
import Image from 'next/image'

const ProblemWeSolve = () => {
    return (
        <section className="w-full px-6 py-12 text-white md:py-20">
            <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between md:flex-row">
                {/* Text Column */}
                <div className="flex-1">
                    <h2 className="mb-6 text-2xl font-semibold md:text-3xl">The Problem We Solve</h2>
                    <p className="mb-6 text-sm leading-relaxed text-[#D0D0D0]/[80%] md:text-base">
                        Today’s investors face a brutal paradox: too much data, too little clarity. Markets are flooded
                        with headlines, sentiment shifts, volatility, and noise. Yet genuine, repeatable alpha is
                        increasingly scarce. Most strategies chase price, rely on backward-looking patterns, or collapse
                        under stress when regimes shift.
                    </p>
                    <p className="text-sm leading-relaxed text-white/80 md:text-base">
                        The real challenge isn’t access to information — it’s extracting insight with precision and
                        acting with discipline.
                    </p>
                </div>

                {/* Image Column */}
                <div className="flex flex-1 items-center justify-center">
                    <Image
                        src="/assets/homepage/webp/compound-circle.webp"
                        alt="22%+ Target Annual Compound"
                        width={401.84}
                        height={400}
                    />
                </div>
            </div>
        </section>
    )
}

export default ProblemWeSolve

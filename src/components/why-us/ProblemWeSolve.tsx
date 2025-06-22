'use client'

import { CompoundCircle } from '../onboard/Icons'

const ProblemWeSolve = () => {
    return (
        <section className="w-full px-6 py-10 text-white md:py-20 xl:px-0">
            <div className="mx-auto flex h-[450px] w-full max-w-[1140px] flex-col items-center justify-between lg:flex-row">
                {/* Text Column */}
                <div className="font-poppins w-full max-w-full lg:max-w-[542px]">
                    <h2 className="secondary-heading mb-6">The Problem We Solve</h2>
                    <p className="description mb-6 !text-[#D0D0D0]/[80%]">
                        Today’s investors face a brutal paradox: too much data, too little clarity. Markets are flooded
                        with headlines, sentiment shifts, volatility, and noise. Yet genuine, repeatable alpha is
                        increasingly scarce. Most strategies chase price, rely on backward-looking patterns, or collapse
                        under stress when regimes shift
                    </p>
                    <p className="description !text-[#D0D0D0]/[80%]">
                        The real challenge isn’t access to information — it’s extracting insight with precision and
                        acting with discipline.
                    </p>
                </div>

                {/* Image Column */}
                <CompoundCircle />
                {/* <Image
                    src="/assets/homepage/webp/compound-circle.webp"
                    alt="22%+ Target Annual Compound"
                    width={401.84}
                    height={400}
                /> */}
            </div>
        </section>
    )
}

export default ProblemWeSolve

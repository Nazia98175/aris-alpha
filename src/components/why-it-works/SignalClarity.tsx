import React from 'react'
import { Platform } from '../onboard/Icons'

const SignalClarity = () => {
    return (
        <section className="signal-clarity-container-style">
            {/* Left Content */}
            <div className="w-full max-w-full lg:max-w-[454px]">
                <h2 className="secondary-heading">
                    Signal Clarity Over <br className="hidden md:block" /> Chaos
                </h2>

                <p className="description !text-waterwhite/[80%] mt-4 !leading-[160%]">
                    Most platforms flood you with alerts. We don’t.
                </p>
                <p className="description !text-waterwhite/[80%] mt-8 !leading-[160%]">
                    Aris Alpha filters thousands of data points and surfaces only high-conviction setups — the kind
                    elite investors act on.
                </p>

                <div className="signal-clarity-button-style">Fewer signals. But the right ones.</div>
            </div>

            {/* Right Side Image */}
            <div className="h-auto w-full max-w-full xl:h-[407px] xl:max-w-[639px]">
                <Platform />
            </div>
        </section>
    )
}

export default SignalClarity

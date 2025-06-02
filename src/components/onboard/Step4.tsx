import React from 'react'
import CheckboxInput from './CheckboxInput'
import { ExitTime, ExploringIcon, PoorPerformanceIcon, TooMuchNoise } from './Icons'

const Step4 = () => {
    return (
        <>
            <div className="mx-auto mt-5 w-full max-w-[422px]">
                <h3 className="text-center text-3xl leading-[120%] md:text-[40px]">Cut the Noise</h3>
            </div>
            <p className="mt-4 text-center leading-[120%] text-white/70 md:mt-8 md:text-lg">
                What slows you down in today’s market?
            </p>
            <div className="my-4 w-full space-y-2.5 md:my-8 md:space-y-3.5">
                <CheckboxInput
                    id="too-much-noise"
                    title="Too much noise"
                    icon={<TooMuchNoise />}
                    value="too_much_noise"
                />
                <CheckboxInput
                    id="bad-timing"
                    title="Bad entry/exit timing"
                    icon={<ExitTime />}
                    value="bad_entry_exit_timing"
                />
                <CheckboxInput
                    id="poor-performance"
                    title="Poor performance"
                    icon={<PoorPerformanceIcon />}
                    value="poor_performance"
                />
                <CheckboxInput
                    id="no-plan"
                    title="No clear plan to follow"
                    icon={<ExploringIcon />}
                    value="no_clear_plan"
                />
            </div>
            <p className="text-center leading-[120%] text-white/70 md:text-lg">
                We&apos;ll filter out distractions and surface clarity.
            </p>
        </>
    )
}

export default Step4

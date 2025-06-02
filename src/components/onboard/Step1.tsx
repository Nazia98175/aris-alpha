import React from 'react'
import CheckboxInput from './CheckboxInput'
import { Advisor, CalculatorIcon, ExploringIcon, LongTermIcon } from './Icons'

const Step1 = () => {
    return (
        <>
            <div className="mx-auto mt-5 w-full max-w-[422px]">
                <h3 className="text-center text-3xl leading-[120%] md:text-[40px]">
                    Let’s Tune Your <br /> Strategy Feed
                </h3>
            </div>
            <p className="mt-4 text-center leading-[120%] text-white/70 md:mt-8 md:text-lg">
                How do you typically manage your portfolio?
            </p>
            <div className="my-4 w-full space-y-2.5 md:my-8 md:space-y-3.5">
                <CheckboxInput
                    id="monthly-rotation"
                    title="Monthly Rotation"
                    desc="I adjust allocations a few times a month"
                    icon={<CalculatorIcon />}
                    value="monthly_rotation"
                />
                <CheckboxInput
                    id="tactical-positioning"
                    title="Tactical Positioning"
                    desc="I shift exposure weekly"
                    icon={<ExploringIcon />}
                    value="tactical_positioning"
                />
                <CheckboxInput
                    id="advisor"
                    title="Advisor"
                    desc="I manage capital for others"
                    icon={<Advisor />}
                    value="advisor"
                />
                <CheckboxInput
                    id="long-term"
                    title="Long-Term Holder"
                    desc="I prefer fewer changes but want insight"
                    icon={<LongTermIcon />}
                    value="long_term"
                />
                <CheckboxInput
                    id="still-exploring"
                    title="Still Exploring"
                    desc="I’m figuring it out"
                    icon={<ExploringIcon />}
                    value="still_exploring"
                />
            </div>
            <p className="text-center leading-[120%] text-white/70 md:text-lg">
                We’ll pace your signals to match your rhythm.
            </p>
        </>
    )
}

export default Step1

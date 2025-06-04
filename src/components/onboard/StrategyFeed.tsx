import React from 'react'
import CheckboxInput from './CheckboxInput'
import { Advisor, CalculatorIcon, ExploringIcon, LongTermIcon } from './Icons'
import StepLayout from './StepLayout'

const StrategyFeed = () => {
    return (
        <StepLayout
            title={
                <>
                    Let’s Tune Your <br /> Strategy Feed
                </>
            }
            description="How do you typically manage your portfolio?"
            bottomNote="We’ll pace your signals to match your rhythm."
        >
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
        </StepLayout>
    )
}

export default StrategyFeed

'use client'
import React from 'react'
import CheckboxInput from './CheckboxInput'
import { Advisor, CalculatorIcon, ExploringIcon, LongTermIcon } from './Icons'
import StepLayout from './StepLayout'
import { StepComponentProps } from './Onboarding'

type StrategyFeedProps = StepComponentProps
const StrategyFeed: React.FC<StrategyFeedProps> = ({ formData, updateFormData }) => {
    const selectedValues = formData.strategyFeed || []

    const handleCheckboxChange = (value: string) => {
        if (selectedValues.includes(value)) {
            updateFormData(
                'strategyFeed',
                selectedValues.filter((v) => v !== value),
            )
        } else {
            updateFormData('strategyFeed', [...selectedValues, value])
        }
    }

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
                checked={selectedValues.includes('monthly_rotation')}
                onChange={() => handleCheckboxChange('monthly_rotation')}
            />
            <CheckboxInput
                id="tactical-positioning"
                title="Tactical Positioning"
                desc="I shift exposure weekly"
                icon={<ExploringIcon />}
                value="tactical_positioning"
                checked={selectedValues.includes('tactical_positioning')}
                onChange={() => handleCheckboxChange('tactical_positioning')}
            />
            <CheckboxInput
                id="advisor"
                title="Advisor"
                desc="I manage capital for others"
                icon={<Advisor />}
                value="advisor"
                checked={selectedValues.includes('advisor')}
                onChange={() => handleCheckboxChange('advisor')}
            />
            <CheckboxInput
                id="long-term"
                title="Long-Term Holder"
                desc="I prefer fewer changes but want insight"
                icon={<LongTermIcon />}
                value="long_term"
                checked={selectedValues.includes('long_term')}
                onChange={() => handleCheckboxChange('long_term')}
            />
            <CheckboxInput
                id="still-exploring"
                title="Still Exploring"
                desc="I’m figuring it out"
                icon={<ExploringIcon />}
                value="still_exploring"
                checked={selectedValues.includes('still_exploring')}
                onChange={() => handleCheckboxChange('still_exploring')}
            />
        </StepLayout>
    )
}

export default StrategyFeed

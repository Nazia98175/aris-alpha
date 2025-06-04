import React from 'react'
import CheckboxInput from './CheckboxInput'
import StepLayout from './StepLayout'
import { ConsistencyIcon, ImprovePerformanceIcon, SaveTimeIcon, TradeDecision } from './Icons'
import { StepComponentProps } from './Helper'

const MainObjective: React.FC<StepComponentProps> = ({ formData, updateFormData }) => {
    const selectedValues = formData.mainObjective || []

    const handleCheckboxChange = (value: string) => {
        if (selectedValues.includes(value)) {
            updateFormData(
                'mainObjective',
                selectedValues.filter((v) => v !== value),
            )
        } else {
            updateFormData('mainObjective', [...selectedValues, value])
        }
    }

    return (
        <StepLayout
            title="What's Your Main Objective?"
            description="What outcome matters most to you?"
            bottomNote="We'll filter out distractions and surface clarity."
        >
            <CheckboxInput
                id="improve-performance"
                title="Improve performance"
                icon={<ImprovePerformanceIcon />}
                value="improve_performance"
                checked={selectedValues.includes('improve_performance')}
                onChange={() => handleCheckboxChange('improve_performance')}
            />
            <CheckboxInput
                id="clear-decisions"
                title="Clearer trade decisions"
                icon={<TradeDecision />}
                value="clearer_trade_decisions"
                checked={selectedValues.includes('clearer_trade_decisions')}
                onChange={() => handleCheckboxChange('clearer_trade_decisions')}
            />
            <CheckboxInput
                id="save-time"
                title="Save time on research"
                icon={<SaveTimeIcon />}
                value="save_time_on_research"
                checked={selectedValues.includes('save_time_on_research')}
                onChange={() => handleCheckboxChange('save_time_on_research')}
            />
            <CheckboxInput
                id="long-term-consistency"
                title="Build long-term consistency"
                icon={<ConsistencyIcon />}
                value="long_term_consistency"
                checked={selectedValues.includes('long_term_consistency')}
                onChange={() => handleCheckboxChange('long_term_consistency')}
            />
        </StepLayout>
    )
}

export default MainObjective

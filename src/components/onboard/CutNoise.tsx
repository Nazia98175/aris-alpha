import React from 'react'
import CheckboxInput from './CheckboxInput'
import StepLayout from './StepLayout'
import { ExitTime, ExploringIcon, PoorPerformanceIcon, TooMuchNoise } from './Icons'
import { StepComponentProps } from './Helper'

const CutNoise: React.FC<StepComponentProps> = ({ formData, updateFormData }) => {
    const selectedValues = formData.cutNoise || []

    const handleCheckboxChange = (value: string) => {
        if (selectedValues.includes(value)) {
            updateFormData(
                'cutNoise',
                selectedValues.filter((v) => v !== value),
            )
        } else {
            updateFormData('cutNoise', [...selectedValues, value])
        }
    }

    return (
        <StepLayout
            title="Cut the Noise"
            description="What slows you down in today’s market?"
            bottomNote="We'll filter out distractions and surface clarity."
        >
            <CheckboxInput
                id="too-much-noise"
                title="Too much noise"
                icon={<TooMuchNoise />}
                value="too_much_noise"
                checked={selectedValues.includes('too_much_noise')}
                onChange={() => handleCheckboxChange('too_much_noise')}
            />
            <CheckboxInput
                id="bad-timing"
                title="Bad entry/exit timing"
                icon={<ExitTime />}
                value="bad_entry_exit_timing"
                checked={selectedValues.includes('bad_entry_exit_timing')}
                onChange={() => handleCheckboxChange('bad_entry_exit_timing')}
            />
            <CheckboxInput
                id="poor-performance"
                title="Poor performance"
                icon={<PoorPerformanceIcon />}
                value="poor_performance"
                checked={selectedValues.includes('poor_performance')}
                onChange={() => handleCheckboxChange('poor_performance')}
            />
            <CheckboxInput
                id="no-plan"
                title="No clear plan to follow"
                icon={<ExploringIcon />}
                value="no_clear_plan"
                checked={selectedValues.includes('no_clear_plan')}
                onChange={() => handleCheckboxChange('no_clear_plan')}
            />
        </StepLayout>
    )
}

export default CutNoise

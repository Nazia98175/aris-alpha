import React from 'react'
import CheckboxInput from './CheckboxInput'
import StepLayout from './StepLayout'
import { ExitTime, ExploringIcon, PoorPerformanceIcon, TooMuchNoise } from './Icons'

const CutNoise = () => {
    return (
        <StepLayout
            title="Cut the Noise"
            description="What slows you down in today’s market?"
            bottomNote="We'll filter out distractions and surface clarity."
        >
            <CheckboxInput id="too-much-noise" title="Too much noise" icon={<TooMuchNoise />} value="too_much_noise" />
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
        </StepLayout>
    )
}

export default CutNoise

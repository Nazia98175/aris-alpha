import React from 'react'
import CheckboxInput from './CheckboxInput'
import StepLayout from './StepLayout'
import { ConsistencyIcon, ImprovePerformanceIcon, SaveTimeIcon, TradeDecision } from './Icons'

const MainObjective = () => {
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
            />
            <CheckboxInput
                id="clear-decisions"
                title="Clearer trade decisions"
                icon={<TradeDecision />}
                value="clearer_trade_decisions"
            />
            <CheckboxInput
                id="save-time"
                title="Save time on research"
                icon={<SaveTimeIcon />}
                value="save_time_on_research"
            />
            <CheckboxInput
                id="long-term-consistency"
                title="Build long-term consistency"
                icon={<ConsistencyIcon />}
                value="long_term_consistency"
            />
        </StepLayout>
    )
}

export default MainObjective

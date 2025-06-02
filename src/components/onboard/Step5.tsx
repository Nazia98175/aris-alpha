import CheckboxInput from './CheckboxInput'
import { ConsistencyIcon, ImprovePerformanceIcon, SaveTimeIcon, TradeDecision } from './Icons'

const Step5 = () => {
    return (
        <>
            <div className="mx-auto mt-5 w-full max-w-[422px]">
                <h3 className="text-center text-3xl leading-[120%] md:text-[40px]">What&apos;s Your Main Objective?</h3>
            </div>
            <p className="mt-4 text-center leading-[120%] text-white/70 md:mt-8 md:text-lg">
                What outcome matters most to you?
            </p>
            <div className="my-4 w-full space-y-2.5 md:my-8 md:space-y-3.5">
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
            </div>
            <p className="text-center leading-[120%] text-white/70 md:text-lg">
                We&apos;ll filter out distractions and surface clarity.
            </p>
        </>
    )
}

export default Step5

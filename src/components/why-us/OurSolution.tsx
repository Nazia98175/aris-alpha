'use client'

import { CheckSquare } from '../onboard/Icons'

const solutions = [
    {
        title: 'AI-Augmented Intelligence',
        description:
            'We leverage state-of-the-art large language models to parse earnings calls, macro reports, institutional filings, and sentiment data — identifying early inflection points and regime transitions before they surface in price.',
    },
    {
        title: 'Quantitative Research Core',
        description:
            'Thousands of simulations across strategy archetypes, filtered by forward predictive power, stress-tested across crisis periods, clustered by robustness, and blended through ensemble methods. Our research engine is designed for iteration, validation, and survivability.',
    },
    {
        title: 'Live Capital Deployment',
        description:
            'Every strategy we build trades live. Backed by disciplined risk management and tight execution systems, our strategies are walk-forward validated, monitored in real-time, and structured to scale only what survives.',
    },
]

export const OurSolution = () => {
    return (
        <section className="w-full bg-transparent px-6 py-10 text-white md:py-20 xl:px-0">
            <div className="mx-auto w-full max-w-[1140px] text-center">
                <h2 className="secondary-heading">Our Solution</h2>
                <p className="description mx-auto mt-4 max-w-[691px] !text-[#D0D0D0]/[80%]">
                    Aris Capital was built to solve this problem at its root. We operate as a fully independent
                    proprietary trading firm, deploying only our own capital. This ensures one thing: alignment. No
                    client pressures. No asset gathering. Just pure, performance-driven research, execution, and
                    refinement.
                </p>
                <p className="font-poppins mt-14 text-sm text-white md:text-base">
                    We fuse AI, systematic research, and institutional-grade execution into a unified alpha engine:
                </p>

                <div className="mt-10 grid justify-center gap-6 lg:grid-cols-3">
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="h-auto w-full max-w-full rounded-[30px] bg-white/[4%] p-[16px] text-left shadow-[0px_0px_10px_0px_rgba(42,100,246,0.15)] backdrop-blur-[40px] lg:h-[455px] lg:max-w-[364px] xl:p-[26px]"
                        >
                            <div className="mx-auto mb-4 flex w-full justify-center">
                                <CheckSquare />
                            </div>
                            <h3 className="mb-2 text-center text-xl font-medium text-white">{item.title}</h3>
                            <p className="text-center text-lg font-normal text-[#D0D0D0]/[80%]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

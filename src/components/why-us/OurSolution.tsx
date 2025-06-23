'use client'

import { solutions } from '../home/helper'
import { CheckSquare } from '../onboard/Icons'
import OurSolutionCard from './OurSolutionCard'

export const OurSolution = () => {
    return (
        <section className="w-full bg-transparent px-6 py-10 text-white md:py-20 xl:px-0">
            <div className="mx-auto w-full max-w-[1140px] text-center">
                <h2 className="secondary-heading">Our Solution</h2>
                <p className="description !text-waterwhite/[80%] mx-auto mt-4 max-w-[691px]">
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
                        <OurSolutionCard
                            key={index}
                            icon={<CheckSquare />}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

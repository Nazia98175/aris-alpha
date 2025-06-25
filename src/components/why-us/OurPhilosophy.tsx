'use client'

import { LineData } from 'lightweight-charts'
import { FC } from 'react'
import AreaChart from '../dashboard/chart'

interface Props {
    trade: LineData[]
}
export const OurPhilosophy: FC<Props> = ({ trade }) => {
    return (
        <div className="mx-auto flex h-full w-full max-w-[1140px]">
                <AreaChart
                    headingClass="!text-center !mx-auto !font-normal !leading-[120%] !capitalize md:!text-5xl"
                    heading="Our Philosophy"
                    data={trade}
                    description="Real alpha doesn’t come from bold predictions — it comes from clarity, constant improvement, and strategies that work even in tough markets.We don’t follow hype or trends. We build systems that adapt, improve, and deliver results over time."
                />
        </div>
    )
}

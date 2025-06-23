import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { ALLOCATION_CLOSED_DATA } from './Helper'

interface AllocationClosedProps {
    isSingleExpandedCardOne: boolean
    isSingleExpandedCardTwo: boolean
    isSingleExpandedCardThree: boolean
    isSingleExpanded:boolean
}

interface DataItem {
    name: string
    value: number
    color: string
}

interface CustomLabelProps {
    cx: number
    cy: number
    midAngle: number
    innerRadius: number
    outerRadius: number
    percent: number
}

interface CustomTooltipProps {
    active?: boolean
    payload?: Array<{
        name: string
        value: number
        color: string
    }>
}

const AllocationClosed = ({
    isSingleExpanded,
    isSingleExpandedCardOne,
    isSingleExpandedCardTwo,
    isSingleExpandedCardThree,
}: AllocationClosedProps) => {
    const data: DataItem[] = ALLOCATION_CLOSED_DATA

    const RADIAN = Math.PI / 180

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: CustomLabelProps) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5
        const x = cx + radius * Math.cos(-midAngle * RADIAN)
        const y = cy + radius * Math.sin(-midAngle * RADIAN)

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                className="text-sm font-semibold tracking-normal"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        )
    }

    const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
        if (active && payload && payload.length > 0) {
            return (
                <div className="rounded-lg border border-gray-600 bg-gray-800 p-3 shadow-lg">
                    <p className="text-sm font-medium text-white">{`${payload[0].name}: ${payload[0].value}%`}</p>
                </div>
            )
        }
        return null
    }

    return (
        <div
            className={`${isSingleExpandedCardOne ? 'min-h-[298px]' : ''} ${isSingleExpandedCardTwo ? 'min-h-[260px]' : ''} ${isSingleExpandedCardThree ? 'min-h-[298px]' : ''} flex h-full w-full flex-col justify-between gap-5 pb-3 sm:pb-5 xl:gap-3.5`}
        >
            <div
                className={`max-xs:flex-col xs:justify-between mt-6 flex w-full max-w-[600px] items-center xl:max-w-[400px] ${isSingleExpanded ? 'gap-5 sm:gap-6 xl:gap-4' : 'gap-5 sm:gap-8'}`}
            >
                <div className="relative flex aspect-[256/229] w-full xl:aspect-[200/180]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius="80%"
                                innerRadius={0}
                                dataKey="value"
                                strokeWidth={0}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} className="cursor-pointer" />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex flex-col gap-5">
                    <div className={`flex gap-5 ${isSingleExpanded ? 'xl:flex-col' : 'items-center'}`}>
                        <div className="flex items-center gap-2">
                            <div className="bg-lightblue h-2.5 w-2.5 rounded-full"></div>
                            <span className="text-richwhite text-sm !leading-[104.4%] font-normal tracking-normal">
                                Equities
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-darkred h-2.5 w-2.5 rounded-full"></div>
                            <span className="text-richwhite text-sm !leading-[104.4%] font-normal tracking-normal">
                                ETFs
                            </span>
                        </div>
                    </div>
                    <div className={`flex gap-5 ${isSingleExpanded ? 'xl:flex-col' : 'items-center'}`}>
                        <div className="flex items-center gap-2">
                            <div className="bg-lightorange h-2.5 w-2.5 rounded-full"></div>
                            <span className="text-richwhite text-sm !leading-[104.4%] font-normal tracking-normal">
                                Crypto
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-darkgreen h-2.5 w-2.5 rounded-full"></div>
                            <span className="text-richwhite text-sm !leading-[104.4%] font-normal tracking-normal">
                                Cash
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-richsand w-full rounded-md px-2.5 py-1.5">
                <p className="text-custom-sm text-mediumgrey font-normal tracking-normal italic">
                    Suggested allocations are model-based and not tailored to individual portfolios.
                </p>
            </div>
        </div>
    )
}

export default AllocationClosed

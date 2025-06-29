'use client'

import { AreaSeries, LineData, createChart } from 'lightweight-charts'
import React, { FC, useEffect, useRef } from 'react'

import AreaChart from '../old-dashboard/chart'
import Container from '../ui/Container'

interface IProps {
    trade: LineData[]
}

const Chart: FC<IProps> = ({ trade }) => {
    const chartContainerRef = useRef<HTMLDivElement>(null)
    const chartRef = useRef<ReturnType<typeof createChart>>(null)

    useEffect(() => {
        if (!chartContainerRef.current) return

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { color: 'transparent' },
                textColor: '#fff',
            },
            grid: {
                vertLines: { visible: false },
                horzLines: { visible: false },
            },
            timeScale: {
                timeVisible: true,
                secondsVisible: false,
            },
            autoSize: true,
        })

        chartRef.current = chart

        const lineSeries = chart.addSeries(AreaSeries, {
            baseLineColor: 'green',
            priceLineColor: 'white',
            topColor: '#001AFF',
            lineColor: '#001AFF',
            bottomColor: '#62D3FF',
        })
        lineSeries.setData(trade ?? [])

        return () => {
            chart.remove()
        }
    }, [trade])

    return (
        <div className="relative">
            <Container className="relative flex flex-col items-center gap-7 text-center sm:gap-10">
                <div className="flex flex-col items-center gap-4 sm:gap-7" id="live-insights">
                    <div className="w-fit rounded-full border border-[#656FC9] px-4 py-2 text-base font-medium">
                        Charts
                    </div>

                    <div className="space-y-5">
                        <h2 className="text-3xl font-medium sm:text-7xl">Live Results</h2>
                        <p className="text-muted-foreground max-w-5xl text-sm sm:text-base">
                            To create a future where AI enhances human capabilities, empowering businesses to make
                            smarter decisions and deliver superior customer experiences.
                        </p>
                    </div>
                </div>

                <div
                    className="w-full max-w-xl"
                    style={{
                        border: '1px solid',

                        borderImageSource:
                            'linear-gradient(270deg, rgba(226, 226, 226, 0) 0%, #FFFFFF 47.12%, rgba(124, 124, 124, 0) 100%)',
                        borderImageSlice: 1,
                    }}
                ></div>

                <div className="h-[500px] w-full sm:h-[600px]">
                    <AreaChart
                        heading="Advanced Insights"
                        data={trade}
                    />
                </div>
            </Container>
            <div
                className="absolute -top-[360px] left-0 h-[1000px] w-10 -rotate-45 blur-3xl sm:block"
                style={{
                    background:
                        'linear-gradient(270deg, rgba(96, 63, 254, 0.068) 0%, rgba(96, 63, 254, 0.85) 50.5%, rgba(96, 63, 254, 0.068) 100%)',
                }}
            ></div>
            <div
                className="absolute -top-[360px] right-0 h-[1000px] w-10 rotate-45 blur-3xl sm:block"
                style={{
                    background:
                        'linear-gradient(270deg, rgba(96, 63, 254, 0.068) 0%, rgba(96, 63, 254, 0.85) 50.5%, rgba(96, 63, 254, 0.068) 100%)',
                }}
            ></div>
            <div
                className="absolute top-[300px] left-0 h-[500px] w-10 -rotate-45 blur-3xl sm:block"
                style={{
                    background:
                        'linear-gradient(270deg, rgba(96, 63, 254, 0.068) 0%, rgba(96, 63, 254, 0.85) 50.5%, rgba(96, 63, 254, 0.068) 100%)',
                }}
            ></div>
            <div
                className="absolute top-[300px] right-0 h-[500px] w-10 rotate-45 blur-3xl sm:block"
                style={{
                    background:
                        'linear-gradient(270deg, rgba(96, 63, 254, 0.068) 0%, rgba(96, 63, 254, 0.85) 50.5%, rgba(96, 63, 254, 0.068) 100%)',
                }}
            ></div>
        </div>
    )
}

export default Chart

'use client'

import { AreaSeries, LineData, createChart } from 'lightweight-charts'
import { useEffect, useRef } from 'react'

interface Props {
    data: LineData[]
}

export default function AreaChart({ data }: Props) {
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
        lineSeries.setData(data ?? [])

        return () => {
            chart.remove()
        }
    }, [data])

    return (
        <div
            className="flex flex-col space-y-4 rounded-xl border border-[#FFFFFF4D] p-4 sm:p-8"
            style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)',
                width: '100%',
                height: '100%',
            }}
        >
            <h6 className="text-start text-xl font-bold sm:text-3xl">Advanced Insights</h6>
            <div ref={chartContainerRef} className="grow" />
        </div>
    )
}

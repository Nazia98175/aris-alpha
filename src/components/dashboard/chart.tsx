// components/LineChart.tsx
'use client'

import { LineData, LineSeries, createChart } from 'lightweight-charts'
import { useEffect, useRef } from 'react'

interface Props {
    data: LineData[]
}

export default function LineChart({ data }: Props) {
    const chartParentContainerRef = useRef<HTMLDivElement>(null)
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

        const lineSeries = chart.addSeries(LineSeries, {
            baseLineColor: 'green',
            priceLineColor: 'white',
            color: '#001AFF',
        })
        lineSeries.setData(data)

        return () => {
            chart.remove()
        }
    }, [data])

    return (
        <div
            className="rounded-xl border border-[#FFFFFF4D]"
            style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)',
                width: '100%',
                height: '100%',
            }}
            ref={chartParentContainerRef}
        >
            <div ref={chartContainerRef} style={{ width: '100%', height: '100%' }} />
        </div>
    )
}

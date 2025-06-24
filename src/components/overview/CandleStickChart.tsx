'use client'

import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface CandlestickChartProps {
    symbol: string
    height?: number
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ symbol, height = 94 }) => {
    const generateCandlestickData = (symbol: string) => {
        const basePrice = symbol === 'BTC' ? 45000 : symbol === 'SPY' ? 450 : 350
        const data = []
        let currentPrice = basePrice

        const volatilityPattern = [
            // Phase 1: Rounded top - moderate volatility
            0.06, 0.07, 0.08, 0.07, 0.06, 0.05, 0.04, 0.03, 0.02, 0.01,
            // Phase 2: Sideways chop - low to moderate volatility
            0.015, 0.012, 0.017, 0.02, 0.016, 0.014, 0.018, 0.019,
            // Phase 3: Sharp drop - high volatility
            0.12, 0.13, 0.15, 0.16, 0.14,
            // Phase 4: V-shape recovery - moderate to high volatility
            0.1, 0.09, 0.08, 0.07, 0.06, 0.05, 0.04,
        ]

        const trendPattern = [
            // Phase 1: Gradual rise then flat
            2.5, 2.8, 3.0, 2.6, 2.2, 1.5, 1.0, 0.5, 0.2, 0.0,
            // Phase 2: Sideways
            0.1, -0.1, 0.0, 0.2, -0.2, 0.0, 0.1, -0.1,
            // Phase 3: Sharp drop
            -4.2, -4.8, -5.0, -4.5, -4.0,
            // Phase 4: V recovery
            3.8, 3.6, 3.2, 2.8, 2.5, 2.0, 1.5,
        ]
          

        for (let i = 0; i < 30; i++) {
            const date = new Date()
            date.setHours(date.getHours() - (30 - i))

            const volatility = volatilityPattern[i] || 0.08
            const trend = trendPattern[i] || 0
            const trendStrength = 0.05 // Strong but controlled trend movements

            const trendChange = trend * trendStrength
            const randomChange = (Math.random() - 0.5) * 2 * volatility
            const totalChange = trendChange + randomChange

            const open = currentPrice
            const close = open * (1 + totalChange)

            // Create phase-appropriate wick behavior
            let upperWickExtension, lowerWickExtension, wickMultiplier

            if (i < 10) {
                // Phase 1: Uptrend - longer lower wicks, decent upper wicks
                upperWickExtension = Math.random() * 0.06 + 0.03
                lowerWickExtension = Math.random() * 0.12 + 0.08
                wickMultiplier = Math.random() < 0.7 ? 2.8 : 2.0
            } else if (i < 20) {
                // Phase 2: Sideways - longer upper wicks, tight lower wicks
                upperWickExtension = Math.random() * 0.16 + 0.1
                lowerWickExtension = Math.random() * 0.06 + 0.04
                wickMultiplier = Math.random() < 0.8 ? 3.0 : 2.3
            } else {
                // Phase 3: Recovery - balanced but strong wicks
                upperWickExtension = Math.random() * 0.08 + 0.04
                lowerWickExtension = Math.random() * 0.14 + 0.08
                wickMultiplier = Math.random() < 0.75 ? 2.8 : 2.0
            }
            

            const bodyHigh = Math.max(open, close)
            const bodyLow = Math.min(open, close)

            const high = bodyHigh * (1 + upperWickExtension * wickMultiplier)
            const low = bodyLow * (1 - lowerWickExtension * wickMultiplier)

            data.push({
                x: date.getTime(),
                y: [open, high, low, close],
            })

            currentPrice = close
        }

        return data
    }

    const series = useMemo(
        () => [
            {
                name: symbol,
                data: generateCandlestickData(symbol),
            },
        ],
        [symbol],
    )

    const options: ApexOptions = useMemo(
        () => ({
            chart: {
                type: 'candlestick',
                height,
                width: '100%',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
                background: 'transparent',
                animations: {
                    enabled: true,
                },
            },
            plotOptions: {
                candlestick: {
                    colors: {
                        upward: '#00B266', 
                        downward: '#E54C4C', 
                    },
                    wick: {
                        useFillColor: true,
                    },
                },
            },
            xaxis: {
                type: 'datetime',
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    show: false,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    show: false,
                },
            },
            grid: {
                show: false,
            },
            tooltip: {
                enabled: true,
                theme: 'dark',
                style: {
                    fontSize: '12px',
                    fontFamily: 'inherit',
                },
                custom: function ({ seriesIndex, dataPointIndex, w }) {
                    const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex]
                    const [open, high, low, close] = data.y
                    const date = new Date(data.x)
                    const isGreen = close > open
                    const change = close - open
                    const changePercent = ((change / open) * 100).toFixed(2)

                    // Format price based on symbol
                    const formatPrice = (price: number) => {
                        if (symbol === 'BTC') {
                            return `${price.toLocaleString('en-US', { maximumFractionDigits: 0 })}`
                        }
                        return `${price.toFixed(2)}`
                    }

                    return `
                        <div style="
                            background: #202020; 
                            border: 1px solid #272727; 
                            border-radius: 10px; 
                            padding: 12px; 
                            min-width: 180px;
                        ">
                            <div style="
                                color: #f9fafb; 
                                font-weight: 600; 
                                margin-bottom: 8px; 
                                font-size: 13px;
                                border-bottom: 1px solid #374151;
                                padding-bottom: 6px;
                            ">
                                ${symbol} • ${date.toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span style="color: #9ca3af;">Open:</span>
                                <span style="color: #f9fafb; font-weight: 500;">${formatPrice(open)}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span style="color: #9ca3af;">High:</span>
                                <span style="color: #10b981; font-weight: 500;">${formatPrice(high)}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span style="color: #9ca3af;">Low:</span>
                                <span style="color: #ef4444; font-weight: 500;">${formatPrice(low)}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <span style="color: #9ca3af;">Close:</span>
                                <span style="color: #f9fafb; font-weight: 500;">${formatPrice(close)}</span>
                            </div>
                            <div style="
                                display: flex; 
                                justify-content: space-between; 
                                padding-top: 6px;
                                border-top: 1px solid #374151;
                            ">
                                <span style="color: #9ca3af;">Change:</span>
                                <span style="
                                    color: ${isGreen ? '#10b981' : '#ef4444'}; 
                                    font-weight: 600;
                                ">
                                    ${isGreen ? '+' : ''}${formatPrice(change)} (${isGreen ? '+' : ''}${changePercent}%)
                                </span>
                            </div>
                        </div>
                    `
                },
            },
            legend: {
                show: false,
            },
            stroke: {
                width: [1, 1], // Thinner lines for more precision
            },
            fill: {
                opacity: 1,
            },
        }),
        [height],
    )

    return (
        <div className="h-full w-full">
            <Chart options={options} series={series} type="candlestick" height={height} width="100%" />
        </div>
    )
}

export default CandlestickChart

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

        // Create CLEAR three-phase pattern: UP → DOWN → UP
        const volatilityPattern = [
            // Phase 1: Strong uptrend (candles 0-9) - lower volatility for cleaner trend
            0.08, 0.06, 0.07, 0.05, 0.09, 0.06, 0.07, 0.08, 0.06, 0.07,
            // Phase 2: Strong downtrend (candles 10-19) - higher volatility for dramatic crash
            0.12, 0.15, 0.13, 0.16, 0.14, 0.17, 0.15, 0.14, 0.18, 0.16,
            // Phase 3: Strong recovery (candles 20-29) - moderate volatility for steady climb
            0.09, 0.08, 0.1, 0.07, 0.11, 0.08, 0.09, 0.1, 0.08, 0.09,
        ]

        // Create CLEAR directional trends: STRONG UP → STRONG DOWN → STRONG UP
        const trendPattern = [
            // Phase 1: Consistent uptrend - all positive, increasing momentum
            2.5, 2.8, 3.1, 2.6, 3.4, 2.9, 3.2, 3.5, 2.7, 3.8,
            // Phase 2: Brutal downtrend - all negative, accelerating selling
            -3.2, -3.8, -4.1, -3.5, -4.5, -3.9, -4.2, -4.8, -3.6, -5.1,
            // Phase 3: Strong recovery - all positive, building momentum back up
            2.8, 3.1, 2.5, 3.6, 2.9, 3.3, 3.7, 2.6, 3.4, 4.0,
        ]

        for (let i = 0; i < 30; i++) {
            const date = new Date()
            date.setHours(date.getHours() - (30 - i))

            const volatility = volatilityPattern[i] || 0.08
            const trend = trendPattern[i] || 0
            const trendStrength = 0.025 // Strong but controlled trend movements

            const trendChange = trend * trendStrength
            const randomChange = (Math.random() - 0.5) * 2 * volatility
            const totalChange = trendChange + randomChange

            const open = currentPrice
            const close = open * (1 + totalChange)

            // Create phase-appropriate wick behavior
            let upperWickExtension, lowerWickExtension, wickMultiplier

            if (i < 10) {
                // Phase 1: Uptrend - longer lower wicks (buying dips), shorter upper wicks
                upperWickExtension = Math.random() * 0.03 + 0.015 // 1.5-4.5% upper wick
                lowerWickExtension = Math.random() * 0.06 + 0.04 // 4-10% lower wick
                wickMultiplier = Math.random() < 0.7 ? 2.0 : 1.5 // 70% chance for dramatic lower wicks
            } else if (i < 20) {
                // Phase 2: Downtrend - longer upper wicks (selling rallies), shorter lower wicks
                upperWickExtension = Math.random() * 0.08 + 0.05 // 5-13% upper wick
                lowerWickExtension = Math.random() * 0.03 + 0.02 // 2-5% lower wick
                wickMultiplier = Math.random() < 0.8 ? 2.5 : 2.0 // 80% chance for dramatic upper wicks
            } else {
                // Phase 3: Recovery - longer lower wicks (strong buying), moderate upper wicks
                upperWickExtension = Math.random() * 0.04 + 0.02 // 2-6% upper wick
                lowerWickExtension = Math.random() * 0.07 + 0.045 // 4.5-11.5% lower wick
                wickMultiplier = Math.random() < 0.75 ? 2.2 : 1.8 // 75% chance for dramatic lower wicks
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
                    enabled: false,
                },
            },
            plotOptions: {
                candlestick: {
                    colors: {
                        upward: '#10B981', // Green for bullish candles
                        downward: '#EF4444', // Red for bearish candles
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
                            background: #1f2937; 
                            border: 1px solid #374151; 
                            border-radius: 8px; 
                            padding: 12px; 
                            min-width: 180px;
                            font-family: inherit;
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

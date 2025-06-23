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

        // Create data with higher volatility for more dramatic movements
        const volatilityPattern = [
            0.035, 0.028, 0.042, 0.025, 0.055, 0.038, 0.031, 0.048, 0.033, 0.062, 0.071, 0.045, 0.039, 0.033, 0.027,
            0.041, 0.035, 0.052, 0.029, 0.037, 0.033, 0.058, 0.044, 0.036, 0.023, 0.039, 0.041, 0.049, 0.056, 0.043,
        ]

        // Create a pattern similar to your image with more dramatic swings
        const trendPattern = [
            1,
            1.2,
            0.8,
            1.5,
            0.6,
            1.3,
            0.9,
            1.1,
            1.4,
            0.7, // volatile uptrend
            -0.8,
            -1.4,
            -1.1,
            -1.6,
            -0.9,
            -1.2,
            -1.5,
            -0.7,
            -1.3,
            -1.8, // dramatic downtrend
            -1.2,
            -0.6,
            -1.4,
            -0.8,
            -1.1, // continued volatility
            0.9,
            1.2,
            0.7,
            1.5,
            1.1, // volatile recovery
        ]

        for (let i = 0; i < 30; i++) {
            const date = new Date()
            date.setHours(date.getHours() - (30 - i))

            const volatility = volatilityPattern[i] || 0.035
            const trend = trendPattern[i] || 0
            const trendStrength = 0.008 // Increased trend strength

            const trendChange = trend * trendStrength
            const randomChange = (Math.random() - 0.5) * 2 * volatility
            const totalChange = trendChange + randomChange

            const open = currentPrice
            const close = open * (1 + totalChange)

            // Create much longer wicks for dramatic effect
            const upperWickExtension = Math.random() * 0.015 + 0.01 // 1-2.5% upper wick
            const lowerWickExtension = Math.random() * 0.015 + 0.01 // 1-2.5% lower wick

            // Sometimes create extremely long wicks for dramatic candles
            const isDramaticCandle = Math.random() < 0.3 // 30% chance
            const wickMultiplier = isDramaticCandle ? 1.5 : 1

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
                enabled: false,
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

'use client'

import React, { useEffect, useRef } from 'react'

import Container from '../ui/container'

const Chart = () => {
    const container = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!container.current) return
        const script = document.createElement('script')
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
        script.type = 'text/javascript'
        script.async = true
        script.innerHTML = `
            {
              "autosize": true,
              "symbol": "NASDAQ:AAPL",
              "interval": "D",
              "timezone": "Etc/UTC",
              "theme": "dark",
              "style": "1",
              "locale": "en",
              "allow_symbol_change": true,
              "support_host": "https://www.tradingview.com"
            }`
        container.current.appendChild(script)
    }, [])

    return (
        <div className="relative">
            <Container className="relative flex flex-col items-center gap-7 text-center sm:gap-10">
                <div className="flex flex-col items-center gap-4 sm:gap-7">
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
                    <div
                        className="tradingview-widget-container"
                        ref={container}
                        style={{ height: '100%', width: '100%' }}
                    >
                        <div
                            className="tradingview-widget-container__widget"
                            style={{ height: 'calc(100% - 32px)', width: '100%' }}
                        ></div>
                    </div>
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

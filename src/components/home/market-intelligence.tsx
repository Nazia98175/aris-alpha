import Container from '../ui/container'
import React from 'react'

const MarkIntelligence = () => {
    return (
        <div className="relative">
            <Container className="relative flex flex-col items-center gap-7 text-center sm:gap-10">
                <div className="flex flex-col items-center gap-4 sm:gap-7" id="about">
                    <div className="w-fit rounded-full border border-[#656FC9] px-4 py-2 text-sm font-medium">
                        About Us
                    </div>

                    <div className="space-y-5">
                        <h2 className="text-3xl font-medium sm:text-7xl">Market Intelligence</h2>
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

                <p
                    className="text-xl leading-10 font-light sm:text-4xl sm:leading-14"
                    style={
                        {
                            // background: 'linear-gradient(180deg, #FFFFFF 20.26%, rgba(159, 176, 216, 0.12) 120.38%)',
                            // WebkitBackgroundClip: 'text',
                            // WebkitTextFillColor: 'transparent',
                        }
                    }
                >
                    {'‘We’re'} building a platform that delivers real-time trading signals powered by live market data.
                    Our goal is to help you act with confidence — using insights that are fast, clear, and backed by
                    data. Whether {"you're"} a trader, investor, or market watcher, we give you the edge to stay ahead.’
                </p>
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
        </div>
    )
}

export default MarkIntelligence

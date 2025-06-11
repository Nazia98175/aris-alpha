import Image from 'next/image'
import React from 'react'

const BuildYourStrategyFeed = () => {
    return (
        <div className="mx-auto mt-8 max-w-[1140px] sm:mt-14 md:mt-16 lg:mt-24">
            <h1 className="mx-auto mb-3.5 w-fit max-w-[768px] text-center text-4xl leading-[120%] text-white md:text-5xl xl:text-[64px]">
                We’ve built your feed based on your answers.
            </h1>
            <p className="mb-8 text-center text-base leading-[150%] font-medium sm:mb-14 md:mb-16 md:text-lg lg:mb-24 lg:text-xl">
                Your dashboard is now aligned to your style, assets, pacing, and goals.
            </p>
            <Image
                width={1140}
                height={696}
                src="/assets/onboarding/webp/strategy-feed.webp"
                alt="strategy-feed"
                className="rounded-sm object-cover blur-[14px] lg:rounded-4xl"
            />
        </div>
    )
}

export default BuildYourStrategyFeed

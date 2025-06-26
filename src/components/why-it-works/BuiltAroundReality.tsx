import React from 'react'
import { BuiltAroundSvg } from '../onboard/Icons'
import { featureListItems } from '../onboard/Helper'
import FeatureListItem from './FeatureListItem'

const BuiltAroundReality = () => {
    return (
        <div className="relative mx-auto w-full max-w-[1920px]">
            <div className="relative top-6 lg:absolute xl:top-1">
                {/* Left: SVG with curved lines and labels */}
                <BuiltAroundSvg />
            </div>
            <section className="built-around-container-style">
                {/* Right: Content */}
                <div className="w-full max-w-full lg:max-w-[433px]">
                    <h2 className="secondary-heading">Built Around Market Reality</h2>
                    <p className="description !text-waterwhite/[80%] mb-3 !leading-[160%] md:mb-6">
                        The best traders don’t guess. They move early — when conviction starts to build.
                    </p>

                    {/* System note */}
                    <div className="built-around-button-style">Our system is built to do the same:</div>

                    {/* Features */}
                    <ul className="text-waterwhite/[80%] space-y-3 text-base !leading-[160%] md:text-lg">
                        {featureListItems.map((item, idx) => (
                            <FeatureListItem key={idx} icon={item.icon} text={item.text} />
                        ))}
                    </ul>

                    <p className="mt-3 text-sm leading-[150%] font-medium text-white md:mt-6 md:text-base">
                        It mirrors how top desks position. Now, so can you.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default BuiltAroundReality

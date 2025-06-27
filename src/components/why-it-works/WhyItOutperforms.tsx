import { CheckIcon, NextVector } from '../home/Icons'
import { arisPoints, traditionalPoints } from '../onboard/Helper'

const WhyItOutperforms = () => {
    return (
        <section className="outperform-outer-container-style">
            <h2 className="secondary-heading mb-12 text-center !font-normal">Why It Outperforms</h2>

            <div className="outperform-inner-container-style">
                <div className="traditional-tools-container-style">
                    <div className="relative mb-7 md:mb-14">
                        <h3 className="tool-heading-style">Traditional Tools</h3>
                        <div className="redline-traditional-container-style" />
                    </div>
                    <ul className="outperform-list-style">
                        {traditionalPoints.map((point, index) => (
                            <li key={index} className="ml-5 list-disc">
                                {point}
                            </li>
                        ))}
                    </ul>

                    <span className="outperform-nextvector-absolute-style">
                        <span className="text-waterwhite absolute -top-4 right-[55px]">Noise</span>
                        <NextVector />
                    </span>
                </div>
                <div className="aris-alpha-container-style">
                    <div className="relative mb-7 md:mb-14">
                        <h3 className="tool-heading-style">Aris Alpha</h3>
                        <div className="blueline-arisalpha-container-style" />
                    </div>
                    <ul className="outperform-list-style">
                        {arisPoints.map((point, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <CheckIcon />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WhyItOutperforms

import Image from 'next/image'
import CommonBtn from '../ui/common-btn'
import { ProgressStep, stepInstractions } from './helper'
import { DotedLineIcon } from './Icons'
import StepInstractionBlock from './StepInstractionBlock'

const AlphaBuild = () => {
    return (
        <section className="relative">
            <Image
                width={1440}
                height={800}
                className="absolute top-0 left-0 z-[-1] h-[700px] w-full object-cover object-right max-sm:object-top md:object-fill lg:h-[1000px]"
                src="/assets/homepage/webp/hero-bg.webp"
                alt="background"
                unoptimized
            />
            <div className="mx-auto max-w-[1004px] px-4 py-13 sm:pt-10 md:pb-[112px] lg:pb-[161px]">
                <h2 className="secondary-heading text-center text-white">How Aris Alpha Builds Your Strategy</h2>
                <div className="pt-[45px] md:pt-[60px]">
                    <div className="flex justify-between gap-7">
                        <div className="relative hidden max-w-[50px] pt-[45px] md:block">
                            <span className="absolute top-[45px] left-[50%] z-[-1] h-full w-full">
                                <DotedLineIcon />
                            </span>
                            {ProgressStep.map((step, index) => (
                                <div key={index} className={index > 0 ? 'mt-[162px]' : ''}>
                                    {step.icon}
                                </div>
                            ))}
                        </div>
                        <div className="w-full">
                            {stepInstractions.map((list, index) => (
                                <StepInstractionBlock
                                    key={index}
                                    list={list}
                                    index={index}
                                    totalSteps={stepInstractions.length}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center pt-10">
                    <CommonBtn
                        btnText="Get Started"
                        btnUrl="/onboarding"
                        variant="secondary"
                        className="h-[45px] w-full sm:w-fit md:h-[63px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default AlphaBuild

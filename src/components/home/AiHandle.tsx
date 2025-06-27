'use client'

import { useScrollActiveSection } from '@/hooks/useScrollActiveSection'
import Image from 'next/image'
import { useRef } from 'react'
import { features } from '../onboard/Helper'
import CommonBtn from '../ui/common-btn'

const AiHandle = () => {
    const sectionCount = 3
    const containerRef = useRef<HTMLDivElement>(null)
    const { activeIndex, sectionRefs } = useScrollActiveSection(sectionCount)

    return (
        <section
            ref={containerRef}
            className="relative overflow-clip py-10 sm:pt-16 sm:pb-20 md:min-h-screen md:snap-start md:snap-always xl:pb-28"
            id="about-us"
            style={{
                // Ensure clean snap behavior
                scrollSnapAlign: 'start',
                scrollSnapStop: 'always',
            }}
        >
            <Image
                className="absolute z-[-1] w-full opacity-[32%] mix-blend-hard-light"
                unoptimized
                height={150}
                width={200}
                src={'/assets/homepage/webp/ai-handle-bg.webp'}
                alt={'AiHandle'}
            />
            <div className="custom-container relative z-10">
                <h2 className="secondary-heading mx-auto mb-6 w-fit text-center text-white sm:mb-8 lg:mb-12 xl:mb-[72px]">
                    Let the AI Handle the Chaos
                </h2>
                <div className="block space-y-8 md:hidden">
                    {features.map((feature) => (
                        <div key={feature.id} className="bg-angst border-darker rounded-2xl border p-4 sm:p-8">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                                <div className="flex-1">
                                    <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
                                    <p className="text-waterwhite text-sm leading-[130%]">{feature.description}</p>
                                </div>
                                <div className="mt-4 sm:mt-0 sm:w-[300px]">
                                    <Image
                                        className="w-full rounded-lg"
                                        unoptimized
                                        height={150}
                                        width={200}
                                        src={feature.image}
                                        alt={feature.title}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative hidden gap-8 md:flex lg:gap-16">
                    <div className="flex-1 space-y-8 lg:space-y-16 xl:space-y-[100px]">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                ref={(el) => {
                                    sectionRefs.current[index] = el
                                }}
                                className="flex min-h-[244px] flex-col justify-center transition-opacity duration-300 ease-in-out lg:min-h-[335px] xl:min-h-[400px]"
                                style={{
                                    opacity: activeIndex === index ? 1 : 0.3,
                                }}
                            >
                                <h2 className="mb-2 text-2xl leading-[120%] text-white lg:text-4xl xl:text-[48px]">
                                    {feature.title}
                                </h2>
                                <p className="text-waterwhite text-sm leading-[130%] sm:text-base xl:text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="max-w-[400px] lg:max-w-[550px] xl:max-w-[656px]">
                        <div className="sticky top-[120px]">
                            <div className="relative overflow-hidden rounded-2xl">
                                {features.map((feature, index) => (
                                    <div
                                        key={feature.id}
                                        className={`transition-all duration-1000 ease-in-out ${
                                            activeIndex === index ? 'opacity-100' : 'absolute inset-0 opacity-0'
                                        }`}
                                        style={{
                                            transitionDelay: activeIndex === index ? '200ms' : '0ms',
                                        }}
                                    >
                                        <Image
                                            className="w-full rounded-2xl shadow-2xl"
                                            unoptimized
                                            height={400}
                                            width={656}
                                            src={feature.image}
                                            alt={feature.title}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <CommonBtn
                    className="mx-auto mt-6 w-fit sm:mt-14 lg:!py-[18px]"
                    btnText="Get Started"
                    btnUrl="/onboarding"
                    variant="secondary"
                />
            </div>
            <div className="gradient-dark-black-layer absolute bottom-0 left-0 z-0 h-[200px] w-full"></div>
        </section>
    )
}

export default AiHandle

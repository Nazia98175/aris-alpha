'use client'

import React, { useState } from 'react'

import Container from '../ui/container'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const steps = [
    {
        number: '01',
        title: 'Data Collection & Analysis',
        description:
            'Our AI systems gather and process data from various sources, ensuring a comprehensive understanding.',
        active: true,
        icon: '/assets/icons/box.png',
    },
    {
        number: '02',
        title: 'Deployment and Monitoring',
        description:
            'The solution is deployed to seamlessly integrate into your existing systems, with ongoing monitoring.',
        active: false,
        icon: '/assets/icons/sailboat.png',
    },
    {
        number: '03',
        title: 'Insights and Reporting',
        description:
            'Receive in-depth analytics and reports to track performance and gain visibility into AI-driven processes.',
        active: false,
        icon: '/assets/icons/folder.png',
    },
]

const StayHead = () => {
    const [signalSteps, setSignalSteps] = useState(steps)

    return (
        <div className="relative">
            <Container className="relative flex flex-col gap-10 sm:gap-28">
                <div className="flex flex-col gap-7 sm:gap-10">
                    <h2 className="max-w-4xl text-3xl leading-10 font-medium sm:text-7xl sm:leading-24">
                        Stay Ahead with Tactical Signal
                    </h2>
                    <div
                        className="w-full max-w-3xl -rotate-180"
                        style={{
                            border: '1px solid',

                            borderImageSource:
                                'linear-gradient(270deg, rgba(226, 226, 226, 0) 0%, #FFFFFF 0.01%, rgba(124, 124, 124, 0) 100%)',
                            borderImageSlice: 1,
                        }}
                    ></div>
                </div>

                <div className="grid sm:gap-7 md:grid-cols-7 lg:gap-10">
                    <div className="col-span-3 flex flex-col gap-5 sm:gap-10">
                        {signalSteps.map((step) => (
                            <button
                                key={step.number}
                                className={cn(
                                    'flex cursor-text items-center gap-5 text-start sm:cursor-pointer sm:gap-10',
                                    'text-white sm:text-white',
                                    step.active && 'sm:text-primary',
                                )}
                                onClick={() => {
                                    setSignalSteps(
                                        signalSteps.map((s) => ({
                                            ...s,
                                            active: s.number === step.number,
                                        })),
                                    )
                                }}
                            >
                                <span className="text-xl font-medium sm:text-4xl">{step.number}</span>

                                <div className="space-y-3">
                                    <div className="relative size-10">
                                        <Image alt={step.title} src={step.icon} fill />
                                    </div>

                                    <h6 className="text-lg font-medium sm:text-2xl">{step.title}</h6>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="relative col-span-4 hidden h-full md:block">
                        <Image
                            alt="data-collection-and-analysis"
                            src="/assets/backgrounds/stay-head-first-step.png"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default StayHead

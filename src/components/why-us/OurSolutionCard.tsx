'use client'

import { ReactNode } from 'react'

interface OurSolutionCardProps {
    icon: ReactNode
    title: string
    description: string
}

const OurSolutionCard = ({ icon, title, description }: OurSolutionCardProps) => {
    return (
        <div className="transform cursor-pointer rounded-[15px] bg-white/[4%] p-[16px] text-left shadow-[0px_0px_10px_0px_rgba(42,100,246,0.15)] backdrop-blur-[40px] transition duration-300 hover:scale-[1.03] md:rounded-[30px] lg:h-[455px] lg:max-w-[364px] xl:p-[26px]">
            <div className="mx-auto mb-4 flex w-full justify-center">{icon}</div>
            <h3 className="mb-2 text-center text-xl font-medium text-white">{title}</h3>
            <p className="text-center text-lg font-normal text-waterwhite/[80%]">{description}</p>
        </div>
    )
}

export default OurSolutionCard

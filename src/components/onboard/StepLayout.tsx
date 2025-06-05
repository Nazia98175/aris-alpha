import React from 'react'

interface StepLayoutProps {
    title: React.ReactNode
    description: string
    children: React.ReactNode
    bottomNote?: string
}

const StepLayout = ({ title, description, children, bottomNote }: StepLayoutProps) => {
    return (
        <div className="mx-auto mt-8 h-auto w-full max-w-[486px] space-y-4 sm:space-y-6 md:mt-10 md:space-y-8">
            <h3 className="mx-auto max-w-[422px] text-center text-2xl leading-[120%] sm:text-3xl md:text-[40px]">
                {title}
            </h3>
            <p className="mx-auto max-w-[90%] text-center text-sm leading-[120%] text-white/70 sm:text-lg md:text-lg">
                {description}
            </p>
            <div className="w-full space-y-2.5 md:space-y-3.5">{children}</div>
            {bottomNote && <p className="text-center leading-[120%] text-white/70 md:text-lg">{bottomNote}</p>}
        </div>
    )
}

export default StepLayout

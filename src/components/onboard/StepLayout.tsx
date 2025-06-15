import React from 'react'

interface StepLayoutProps {
    title: React.ReactNode
    description: string
    children: React.ReactNode
    bottomNote?: string
}

const StepLayout = ({ title, description, children, bottomNote }: StepLayoutProps) => {
    return (
        <div className="3xl:space-y-8 3xl:mt-10 mx-auto mt-4 h-auto w-full max-w-[486px] space-y-2 sm:space-y-4 md:space-y-6">
            <h3 className="mx-auto max-w-[422px] text-center text-2xl leading-[120%] sm:text-3xl md:text-[40px]">
                {title}
            </h3>
            <p className="text-center text-sm leading-[120%] text-white/70 sm:text-base md:text-lg">{description}</p>
            <div className="w-full space-y-2 lg:space-y-3 xl:space-y-3.5">{children}</div>
            {bottomNote && (
                <p className="text-center text-sm leading-[120%] text-white/70 sm:text-base md:text-lg">{bottomNote}</p>
            )}
        </div>
    )
}

export default StepLayout

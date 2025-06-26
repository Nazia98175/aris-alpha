import { ReactNode } from 'react'

interface OurSolutionCardProps {
    icon: ReactNode
    title: string
    description: string
}

const OurSolutionCard = ({ icon, title, description }: OurSolutionCardProps) => {
    return (
        <div className="oursolution-box-shadow oursolution-container-style">
            <div className="mx-auto mb-4 flex w-full justify-center">{icon}</div>
            <h3 className="mb-2 text-center text-xl font-medium text-white">{title}</h3>
            <p className="text-waterwhite/[80%] description !text-center !leading-[160%]">{description}</p>
        </div>
    )
}

export default OurSolutionCard

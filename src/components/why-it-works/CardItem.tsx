// components/common/CardItem.tsx
import React from 'react'

interface CardItemProps {
    icon: React.ReactNode
    title: string
}

const CardItem: React.FC<CardItemProps> = ({ icon, title }) => {
    return (
        <article className="group what-you-get-container-style">
            {/* Hover Borders with Transition */}
            <span className="what-get-hover-top-border-style" />
            <span className="what-get-hover-bottom-border-style" />

            <div>{icon}</div>
            <p className="strokeLinejoin !font-poppins !leading-[150%] !font-normal">{title}</p>
        </article>
    )
}

export default CardItem

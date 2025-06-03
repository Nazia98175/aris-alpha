import React from 'react'
import { ArrowIcon } from './Icons'

type NextBtnProps = {
    onClick: () => void
}

const NextBtn: React.FC<NextBtnProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2.5 rounded-3xl border-[1.5px] border-[#FCF6F1] bg-transparent px-6 py-2.5 text-base leading-[120%] text-[#FCF6F1] duration-300 hover:bg-[#FCF6F1] hover:text-[#010101] sm:rounded-4xl sm:py-4"
        >
            Next
            <span className="rotate-180">
                <ArrowIcon />
            </span>
        </button>
    )
}

export default NextBtn

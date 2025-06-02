import React from 'react'
import { ArrowIcon } from './Icons'

type BackBtnProps = {
    onClick: () => void
}

const BackBtn: React.FC<BackBtnProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2.5 rounded-3xl border-[1.5px] border-[#FCF6F1] bg-[#FCF6F1] px-6 py-2.5 text-base leading-[120%] text-[#010101] duration-300 hover:bg-transparent hover:text-[#FCF6F1] sm:rounded-[40px] sm:py-4"
        >
            <ArrowIcon />
            Back
        </button>
    )
}

export default BackBtn

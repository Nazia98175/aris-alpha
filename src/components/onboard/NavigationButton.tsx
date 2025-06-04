import React from 'react'
import { ArrowIcon } from './Icons'

type NavigationButtonProps = {
    variant: 'next' | 'back'
    onClick: () => void
    children?: React.ReactNode
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ variant, onClick, children }) => {
    const isNext = variant === 'next'

    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2.5 rounded-3xl border-[1.5px] px-6 py-2.5 text-base leading-[120%] duration-300 sm:rounded-4xl sm:py-4 ${
                isNext
                    ? 'border-[#FCF6F1] bg-transparent text-[#FCF6F1] hover:bg-[#FCF6F1] hover:text-[#010101]'
                    : 'border-[#FCF6F1] bg-[#FCF6F1] text-[#010101] hover:bg-transparent hover:text-[#FCF6F1]'
            } `}
        >
            {isNext ? (
                <>
                    {children || 'Next'}
                    <span className="rotate-180">
                        <ArrowIcon />
                    </span>
                </>
            ) : (
                <>
                    <ArrowIcon />
                    {children || 'Back'}
                </>
            )}
        </button>
    )
}

export default NavigationButton

import React from 'react'
import { ArrowIcon } from './Icons'

type NavigationButtonProps = {
    variant: 'primary' | 'secondary'
    onClick: () => void
    children?: React.ReactNode
    className?: string
    disabled?: boolean
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
    variant,
    onClick,
    children,
    className,
    disabled = false,
}) => {
    const primary = variant === 'primary'

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center gap-2.5 rounded-3xl border-[1.5px] px-5 py-2 text-sm leading-[120%] duration-300 sm:rounded-4xl sm:px-6 sm:py-3 sm:text-base xl:py-4 ${
                primary
                    ? `border-[#FCF6F1] bg-[#FCF6F1] text-[#010101] ${!disabled ? 'hover:ring-1 hover:ring-white' : ''}`
                    : `border-[#FCF6F1] bg-transparent text-[#FCF6F1] ${!disabled ? 'hover:rounded-xl' : ''}`
            } ${disabled ? 'cursor-not-allowed opacity-80' : ''} ${className || ''}`}
        >
            {primary ? (
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

import Link from 'next/link'
import React from 'react'
import { Loader2 } from 'lucide-react'

interface ButtonProps {
    btnText: string
    btnUrl?: string
    variant?: 'primary' | 'secondary'
    className?: string
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
    disabled?: boolean
    loading?: boolean
}

const CommonBtn: React.FC<ButtonProps> = ({
    btnText,
    btnUrl,
    variant = 'primary',
    className = '',
    type = 'button',
    onClick,
    disabled,
    loading,
}) => {
    const baseStyles =
        'rounded-full border-[1.5px] border-[#2A64F6] px-6 py-3 text-sm duration-300 md:text-base lg:px-10 lg:py-[13px] flex items-center justify-center'

    const variantStyles = {
        primary: 'shadow-[0px_0px_10px_0px_#2A64F6] hover:bg-[#2A64F6]',
        secondary: 'bg-[#2A64F6] hover:bg-transparent hover:shadow-[0px_0px_10px_0px_#2A64F6]',
    }

    const disabledStyles = disabled || loading ? 'opacity-50 pointer-events-none' : ''

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`

    // If btnUrl is provided, render as Link
    if (btnUrl && !loading && !disabled) {
        return (
            <Link href={btnUrl} className={combinedStyles}>
                {btnText}
            </Link>
        )
    }

    // Otherwise render as button
    return (
        <button type={type} onClick={onClick} disabled={disabled || loading} className={combinedStyles}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : btnText}
        </button>
    )
}

export default CommonBtn

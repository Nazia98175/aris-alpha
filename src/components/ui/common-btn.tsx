import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    btnText: string
    btnUrl: string
    variant?: 'primary' | 'secondary'
    className?: string
}

const CommonBtn: React.FC<ButtonProps> = ({ btnText, btnUrl, variant = 'primary', className = '' }) => {
    const baseStyles =
        'rounded-full border-[1.5px] border-[#2A64F6] px-6 py-3 text-sm duration-300 md:text-base lg:px-10 lg:py-[13px] flex items-center justify-center'

    const variantStyles = {
        primary: 'shadow-[0px_0px_10px_0px_#2A64F6] hover:bg-[#2A64F6]',
        secondary: 'bg-[#2A64F6] hover:bg-transparent hover:shadow-[0px_0px_10px_0px_#2A64F6]',
    }

    return (
        <Link href={btnUrl} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
            {btnText}
        </Link>
    )
}

export default CommonBtn

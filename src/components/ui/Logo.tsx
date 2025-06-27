import React, { FC } from 'react'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface IProps {
    className?: string
}

const Logo: FC<IProps> = ({ className }) => {
    return (
        <Link href="/" className={cn('text-2xl font-medium', className)}>
            ARIS
        </Link>
    )
}

export default Logo

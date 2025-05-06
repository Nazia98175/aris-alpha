import React, { FC } from 'react'

import { cn } from '@/lib/utils'

interface IProps {
    className?: string
    children?: React.ReactNode
}

const Container: FC<IProps> = ({ className, children }) => {
    return <div className={cn('mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 sm:py-20', className)}>{children}</div>
}

export default Container

import React, { FC } from 'react'

import { cn } from '@/lib/utils'

type IProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    className?: string
    children?: React.ReactNode
}

const Container: FC<IProps> = ({ className, children, ...props }) => {
    return (
        <div {...props} className={cn('mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 sm:py-20', className)}>
            {children}
        </div>
    )
}

export default Container

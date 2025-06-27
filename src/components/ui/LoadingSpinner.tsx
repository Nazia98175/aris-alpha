import React, { type FC } from 'react'

import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IProps {
    className?: string
}

const LoadingSpinner: FC<IProps> = ({ className }) => {
    return <Loader2 className={cn('size-4 animate-spin', className)} />
}

export default LoadingSpinner

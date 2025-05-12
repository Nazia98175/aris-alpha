import { Loader2 } from 'lucide-react'

import { Button, type ButtonProps } from '@/components/ui/button'

import { type FC } from 'react'
import { cn } from '@/lib/utils'

type IProps = ButtonProps & {
    children?: React.ReactNode
    className?: string
    loading?: boolean
    disabled?: boolean
}
const LoadingButton: FC<IProps> = ({ children, className, loading, disabled, ...props }) => {
    return (
        <Button disabled={disabled || loading} className={cn('', className)} {...props}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </Button>
    )
}

export default LoadingButton

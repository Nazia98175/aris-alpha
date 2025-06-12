'use client'

import { useState } from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../form'
import { Input } from '../input'
import { cn } from '@/lib/utils'
import { type Path, type Control, type FieldValues } from 'react-hook-form'
import { Eye, EyeOff } from 'lucide-react'

type IProps<T extends FieldValues> = {
    name: Path<T>
    control: Control<T>
    helpText?: string
    label?: string
    disabled?: boolean
    className?: string
    placeholder?: string
    inputClassName?: string
    labelClassName?: string
    startIcon?: React.ReactNode
}

const FormPasswordInput = <T extends FieldValues>({
    name,
    label,
    placeholder,
    control,
    className,
    disabled,
    helpText,
    inputClassName,
    labelClassName,
    startIcon,
}: IProps<T>) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn(className)}>
                    {label && <FormLabel className={cn('', labelClassName)}>{label}</FormLabel>}
                    <FormControl>
                        <div className="relative w-full">
                            <Input
                                placeholder={placeholder}
                                disabled={disabled}
                                type={showPassword ? 'text' : 'password'}
                                {...field}
                                onChange={(e) => {
                                    field.onChange(e.target.value)
                                }}
                                className={cn('pr-12', startIcon && 'pl-12', inputClassName)}
                            />
                            <div className="absolute top-1/2 right-4 -translate-y-1/2 transform cursor-pointer [&>*:first-child]:size-5 [&>*:first-child]:text-[#4d4d4d]">
                                {!showPassword ? (
                                    <EyeOff onClick={handleShowPassword} className="cursor-pointer" />
                                ) : (
                                    <Eye onClick={handleShowPassword} className="cursor-pointer" />
                                )}
                            </div>
                            {startIcon ? (
                                <div className="absolute top-1/2 left-4 -translate-y-1/2 transform [&>*:first-child]:size-5 [&>*:first-child]:text-[#4d4d4d]">
                                    {startIcon}
                                </div>
                            ) : null}
                        </div>
                    </FormControl>
                    {helpText && <FormDescription>{helpText}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default FormPasswordInput

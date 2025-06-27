'use client'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../Form'
import { Input } from '../Input'
import { cn } from '@/lib/utils'
import { type Path, type Control, type FieldValues } from 'react-hook-form'

type IProps<T extends FieldValues> = React.InputHTMLAttributes<HTMLInputElement> & {
    name: Path<T>
    control: Control<T>
    helpText?: string
    label?: string
    disabled?: boolean
    className?: string
    inputClassName?: string
    labelClassName?: string
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
}

const FormInput = <T extends FieldValues>({
    name,
    label,
    placeholder,
    control,
    className,
    disabled,
    helpText,
    inputClassName,
    startIcon,
    onChange,
    labelClassName,
    endIcon,
    ...props
}: IProps<T>) => {
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
                                {...field}
                                onChange={(e) => {
                                    const value = props.type === 'email' ? e.target.value.toLowerCase() : e.target.value
                                    field.onChange(value)

                                    if (onChange) onChange(e)
                                }}
                                className={cn(
                                    '',
                                    Boolean(startIcon) && 'pl-12',
                                    Boolean(endIcon) && 'pr-12',
                                    inputClassName,
                                )}
                                {...props}
                            />
                            {startIcon ? (
                                <div className="absolute top-1/2 left-4 -translate-y-1/2 transform [&>*:first-child]:size-5 [&>*:first-child]:text-[#010101]">
                                    {startIcon}
                                </div>
                            ) : null}
                            {endIcon ? (
                                <div className="[&>*:first-child]:text-muted-foreground absolute top-1/2 right-4 -translate-y-1/2 transform [&>*:first-child]:size-5">
                                    {endIcon}
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

export default FormInput

'use client'

import { LockKeyhole, Mail } from 'lucide-react'
import { LoginFormValues, loginFormSchema } from '@/valitdators/auth'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '../ui/button'
import { Form } from '../ui/form'
import FormInput from '../ui/form/form-input'
import FormPasswordInput from '../ui/form/form-password-input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

const LoginForm = () => {
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const handleSubmit: SubmitHandler<LoginFormValues> = (values) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="relative flex w-full flex-col gap-3 rounded-lg border border-white/5 bg-white/10 p-6 sm:gap-6 sm:rounded-xl sm:p-12"
            >
                <h1 className="mb-1.5 text-center text-xl font-semibold sm:mb-3 sm:text-4xl">Log In to Your Account</h1>
                <FormInput
                    control={form.control}
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Email"
                    startIcon={<Mail />}
                />
                <FormPasswordInput
                    control={form.control}
                    name="password"
                    label="Password"
                    placeholder="Password"
                    startIcon={<LockKeyhole />}
                />

                <div className="space-y-2">
                    <Button variant="plain" className="w-full" size="lg">
                        Login
                    </Button>
                </div>

                <p className="text-center text-xs font-normal sm:text-base">
                    {"Didn't"} have an account?{' '}
                    <Link href="/signup" className="text-primary font-medium">
                        Signup
                    </Link>
                </p>

                <div className="absolute right-0 bottom-0 left-0 -z-10 h-[150px] sm:h-[200px]">
                    <div className="relative size-full">
                        <Image alt="dots" src="/assets/backgrounds/dots.png" fill />
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default LoginForm

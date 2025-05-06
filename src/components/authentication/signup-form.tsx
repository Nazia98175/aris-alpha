'use client'

import { LockKeyhole, Mail, UserPlus } from 'lucide-react'
import { SignupFormValues, signupFormSchema } from '@/valitdators/auth'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '../ui/button'
import { Form } from '../ui/form'
import FormInput from '../ui/form/form-input'
import FormPasswordInput from '../ui/form/form-password-input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

const SignupForm = () => {
    const form = useForm<SignupFormValues>({
        resolver: zodResolver(signupFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
    })

    const handleSubmit: SubmitHandler<SignupFormValues> = (values) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="relative flex w-full flex-col gap-3 rounded-lg border border-white/5 bg-white/10 p-6 sm:gap-6 sm:rounded-xl sm:p-12"
            >
                <h1 className="mb-1.5 text-center text-xl font-semibold sm:mb-3 sm:text-4xl">Get Started for Free</h1>
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-6">
                    <FormInput
                        control={form.control}
                        name="firstName"
                        label="First Name"
                        placeholder="First Name"
                        startIcon={<UserPlus />}
                    />
                    <FormInput
                        control={form.control}
                        name="lastName"
                        label="Last Name"
                        placeholder="Last Name"
                        startIcon={<UserPlus />}
                    />
                </div>
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
                    helpText="Minimum length is 8 characters."
                />

                <div className="space-y-2">
                    <Button variant="plain" className="w-full" size="lg">
                        Sign Up
                    </Button>

                    <p className="text-muted-foreground text-xs font-normal sm:text-sm">
                        By creating an account, you agree to the Terms of Service. {"We'll"} occasionally send you
                        account-related emails.
                    </p>
                </div>

                <p className="text-center text-xs font-normal sm:text-base">
                    Already have an account?{' '}
                    <Link href="/login" className="text-primary font-medium">
                        Login
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

export default SignupForm

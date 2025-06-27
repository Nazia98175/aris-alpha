'use client'

import { ArrowLeft, LockKeyhole, Mail, UserPlus } from 'lucide-react'
import { SignupFormValues, signupFormSchema } from '@/valitdators/auth'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Form } from '../ui/Form'
import FormInput from '../ui/form/FormInput'
import FormPasswordInput from '../ui/form/FormPasswordInput'
import Image from 'next/image'
import Link from 'next/link'
import LoadingButton from '../ui/LoadingButton'
import React from 'react'
import { supabase } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
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

    const router = useRouter()

    const signupMutation = useMutation({
        mutationKey: ['signup'],
        mutationFn: async (values: SignupFormValues) => {
            const { data: existingUser } = await supabase
                .from('users')
                .select('id')
                .eq('email', values.email)
                .maybeSingle()
            if (existingUser?.id) throw new Error('User already exist with same email')

            const { error } = await supabase.auth.signUp({ email: values.email, password: values.password })
            if (error) throw new Error('Something went wrong while creating account. Please try again later')

            await supabase
                .from('users')
                .insert({ first_name: values.firstName, last_name: values.lastName, email: values.email })

            router.push('/dashboard')
        },
    })

    const handleSubmit: SubmitHandler<SignupFormValues> = (values) => {
        toast.promise(signupMutation.mutateAsync(values), {
            loading: 'Creating account...',
            success: 'Account is created successfully',
            error: (err: Error) => err?.message || `Oops! Something went wrong`,
        })
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="relative flex w-full flex-col gap-3 rounded-lg border border-white/5 bg-white/10 p-6 sm:gap-6 sm:rounded-xl sm:p-12"
            >
                <Link href="/" className="text-muted-foreground flex items-center gap-2 text-sm">
                    <ArrowLeft className="size-4" /> Back to Website
                </Link>
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
                    <LoadingButton loading={signupMutation.isPending} variant="plain" className="w-full" size="lg">
                        Sign Up
                    </LoadingButton>

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

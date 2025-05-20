'use client'

import { ArrowLeft, LockKeyhole, Mail } from 'lucide-react'
import { LoginFormValues, loginFormSchema } from '@/valitdators/auth'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Form } from '../ui/form'
import FormInput from '../ui/form/form-input'
import FormPasswordInput from '../ui/form/form-password-input'
import Image from 'next/image'
import Link from 'next/link'
import LoadingButton from '../ui/loading-button'
import { supabase } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

const LoginForm = () => {
    const [loading, setLoading] = useState(false)
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const router = useRouter()

    const handleSubmit: SubmitHandler<LoginFormValues> = (values) => {
        toast.promise(
            async () => {
                setLoading(true)
                const { error } = await supabase.auth.signInWithPassword(values)
                if (error) throw new Error('Unable to log in. Please ensure your email and password are correct.')
                router.push('/dashboard')
            },
            {
                loading: 'Logging in... Please wait.',
                success: 'You have successfully logged in!',
                error: (err: Error) => {
                    setLoading(false)
                    return err?.message || `Oops! Something went wrong`
                },
            },
        )
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
                    <LoadingButton type="submit" loading={loading} variant="plain" className="w-full" size="lg">
                        Login
                    </LoadingButton>
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

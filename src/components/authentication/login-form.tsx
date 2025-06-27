'use client'

import { ArrowLeft, Lock, Mail } from 'lucide-react'
import { LoginFormValues, loginFormSchema } from '@/valitdators/auth'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Form } from '../ui/Form'
import FormInput from '../ui/form/FormInput'
import FormPasswordInput from '../ui/form/FormPasswordInput'
import Link from 'next/link'
import CommonBtn from '../ui/CommonBtn'
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
        <div>
            <Link
                href="/"
                className="group flex w-fit items-center gap-2 text-sm text-[#FAFAFA] duration-300 hover:text-[#0D00FF] xl:text-lg"
            >
                <span className="duration-300 group-hover:-translate-x-1">
                    <ArrowLeft className="size-5" />
                </span>
                Back to Website
            </Link>
            <h2 className="my-6 text-center text-2xl leading-[120%] font-bold text-white lg:text-4xl xl:text-[48px]">
                Log In to your Account
            </h2>

            <div className="rounded-xl sm:rounded-2xl bg-white px-4 sm:px-10 py-5 sm:py-8 shadow-2xl md:px-16">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3 sm:space-y-6">
                        <div className="space-y-2">
                            <label className="mb-2 sm:mb-3 block text-sm font-semibold text-[#010101] xl:text-lg">Email*</label>
                            <FormInput
                                control={form.control}
                                type="email"
                                name="email"
                                placeholder="Email"
                                startIcon={<Mail className="text-[#010101]" />}
                                className="border-black text-[#010101]"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="mb-2 sm:mb-3 block text-sm font-semibold text-[#010101] xl:text-lg">
                                Password*
                            </label>
                            <FormPasswordInput
                                control={form.control}
                                name="password"
                                startIcon={<Lock className="text-[#010101]" />}
                                placeholder="Password"
                                className="border-black text-[#010101]"
                            />
                        </div>

                        <CommonBtn
                            type="submit"
                            loading={loading}
                            btnText="Login"
                            variant="secondary"
                            className="mt-4 sm:mt-10 sm:h-[61px] w-full !rounded-[10px] font-semibold text-[#FCFCFC] hover:text-[#010101] xl:!text-lg"
                        />

                        <p className="pt-2 text-center text-base leading-[110%] text-[#010101] xl:text-xl">
                            Don&apos;t have an account?{' '}
                            <Link href="/onboarding" className="font-medium text-blue-600 hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default LoginForm

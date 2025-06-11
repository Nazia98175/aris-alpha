'use client'
import { supabase } from '@/lib/supabase/client'
import { SignupFormOnBoardValues } from '@/valitdators/auth'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { ArrowIcon, ListItem, TickIcon } from './Icons'

const ReadyToFilter = () => {
    const router = useRouter()
    const [formData, setformData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        subscribedToUpdates: false,
    })

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    })

    const [onboardData, setOnboardData] = useState<{ [key: string]: string[] } | null>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setformData((prev) => ({ ...prev, [name]: value }))

        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: '' }))
        }
    }

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setformData((prev) => ({ ...prev, subscribedToUpdates: e.target.checked }))
    }

    const validateForm = () => {
        let valid = true
        const newErrors = { email: '', password: '', firstName: '', lastName: '' }

        if (!formData.email) {
            newErrors.email = 'Email is required'
            valid = false
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
            valid = false
        }

        if (!formData.password) {
            newErrors.password = 'Password is required'
            valid = false
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long'
            valid = false
        }
        if (!formData.firstName) {
            newErrors.firstName = 'First name is required'
            valid = false
        }
        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required'
            valid = false
        }
        setErrors(newErrors)
        return valid
    }

    const signupOnBoardMutation = useMutation({
        mutationKey: ['signup-onboard'],
        mutationFn: async (values: SignupFormOnBoardValues) => {
            const { data: existingUser } = await supabase
                .from('users')
                .select('id')
                .eq('email', values.email)
                .maybeSingle()
            if (existingUser?.id) throw new Error('User already exist with same email')

            const { error } = await supabase.auth.signUp({ email: values.email, password: values.password })
            if (error) throw new Error('Something went wrong while creating account. Please try again later')
            if (values.subscribedToUpdates) {
                await supabase.from('subscribers').insert({ email: values.email })
            }
            const newUser = await supabase
                .from('users')
                .insert({
                    first_name: values.firstName,
                    last_name: values.lastName,
                    email: values.email,
                    isOnBoarded: true,
                })
                .select('id')
                .maybeSingle()
            if (!newUser?.data?.id) {
                throw new Error('Something went wrong while creating user. Please try again later')
            }

            await supabase.from('onboarding').insert({
                user_id: newUser.data.id,
                cutNoise: JSON.stringify(values.cutNoise),
                mainObjective: JSON.stringify(values.mainObjective),
                focusYourFeed: JSON.stringify(values.focusYourFeed),
                strategyFeed: JSON.stringify(values.strategyFeed),
                takeAction: JSON.stringify(values.takeAction),
            })

            router.push('/dashboard')
        },
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateForm()) {
            return
        }
        if (!onboardData) {
            toast.error('Onboarding data not found')
            return
        }
        const payload = {
            ...formData,
            cutNoise: onboardData.cutNoise || [],
            takeAction: onboardData.takeAction || [],
            mainObjective: onboardData.mainObjective || [],
            focusYourFeed: onboardData.focusYourFeed || [],
            strategyFeed: onboardData.strategyFeed || [],
        }
        toast.promise(signupOnBoardMutation.mutateAsync(payload), {
            loading: 'Creating account...',
            success: 'Account is created successfully. Redirecting...',
            error: (err: Error) => err?.message || `Oops! Something went wrong`,
        })
    }

    const listItems = [
        { label: 'Built by traders, not marketers' },
        { label: 'Fast, focused, frictionless' },
        { label: 'Join other tactical investors' },
    ]

    useEffect(() => {
        if (typeof window !== 'undefined') {
            //Get Data from session storage
            const data = sessionStorage.getItem('onBoardData')
            if (data) {
                setOnboardData(JSON.parse(data))
            } else {
                //If no data, redirect to onboarding
                window.location.href = '/onboarding'
            }
        }
    }, [])
    return (
        <section className="mx-auto my-10 flex w-full max-w-[589px] flex-col items-center justify-center px-4 text-white">
            <h1 className="mx-auto mb-5 w-fit text-center text-4xl leading-[120%] text-white md:text-5xl lg:mb-8 xl:text-[64px]">
                Get Real-Time Signals. Unlock Your Dashboard.
            </h1>
            <p className="mb-8 text-center text-base leading-[150%] font-medium text-white/70 sm:mb-7 md:mb-10 md:text-lg lg:mb-14 lg:text-xl">
                Create your free account to access live tactical signals and personalized strategy. Cancel anytime.
            </p>

            <div className="w-full rounded-xl border border-[#2A64F6] bg-[#FCF6F1] px-3 py-4 text-[#010101] backdrop-blur-[10px] sm:rounded-2xl md:p-4 lg:rounded-4xl lg:p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="firstName" className="mb-1 block text-sm font-medium">
                            Firstname<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            value={formData.firstName}
                            name="firstName"
                            onChange={handleInputChange}
                            placeholder="Enter First name"
                            className={`h-[45px] w-full rounded-4xl border ${errors.firstName ? 'border-red-500' : 'border-[#D0D0D0]'} p-5 text-base backdrop-blur-sm placeholder:text-[#666361] focus:ring-2 focus:ring-[#2A64F6] focus:outline-none md:h-[63px]`}
                        />
                        {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label htmlFor="lastName" className="mb-1 block text-sm font-medium">
                            Last Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            value={formData.lastName}
                            name="lastName"
                            onChange={handleInputChange}
                            placeholder="Enter Last Name"
                            className={`h-[45px] w-full rounded-4xl border ${errors.lastName ? 'border-red-500' : 'border-[#D0D0D0]'} p-5 text-base backdrop-blur-sm placeholder:text-[#666361] focus:ring-2 focus:ring-[#2A64F6] focus:outline-none md:h-[63px]`}
                        />
                        {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium">
                            Email<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={formData.email}
                            name="email"
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className={`h-[45px] w-full rounded-4xl border ${errors.email ? 'border-red-500' : 'border-[#D0D0D0]'} p-5 text-base backdrop-blur-sm placeholder:text-[#666361] focus:ring-2 focus:ring-[#2A64F6] focus:outline-none md:h-[63px]`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="mb-1 block text-sm font-medium">
                            Password<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Create a password (min 8 characters)"
                            className={`h-[45px] w-full rounded-4xl border ${errors.password ? 'border-red-500' : 'border-[#D0D0D0]'} p-5 text-base backdrop-blur-sm placeholder:text-[#666361] focus:ring-2 focus:ring-[#2A64F6] focus:outline-none md:h-[63px]`}
                        />
                        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                    </div>

                    <div className="">
                        <label
                            htmlFor="updates"
                            className="flex cursor-pointer items-center gap-2 text-sm text-[#010101] sm:gap-2"
                        >
                            <input
                                id="updates"
                                type="checkbox"
                                checked={formData.subscribedToUpdates}
                                onChange={handleCheckboxChange}
                                className="peer sr-only"
                            />

                            <div className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-[3px] border border-[#C5C5C5] bg-white transition-colors peer-checked:border-[#2A64F6] peer-checked:bg-[#2A64F6] sm:h-5 sm:w-5">
                                <TickIcon />
                            </div>
                            <span className="text-xs font-medium sm:text-sm md:text-base">
                                Send me weekly market updates{' '}
                                <span className="font-light italic opacity-70">(Optional)</span>
                            </span>
                        </label>
                        {/* <span className="text-xs font-medium sm:text-sm md:text-base">
                            Send me weekly market updates{' '}
                            <span className="font-light italic opacity-70">(Optional)</span>
                        </span> */}
                    </div>

                    <button
                        type="submit"
                        className="flex h-[45px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[40px] border border-[#2A64F6] bg-[#2A64F6] text-base text-white shadow-[0px_0px_10px_0px_rgba(119,68,255,0.70)] transition-all duration-300 hover:bg-transparent hover:text-[#2A64F6] md:h-[63px]"
                    >
                        Create Account <span className="max-sm:hidden">& View Dashboard</span>
                        <span className="rotate-180">
                            <ArrowIcon />
                        </span>
                    </button>

                    {/* Added microcopy below the button */}
                    <div className="text-center text-xs text-[#666361]">
                        <p>No payment required. Your dashboard unlocks after signup.</p>
                        <p className="mt-1">
                            Already have an account?{' '}
                            <Link href="/login" className="text-[#2A64F6] underline">
                                Log in here
                            </Link>
                        </p>
                    </div>
                </form>

                <ul className="mt-6 space-y-2 text-sm lg:text-base">
                    {listItems.map((list, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="opacity-70">
                                <ListItem />
                            </span>
                            {list.label}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ReadyToFilter

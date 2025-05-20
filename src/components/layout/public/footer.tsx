'use client'

import { Mail, MapPin } from 'lucide-react'
import { WaitListFormValues, waitListFormSchema } from '@/valitdators/waitlist'
import { navLinks, supportLinks } from '@/data/nav-links'

import Container from '@/components/ui/container'
import { Form } from '@/components/ui/form'
import FormInput from '@/components/ui/form/form-input'
import Link from 'next/link'
import LoadingButton from '@/components/ui/loading-button'
import Logo from '@/components/ui/logo'
import { MutationKeys } from '@/types'
import React from 'react'
import { supabase } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'

const Footer = () => {
    const form = useForm<WaitListFormValues>({
        resolver: zodResolver(waitListFormSchema),
        defaultValues: { email: '' },
    })

    const joinWaitlistMutation = useMutation({
        mutationKey: [MutationKeys.join_waitlist],
        mutationFn: async (values: WaitListFormValues) => {
            const { data: existingJoinListUser } = await supabase
                .from('waitlists')
                .select('id')
                .eq('email', values.email)
                .maybeSingle()

            if (existingJoinListUser?.id) {
                throw new Error("You're already on the waitlist.")
            }

            const { error } = await supabase.from('waitlists').insert({ email: values.email })

            if (error) {
                throw new Error('Something went wrong. Please try again.')
            }
        },

        onSuccess: () => {
            toast.success("You've been added to the waitlist!")
        },
    })

    return (
        <div className="border-t-2 border-t-white/15 pt-10 pb-4 sm:pt-24">
            <Container className="flex flex-col gap-4 py-0 sm:grid-cols-4 sm:gap-8 sm:py-0">
                <div className="grid grid-cols-2 gap-6 py-0 sm:grid-cols-4 sm:gap-4 sm:py-0">
                    <div className="col-span-2 flex flex-col gap-2 sm:col-span-1 sm:gap-4">
                        <Logo />
                        <p className="text-muted-foreground text-xs font-normal sm:text-base">
                            Empower your business with aris, the ultimate AI-driven SaaS platform designed to automate
                        </p>
                    </div>
                    <div className="col-span-1">
                        <ul className="flex flex-col space-y-2 sm:space-y-4">
                            <li className="text-sm font-medium sm:text-lg">Company</li>
                            {navLinks.map((link) => (
                                <li key={link.href} className="text-muted-foreground text-sm sm:text-lg">
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <ul className="flex flex-col space-y-2 sm:space-y-4">
                            <li className="text-sm font-medium sm:text-lg">Support</li>
                            {supportLinks.map((link) => (
                                <li key={link.href} className="text-muted-foreground text-sm sm:text-lg">
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-2 flex flex-col gap-2 sm:col-span-1 sm:gap-4">
                        <h6 className="text-sm font-medium sm:text-lg">Join the waitlist!</h6>
                        <div className="flex flex-col gap-2">
                            <Form {...form}>
                                <FormInput
                                    control={form.control}
                                    name="email"
                                    type="email"
                                    label="Your Email"
                                    inputClassName="placeholder:text-muted-foreground rounded-md border border-white/10 bg-white/10 p-3 text-xs focus:outline-none"
                                    placeholder="Your email"
                                />
                            </Form>
                        </div>
                        <LoadingButton
                            loading={joinWaitlistMutation.isPending}
                            variant="plain"
                            className="w-fit"
                            onClick={form.handleSubmit((values) => joinWaitlistMutation.mutate(values))}
                        >
                            Submit
                        </LoadingButton>
                    </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                    <div className="h-0.5 w-full bg-white/15" />
                    <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-6 sm:gap-4">
                        <div className="flex items-start gap-2">
                            <MapPin className="text-primary size-5 shrink-0" />
                            <p className="text-muted-foreground text-xs font-light sm:text-base">
                                30 Wall Street, 8th Floor, New York City, NY 10005
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <Mail className="text-primary size-5 shrink-0" />
                            <a
                                href="mailto:support@ariscg.com"
                                className="text-muted-foreground text-xs font-light sm:text-base"
                            >
                                support@ariscg.com
                            </a>
                        </div>
                    </div>
                </div>

                <p className="text-muted-foreground text-center text-xs font-normal sm:text-base">
                    Copyright © {new Date().getFullYear()} • ARIS.
                </p>
            </Container>
        </div>
    )
}

export default Footer

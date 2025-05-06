import { Mail, MapPin, PhoneCall } from 'lucide-react'
import { navLinks, supportLinks } from '@/data/nav-links'

import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import Link from 'next/link'
import Logo from '@/components/ui/logo'
import React from 'react'

const Footer = () => {
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
                            <label htmlFor="email" className="text-sm font-normal text-white/65 sm:text-base">
                                Your Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="placeholder:text-muted-foreground rounded-md border border-white/10 bg-white/10 p-3 text-xs focus:outline-none"
                                placeholder="Your email"
                            />
                        </div>
                        <Button variant="plain" className="w-fit">
                            Submit
                        </Button>
                    </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                    <div className="h-0.5 w-full bg-white/15" />
                    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
                        <div className="flex items-start gap-2">
                            <MapPin className="text-primary size-5 shrink-0" />
                            <p className="text-muted-foreground text-xs font-light sm:text-base">
                                123 AI Innovation Street, San Francisco, CA 94107, USA
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <Mail className="text-primary size-5 shrink-0" />
                            <a
                                href="mailto:suppor@arissolutions.com"
                                className="text-muted-foreground text-xs font-light sm:text-base"
                            >
                                suppor@arissolutions.com
                            </a>
                        </div>
                        <div className="flex items-start gap-2">
                            <PhoneCall className="text-primary size-5 shrink-0" />
                            <a href="tel:0000000000" className="text-muted-foreground text-xs font-light sm:text-base">
                                +1 (415) 123-4567
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

import { Mail, MapPin } from 'lucide-react'
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
                <div className="grid grid-cols-2 gap-6 py-0 sm:grid-cols-3 sm:gap-4 sm:py-0">
                    <div className="col-span-2 flex flex-col gap-2 sm:col-span-1 sm:gap-4">
                        <Logo />
                        <p className="text-muted-foreground max-w-60 text-xs font-normal sm:text-base">
                            Know What to Do Next — With Confidence
                        </p>
                        <Link href="/signup">
                            <Button variant="plain" size="lg" className="w-fit">
                                See Live Signals Now
                            </Button>
                        </Link>
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

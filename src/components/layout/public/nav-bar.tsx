'use client'

import React, { useRef } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'

import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import Link from 'next/link'
import Logo from '@/components/ui/logo'
import { Menu } from 'lucide-react'
import { navLinks } from '@/data/nav-links'

const Navbar = () => {
    const closeRef = useRef<HTMLButtonElement>(null)

    const handleNavClick = (href: string) => (e: React.MouseEvent) => {
        e.preventDefault() // prevent default anchor behavior
        closeRef.current?.click()

        setTimeout(() => {
            const id = href.replace('#', '')
            const el = document.getElementById(id)
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }, 400)
    }

    return (
        <div className="px-4 pt-4 sm:px-8 sm:pt-8">
            <Container className="flex items-center justify-between gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-md sm:px-4 sm:py-2">
                <div className="flex items-center gap-4">
                    <Sheet>
                        <SheetTrigger asChild className="sm:hidden">
                            <Button variant="ghost">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col justify-between">
                            <SheetHeader>
                                <SheetTitle>
                                    <Logo />
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-1 flex-col items-center justify-center gap-6">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.href}
                                        onClick={handleNavClick(link.href)}
                                        className="text-base font-normal"
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </div>

                            <SheetFooter>
                                <SheetClose asChild>
                                    <Link href="/signup">
                                        <Button variant="plain" className="w-full">
                                            Get Started
                                        </Button>
                                    </Link>
                                </SheetClose>
                            </SheetFooter>

                            <SheetClose ref={closeRef} className="hidden" />
                        </SheetContent>
                    </Sheet>
                    <Logo />
                </div>

                <div className="hidden w-full max-w-lg items-center justify-between gap-2 sm:flex">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-sm font-normal">
                            {link.label}
                        </Link>
                    ))}
                </div>

                <Link href="/signup">
                    <Button>Sign up</Button>
                </Link>
            </Container>
        </div>
    )
}

export default Navbar

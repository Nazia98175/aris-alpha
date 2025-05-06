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
import React from 'react'
import { navLinks } from '@/data/nav-links'

const Navbar = () => {
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
                                    <SheetClose key={link.href} asChild>
                                        <Link href={link.href} className="text-base font-normal">
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </div>

                            <SheetFooter>
                                <SheetClose asChild>
                                    <Link href="/signup">
                                        <Button variant="plain">Get Started</Button>
                                    </Link>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                    <Logo />
                </div>

                <div className="hidden w-full max-w-md items-center justify-between gap-2 sm:flex">
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

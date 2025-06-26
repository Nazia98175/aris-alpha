'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { ContactIcon, GlobalIcon, MenuIcon } from './Icons'
import Dropdown from './Dropdown'

const OnboardHeader = () => {
    const [isGlobalOpen, setIsGlobalOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Example dropdown items for Global and Menu buttons
    const globalItems = [
        { label: 'English', href: '/lang/en' },
        { label: 'Hindi', href: '/lang/hi' },
        { label: 'Spanish', href: '/lang/es' },
    ]

    const menuItems = [
        { label: 'Contact Us', href: '/contact' },
        { label: 'About', href: '/about' },
        { label: 'Help', href: '/help' },
    ]

    return (
        <nav className="bg-background sticky top-0 z-30 h-16 sm:h-20 md:h-24 2xl:h-[110px]">
            <div className="custom-container relative flex h-full items-center justify-between">
                <Link className="inline-block text-2xl leading-[120%] sm:text-3xl md:text-[40px]" href={'/'}>
                    ARIS
                </Link>
                <div className="relative flex items-center gap-2.5 text-sm text-[#D0D0D0] sm:gap-3.5">
                    {/* Global Button + Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setIsGlobalOpen((prev) => !prev)
                                setIsMenuOpen(false)
                            }}
                            className="max-h-14 rounded-sm border border-[#2A64F6] p-1 shadow-[0px_0px_10px_0px_rgba(119,68,255,0.70)] duration-300 sm:rounded-lg sm:p-2 xl:rounded-[8px] xl:p-3"
                            aria-haspopup="true"
                            aria-expanded={isGlobalOpen}
                        >
                            <GlobalIcon className="h-6 w-6 xl:h-8 xl:w-8" />
                        </button>
                        <Dropdown
                            isOpen={isGlobalOpen}
                            onClose={() => setIsGlobalOpen(false)}
                            items={globalItems}
                            dropdownClassName="right-0"
                        />
                    </div>

                    {/* Menu + Contact Button + Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setIsMenuOpen((prev) => !prev)
                                setIsGlobalOpen(false)
                            }}
                            className="flex max-h-14 items-center gap-1.5 rounded-sm border border-[#2A64F6] p-1 shadow-[0px_0px_10px_0px_rgba(119,68,255,0.70)] duration-300 sm:gap-2 sm:rounded-lg sm:p-2 xl:rounded-[8px] xl:p-3 2xl:gap-3"
                            aria-haspopup="true"
                            aria-expanded={isMenuOpen}
                        >
                            <MenuIcon className="h-5 w-5 xl:h-6 xl:w-6" />
                            <ContactIcon className="h-6 w-6 xl:h-8 xl:w-8" />
                        </button>
                        <Dropdown
                            isOpen={isMenuOpen}
                            onClose={() => setIsMenuOpen(false)}
                            items={menuItems}
                            dropdownClassName="right-0"
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default OnboardHeader

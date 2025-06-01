'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    // Handle body overflow
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <>
            {/* Desktop Navbar - Hidden on mobile, visible from sm: breakpoint */}
            <nav className="hidden h-24 bg-[#010314] sm:block lg:h-[110px]">
                <div className="custom-container flex h-full items-center justify-between">
                    <Link className="inline-block text-3xl leading-[120%] md:text-[40px]" href={'/'}>
                        ARIS
                    </Link>
                    <div className="flex items-center gap-6 text-sm text-[#D0D0D0] md:text-base lg:gap-10">
                        <Link className="hover:text-primary duration-300" href={'/'}>
                            Learn More
                        </Link>
                        <Link className="hover:text-primary duration-300" href={'/'}>
                            About Us
                        </Link>
                        <Link className="hover:text-primary duration-300" href={'/'}>
                            Dash Board
                        </Link>
                    </div>
                    <button className="rounded-full border-[1.5px] border-[#2A64F6] px-6 py-3 text-sm shadow-[0px_0px_10px_0px_#2A64F6] duration-300 hover:bg-[#2A64F6] md:text-base lg:px-10 lg:py-[13px]">
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Mobile Navbar - Visible only on mobile */}
            <nav className="relative bg-[#010314] sm:hidden">
                <div className="flex h-20 items-center justify-between px-4">
                    <Link className="inline-block text-2xl leading-[120%]" href={'/'}>
                        ARIS
                    </Link>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="relative z-50 flex h-8 w-8 flex-col items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}
                        ></span>
                        <span
                            className={`my-1 block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
                        ></span>
                        <span
                            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
                        ></span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`bg-opacity-50 fixed inset-0 z-40 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                    onClick={closeMenu}
                ></div>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 z-40 h-full w-full max-w-[350px] transform bg-[#0A0B1E] transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="flex h-full flex-col px-6 pt-24">
                        {/* Menu Links */}
                        <div className="mb-12 flex flex-col gap-8">
                            <Link
                                className="border-b border-[#1A1B2E] pb-2 text-lg text-[#D0D0D0] duration-300 hover:text-[#2A64F6]"
                                href={'/'}
                                onClick={closeMenu}
                            >
                                Learn More
                            </Link>
                            <Link
                                className="border-b border-[#1A1B2E] pb-2 text-lg text-[#D0D0D0] duration-300 hover:text-[#2A64F6]"
                                href={'/'}
                                onClick={closeMenu}
                            >
                                About Us
                            </Link>
                            <Link
                                className="border-b border-[#1A1B2E] pb-2 text-lg text-[#D0D0D0] duration-300 hover:text-[#2A64F6]"
                                href={'/'}
                                onClick={closeMenu}
                            >
                                Dash Board
                            </Link>
                        </div>

                        {/* Get Started Button */}
                        <div className="flex grow flex-col justify-end">
                            <button className="mb-8 w-full rounded-full border-[1.5px] border-[#2A64F6] px-6 py-4 text-base shadow-[0px_0px_10px_0px_#2A64F6] duration-300 hover:bg-[#2A64F6]">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

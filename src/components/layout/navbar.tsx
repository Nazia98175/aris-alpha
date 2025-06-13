'use client'
import CommonBtn from '@/components/ui/common-btn'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    // Check authentication status with Supabase
    useEffect(() => {
        // Get initial auth state
        const checkUser = async () => {
            try {
                const {
                    data: { user },
                } = await supabase.auth.getUser()
                setUser(user)
            } catch (error) {
                console.error('Error checking auth status:', error)
            } finally {
                setLoading(false)
            }
        }

        checkUser()

        // Listen for auth state changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        })

        // Cleanup subscription
        return () => {
            subscription.unsubscribe()
        }
    }, [])

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
            <nav
                className={`fixed top-0 right-0 left-0 z-50 hidden h-24 bg-[#010314] transition-transform duration-300 sm:block lg:h-[110px]`}
            >
                <div className="custom-container flex h-full items-center justify-between">
                    <Link className="inline-block text-3xl leading-[120%] md:text-[40px]" href={'/'}>
                        ARIS
                    </Link>
                    <div className="flex items-center gap-6 text-sm text-[#D0D0D0] md:text-base lg:gap-10">
                        <Link className="hover:text-primary duration-300" href={'/onboarding'}>
                            Learn More
                        </Link>
                        <Link className="hover:text-primary duration-300" href={'#about-us'}>
                            About Us
                        </Link>
                        <Link className="hover:text-primary duration-300" href={'#dashboard'}>
                            Dashboard
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        {!loading &&
                            (user ? (
                                <CommonBtn
                                    btnText="My Dashboard"
                                    btnUrl="/dashboard"
                                    variant="primary"
                                    onClick={closeMenu}
                                />
                            ) : (
                                <CommonBtn btnText="Log In" btnUrl="/login" variant="primary" />
                            ))}
                        <CommonBtn btnText="Get Started" btnUrl="/onboarding" variant="secondary" />
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar - Visible only on mobile */}
            <nav className={`fixed top-0 right-0 left-0 z-50 bg-[#010314] transition-transform duration-300 sm:hidden`}>
                <div className="flex h-16 items-center justify-between px-4">
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
                    className={`bg-opacity-50 fixed inset-0 z-40 h-screen bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                    onClick={closeMenu}
                ></div>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 z-40 h-screen w-full max-w-[350px] transform bg-[#0A0B1E] transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="flex h-full flex-col p-6 pt-24">
                        {/* Menu Links */}
                        <div className="mb-12 flex flex-col gap-8">
                            <Link
                                className="border-b border-[#1A1B2E] pb-2 text-lg text-[#D0D0D0] duration-300 hover:text-[#2A64F6]"
                                href={'/onboarding'}
                                onClick={closeMenu}
                            >
                                Learn More
                            </Link>
                            <Link
                                className="border-b border-[#1A1B2E] pb-2 text-lg text-[#D0D0D0] duration-300 hover:text-[#2A64F6]"
                                href={'#about-us'}
                                onClick={closeMenu}
                            >
                                About Us
                            </Link>
                            <Link
                                className="border-b border-[#1A1B2E] pb-2 text-lg text-[#D0D0D0] duration-300 hover:text-[#2A64F6]"
                                href={'#dashboard'}
                                onClick={closeMenu}
                            >
                                Dash Board
                            </Link>
                        </div>

                        {/* Auth Button and Get Started Button */}
                        <div className="flex grow flex-col justify-end gap-4">
                            {!loading &&
                                (user ? (
                                    <CommonBtn
                                        btnText="My Dashboard"
                                        btnUrl="/dashboard"
                                        variant="primary"
                                        onClick={closeMenu}
                                    />
                                ) : (
                                    <CommonBtn onClick={closeMenu} btnText="Log In" btnUrl="/login" variant="primary" />
                                ))}
                            <CommonBtn btnText="Get Started" btnUrl="/onboarding" variant="secondary" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Spacer to prevent content from being hidden under fixed navbar */}
            <div className="h-16 sm:h-24 lg:h-[110px]"></div>
        </>
    )
}

export default Navbar

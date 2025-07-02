'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import TabNavigation from './TabNavigation'
import { supabase } from '@/lib/supabase/client'
import { LogoutIcon } from '../home/Icons'

export const Header = () => {
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
    const [userDropdownOpen, setUserDropdownOpen] = useState(false)
    const searchRef = useRef<HTMLDivElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setMobileSearchOpen(false)
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setUserDropdownOpen(false)
            }
        }
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMobileSearchOpen(false)
                setUserDropdownOpen(false)
            }
        }
        if (mobileSearchOpen || userDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            document.addEventListener('keydown', handleEscKey)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscKey)
        }
    }, [mobileSearchOpen, userDropdownOpen])

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) {
            console.error('Logout error:', error.message)
        } else {
            router.push('/login')
        }
    }

    return (
        <header className="bg-darkblack relative border-b border-white/[7%] px-4 py-3 sm:pb-4 md:pb-3 lg:px-6">
            <div className="mx-auto w-full max-w-[1920px]">
                <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 md:flex-nowrap">
                    <div className="flex w-fit max-w-full items-center justify-between md:w-[50%] lg:w-full">
                        <Link href="/">
                            <h1 className="text-custom-3xl md:!text-custom-4xl leading-[120%] font-normal text-white">
                                ARIS
                            </h1>
                        </Link>
                    </div>
                    <div className="hidden w-fit md:flex">
                        <TabNavigation />
                    </div>
                    <div className="flex w-fit items-center justify-center gap-4 whitespace-nowrap md:w-full lg:justify-end xl:gap-6">
                        <div className="relative" ref={dropdownRef}>
                            <div
                                className="flex cursor-pointer items-center gap-1 text-sm text-white transition-opacity hover:opacity-80 md:gap-2"
                                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                            >
                                <Image
                                    src="/assets/icons/avatar.svg"
                                    alt="User Avatar"
                                    width={24}
                                    height={24}
                                    className="rounded-full object-cover"
                                />
                                <div className="hidden leading-tight sm:block">
                                    <span className="block font-normal">James Raymond</span>
                                    <span className="text-grey text-xs">Account: 4453728992</span>
                                </div>
                                <svg
                                    className={`ml-1 hidden h-4 w-4 transition-transform sm:block ${userDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>

                            {/* Dropdown Menu */}
                            {userDropdownOpen && (
                                <div className="ring-opacity-5 absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-lg border border-white/[7%] bg-[#1a1a1a] shadow-lg ring-1 shadow-black/50 ring-black focus:outline-none">
                                    <div className="py-1">
                                        <div className="border-b border-white/[7%] px-4 py-3">
                                            <p className="text-sm font-medium text-white">James Raymond</p>
                                            <p className="text-grey mt-1 text-xs">Account: 4453728992</p>
                                        </div>
                                        <div className="mt-1">
                                            <button
                                                onClick={handleLogout}
                                                className="w-full px-4 py-2 text-left text-sm text-red-400 transition-colors hover:bg-white/[5%] hover:text-red-300"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <LogoutIcon/>
                                                    Logout
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex w-full justify-center md:hidden md:justify-start">
                        <TabNavigation />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

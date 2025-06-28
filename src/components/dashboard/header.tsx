'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { BellIcon } from '../home/Icons'
import TabNavigation from './TabNavigation'
import Link from 'next/link'

export const Header = () => {
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
    const searchRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setMobileSearchOpen(false)
            }
        }
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMobileSearchOpen(false)
            }
        }
        if (mobileSearchOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            document.addEventListener('keydown', handleEscKey)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscKey)
        }
    }, [mobileSearchOpen])

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
                        <div className="text-grey flex cursor-pointer items-center gap-2 text-sm">
                            <BellIcon />
                        </div>
                        <div className="bg-lightgrey hidden h-[15.03px] w-px md:block" />
                        <div className="flex cursor-pointer items-center gap-1 text-sm text-white md:gap-2">
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

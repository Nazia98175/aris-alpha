import Link from 'next/link'
import React from 'react'
import { ContactIcon, GlobalIcon, MenuIcon } from './Icons'

const OnboardHeader = () => {
    return (
        <nav className="sticky top-0 z-30 h-16 bg-[#000103] sm:h-20 md:h-24 2xl:h-[110px]">
            <div className="custom-container flex h-full items-center justify-between">
                <Link className="inline-block text-2xl leading-[120%] sm:text-3xl md:text-[40px]" href={'/'}>
                    ARIS
                </Link>
                <div className="flex items-center gap-2.5 text-sm text-[#D0D0D0] sm:gap-3.5">
                    <button className="max-h-14 rounded-sm border border-[#2A64F6] p-1 shadow-[0px_0px_10px_0px_rgba(119,68,255,0.70)] duration-300 sm:rounded-lg sm:p-2 xl:rounded-[8px] xl:p-3">
                        <GlobalIcon className="h-6 w-6 xl:h-8 xl:w-8" />
                    </button>
                    <button className="flex max-h-14 items-center gap-1.5 rounded-sm border border-[#2A64F6] p-1 shadow-[0px_0px_10px_0px_rgba(119,68,255,0.70)] duration-300 sm:gap-2 sm:rounded-lg sm:p-2 xl:rounded-[8px] xl:p-3 2xl:gap-3">
                        <MenuIcon className="h-5 w-5 xl:h-6 xl:w-6" />
                        <ContactIcon className="h-6 w-6 xl:h-8 xl:w-8" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default OnboardHeader

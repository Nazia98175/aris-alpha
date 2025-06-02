import Link from 'next/link'
import React from 'react'
import { ContactIcon, GlobalIcon, MenuIcon } from './Icons'

const OnboardHeader = () => {
    return (
        <nav className="h-20 sm:h-24 lg:h-[110px]">
            <div className="custom-container flex h-full items-center justify-between">
                <Link className="inline-block text-2xl leading-[120%] sm:text-3xl md:text-[40px]" href={'/'}>
                    ARIS
                </Link>
                <div className="flex items-center gap-2.5 text-sm text-[#D0D0D0] sm:gap-3.5">
                    <button className="rounded-xl border border-[#2A64F6] p-2 shadow-[0px_0px_10px_0px_rgba(119,68,255,0.70)] duration-300 hover:rounded-sm sm:p-3">
                        <MenuIcon />
                    </button>
                    <button className="flex items-center gap-2 rounded-xl border border-[#2A64F6] p-2 shadow-[0px_0px_10px_0px_rgba(119,68,255,0.70)] duration-300 hover:rounded-sm sm:gap-3 sm:p-3">
                        <GlobalIcon />
                        <ContactIcon />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default OnboardHeader

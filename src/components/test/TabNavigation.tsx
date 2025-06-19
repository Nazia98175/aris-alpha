'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileIcon, HomeIcon } from '../home/Icons'

const tabs = [
    { name: 'Overview', href: '/test/overview', icon: <HomeIcon />, width: 'w-[152px]' },
    { name: 'Account', href: '/test/account', icon: <FileIcon />, width: 'w-[145px]' },
]

const TabNavigation = () => {
    const pathname = usePathname()

    return (
        <div className="mt-6 flex max-w-full gap-2 md:gap-[14px]">
            {tabs.map((tab) => {
                const isActive = pathname === tab.href
                return (
                    <Link
                        key={tab.name}
                        href={tab.href}
                        className={`flex h-auto items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-medium transition-all duration-300 md:h-[50px] md:py-0 md:text-base ${tab.width} ${
                            isActive
                                ? 'bg-primaryblue text-white shadow-[0px_0px_10px_0px_#2A64F6]'
                                : 'bg-white/5 text-gray-300 hover:shadow-[0px_0px_10px_0px_#2A64F6]'
                        }`}
                    >
                        {tab.icon}
                        {tab.name}
                    </Link>
                )
            })}
        </div>
    )
}

export default TabNavigation

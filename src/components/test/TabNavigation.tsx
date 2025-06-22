'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileIcon, HomeIcon } from '../home/Icons'

const tabs = [
    {
        name: 'Overview',
        href: '/test/overview',
        icon: <HomeIcon />,
        width: 'w-[152px]', // Mobile → MD → Desktop
    },
    {
        name: 'Account',
        href: '/test/account',
        icon: <FileIcon />,
        width: 'w-[145px]',
    },
]

const TabNavigation = () => {
    const pathname = usePathname()

    return (
        <div className="ml-6 flex w-full flex-row justify-center gap-2 md:ml-0 md:gap-[14px]">
            {tabs.map((tab) => {
                const isActive = pathname === tab.href
                return (
                    <Link
                        key={tab.name}
                        href={tab.href}
                        className={`flex h-auto items-center justify-center gap-2 rounded-[10px] py-2 text-sm font-medium transition-all duration-300 md:px-3 md:py-2 md:text-base lg:h-[50px] lg:px-6 lg:py-3 ${tab.width} ${
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

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileIcon, HomeIcon } from '../home/Icons'

const tabs = [
    {
        name: 'Overview',
        href: '/overview',
        icon: <HomeIcon />,
        width: 'w-[152px]',
    },
    {
        name: 'Account',
        href: '/account',
        icon: <FileIcon />,
        width: 'w-[145px]',
    },
]

const TabNavigation = () => {
    const pathname = usePathname()

    return (
        <div className="mt-6 flex space-x-2">
            {tabs.map((tab) => {
                const isActive = pathname === tab.href

                return (
                    <Link
                        key={tab.name}
                        href={tab.href}
                        className={`flex h-[50px] items-center justify-center gap-2 rounded-[10px] px-6 text-sm font-medium transition-colors duration-200 ${tab.width} ${
                            isActive ? 'bg-[#2A64F6] text-white' : 'bg-white/5 text-gray-300 hover:bg-gray-700'
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

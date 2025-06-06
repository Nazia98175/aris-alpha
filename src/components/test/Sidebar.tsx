import Link from 'next/link'
import React from 'react'

interface SidebarProps {
    isOpen: boolean
    onToggle: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
    const menuItems = [
        { label: 'Dashboard', link: '' },
        { label: 'Institutional', link: '/institutional' },
        { label: 'Strategy', link: '/strategy' },
        { label: 'Product', link: '/product' },
        { label: 'Settings', link: '/settings' },
    ]

    return (
        <aside
            className={`fixed top-0 left-0 z-40 h-screen w-full transition-transform duration-300 ease-in-out lg:static ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} max-w-[350px] bg-[#202020] text-white lg:max-w-[240px]`}
        >
            <div className="p-4">
                <div className="mb-8 flex items-center justify-between lg:hidden">
                    <h1 className="text-xl font-bold">ARIS</h1>
                    <button onClick={onToggle}>close</button>
                </div>

                <nav>
                    {menuItems.map((obj, index) => (
                        <Link
                            key={index}
                            href={obj.link}
                            className="mb-2 flex cursor-pointer items-center gap-3.5 rounded p-3 hover:bg-gray-800"
                        >
                            <div className="h-4 w-4 rounded bg-gray-600"></div>
                            <span>{obj.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    )
}

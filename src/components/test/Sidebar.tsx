import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface SidebarProps {
    isOpen: boolean
    onToggle: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
    const pathname = usePathname()
    const menuItems = [
        { label: 'Dashboard', link: '/test' },
        { label: 'Institutional', link: '/' },
        { label: 'Strategy', link: '/' },
        { label: 'Product', link: '/' },
        { label: 'Settings', link: '/' },
    ]

    return (
        <aside
            className={`fixed top-0 left-0 z-40 h-screen w-full transition-transform duration-300 ease-in-out lg:static ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} bg-lightblack max-w-[350px] text-white lg:max-w-[240px]`}
        >
            <div className="p-4">
                <div className="mb-8 flex items-center justify-between lg:hidden">
                    <h1 className="text-xl font-bold">ARIS</h1>
                    <button onClick={onToggle}>close</button>
                </div>

                <nav>
                    {menuItems.map((obj, index) => {
                        const isActive = pathname === obj.link
                        return (
                            <Link
                                key={index}
                                href={obj.link}
                                className={` ${isActive ? 'bg-primaryblue' : ''} hover:bg-gray-800" mb-2 flex cursor-pointer items-center gap-3.5 rounded p-3`}
                            >
                                <div className="h-4 w-4 rounded bg-white"></div>
                                <span>{obj.label}</span>
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar

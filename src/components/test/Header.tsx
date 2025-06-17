'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface HeaderProps {
    onSidebarToggle: () => void
}

export const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const searchRef = useRef<HTMLDivElement>(null)

    const toggleSearch = () => setMobileSearchOpen(!mobileSearchOpen)

    const handleSearch = () => {
        if (searchValue.trim() === '') return
        console.log('Search triggered:', searchValue)
        setSearchValue('')
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleSearch()
        }
    }

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
        <header className="relative border-b border-gray-800 bg-[#121212] px-4 py-3 lg:px-6">
            {/* Mobile slide-down search */}
            <div
                ref={searchRef}
                className={`absolute top-full left-0 z-20 w-full transform bg-[#121212] px-4 py-3 transition-all duration-300 ease-in-out ${
                    mobileSearchOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-6 opacity-0'
                } lg:hidden`}
            >
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search..."
                    className="w-full rounded-md border border-gray-600 bg-[#1c1c1c] px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Left: Logo */}
                <div className="flex items-center gap-4">
                    <button onClick={onSidebarToggle} className="rounded p-1 hover:bg-gray-700 lg:hidden">
                        <div className="h-5 w-5 bg-gray-500" />
                    </button>
                    <h1 className="text-2xl font-bold text-white">ARIS</h1>
                </div>
                <div className="flex w-full max-w-4xl items-center justify-between whitespace-nowrap">
                    {/* Center: Search */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSearch()
                        }}
                        className="hidden w-full max-w-sm flex-grow lg:flex"
                    >
                        <div className="relative w-full">
                            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-white">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 1 1 1.414-1.414l4.387 4.387a1 1 0 0 1-1.414 1.414l-4.387-4.387zM14 8a6 6 0 1 0-12 0 6 6 0 0 0 12 0z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Search"
                                className="w-full rounded-full border border-gray-600 bg-[#1c1c1c] py-2 pr-4 pl-10 text-sm text-white placeholder-[#999999] focus:ring-1 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                    </form>
                    {/* Right: Status and profile */}
                    <div className="flex items-center gap-6 whitespace-nowrap">
                        <button
                            className="text-white hover:text-white lg:hidden"
                            onClick={toggleSearch}
                            aria-label="Toggle Search"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="white"
                                viewBox="0 0 24 24"
                            >
                                <path d="M10 2a8 8 0 0 1 6.32 12.906l4.387 4.387a1 1 0 0 1-1.414 1.414l-4.387-4.387A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />
                            </svg>
                        </button>

                        {/* Bell Icon */}
                        <div className="hidden items-center gap-2 text-sm text-[#999999] lg:flex">
                            <span className="relative">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.02852 12.6693H9.97252C9.89371 13.1353 9.65243 13.5583 9.29145 13.8634C8.93047 14.1684 8.47313 14.3358 8.00052 14.3358C7.5279 14.3358 7.07056 14.1684 6.70958 13.8634C6.34861 13.5583 6.10732 13.1353 6.02852 12.6693ZM8.00052 1.33594C9.3266 1.33594 10.5984 1.86272 11.5361 2.8004C12.4737 3.73809 13.0005 5.00986 13.0005 6.33594V9.0026L13.9459 11.1093C13.9888 11.2056 14.0071 11.3112 13.9989 11.4164C13.9907 11.5216 13.9564 11.623 13.899 11.7116C13.8417 11.8001 13.7631 11.8729 13.6705 11.9234C13.5778 11.9739 13.474 12.0004 13.3685 12.0006H2.63518C2.52954 12.0006 2.42558 11.9741 2.33276 11.9237C2.23995 11.8732 2.16123 11.8003 2.10378 11.7117C2.04633 11.623 2.01197 11.5214 2.00384 11.4161C1.9957 11.3107 2.01404 11.205 2.05718 11.1086L3.00052 9.00194V6.32727L3.00385 6.1606C3.04945 4.86584 3.59585 3.63932 4.52792 2.73946C5.45998 1.83961 6.70495 1.336 8.00052 1.33594Z"
                                        fill="#999999"
                                    />
                                </svg>
                            </span>
                            <div className="hidden flex-col leading-tight xl:flex">
                                <span className="text-xs font-normal text-[#999999]">Portfolio Balance</span>
                                <span className="text-sm font-normal text-white">$623,098.17</span>
                            </div>
                        </div>

                        {/* Available Funds */}
                        <div className="hidden flex-col text-sm leading-tight xl:flex">
                            <span className="text-xs font-normal text-[#999999]">Available Funds</span>
                            <span className="text-sm font-normal text-white">$122,912.50</span>
                        </div>

                        {/* Divider */}
                        <div className="hidden h-6 w-px bg-gray-700 xl:block" />

                        {/* Profile */}
                        <div className="hidden items-center gap-2 text-sm text-white xl:flex">
                            <Image
                                src="/assets/homepage/png/avatar.png"
                                alt="User Avatar"
                                width={32}
                                height={32}
                                className="rounded-full object-cover"
                            />
                            <div className="leading-tight">
                                <span className="block font-normal">James Raymond</span>
                                <span className="text-xs font-normal text-[#999999]">Account: 4453728992</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

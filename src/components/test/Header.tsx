'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import TabNavigation from './TabNavigation' // Adjust path if needed

export const Header = () => {
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const searchRef = useRef<HTMLDivElement>(null)

    // const toggleSearch = () => setMobileSearchOpen(!mobileSearchOpen)

    const handleSearch = () => {
        if (searchValue.trim() === '') return
        console.log('Search triggered:', searchValue)
        setSearchValue('')
    }

    // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //         e.preventDefault()
    //         handleSearch()
    //     }
    // }

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
        <header className="bg-darkblack relative border-b border-white/[7%] px-4 py-3 lg:px-6">
            <div className="mx-auto w-full max-w-[1920px]">
                {/* Mobile Search */}
                {/* 
                <div
                    ref={searchRef}
                    className={`bg-darkblack absolute top-full left-0 z-20 transform px-4 py-3 transition-all duration-300 ease-in-out lg:hidden ${
                        mobileSearchOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-6 opacity-0'
                    }`}
                >
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search..."
                        className="focus:border-primaryblue focus:ring-primaryblue border-lightsand bg-lightblack placeholder-grey w-full rounded-md border px-4 py-2 text-sm text-white focus:ring-1 focus:outline-none"
                    />
                </div> 
                */}

                <div className="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
                    {/* Logo and mobile controls */}
                    <div className="flex w-fit max-w-full items-center justify-between md:w-[50%] lg:w-full">
                        <h1 className="text-[28px] leading-[120%] font-normal text-white md:text-[36px] lg:text-[43.33px]">
                            ARIS
                        </h1>
                        {/* 
                        <div className="flex items-center gap-4 lg:hidden">
                            <button onClick={toggleSearch} aria-label="Toggle Search" className="text-white">
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
                        </div> */}
                    </div>

                    {/* Desktop Tab Navigation in place of search */}
                    <div className="hidden w-fit md:flex">
                        <TabNavigation />
                    </div>

                    {/* Right Section */}
                    <div className="flex w-fit items-center justify-center gap-4 whitespace-nowrap md:w-full lg:justify-end xl:gap-6">
                        <div className="text-grey flex cursor-pointer items-center gap-2 text-sm">
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

'use client'
import React, { useEffect, useRef, useState } from 'react'

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
        <header className="relative border-b border-gray-200 bg-[#202020] px-4 py-4 lg:px-6">
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
                    className="w-full rounded-md border border-gray-600 bg-[#121212] px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <div className="flex flex-row justify-between gap-4 lg:items-center">
                <div className="flex items-center justify-between gap-2 lg:justify-start">
                    <button onClick={onSidebarToggle} className="rounded p-1 hover:bg-gray-100 lg:hidden">
                        <div className="h-5 w-5 bg-gray-600" />
                    </button>
                    <h1 className="text-xl font-semibold text-white">ARIS</h1>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault() // Prevent form submission refreshing page
                        handleSearch()
                    }}
                    className="hidden w-full lg:block lg:max-w-md"
                >
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search..."
                        className="w-full rounded-md border border-gray-600 bg-[#121212] px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                </form>

                <div className="flex items-center gap-4">
                    <button
                        className="text-gray-300 hover:text-white lg:hidden"
                        onClick={toggleSearch}
                        aria-label="Toggle Search"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M6.66575 1.66675C7.59774 1.66671 8.51118 1.92716 9.30301 2.4187C10.0948 2.91024 10.7335 3.6133 11.147 4.44855C11.5604 5.2838 11.7322 6.21799 11.643 7.14569C11.5537 8.07339 11.2069 8.95767 10.6418 9.69875L13.8038 12.8621C13.9233 12.9821 13.9927 13.143 13.9979 13.3123C14.0031 13.4816 13.9436 13.6466 13.8316 13.7736C13.7196 13.9006 13.5634 13.9803 13.3948 13.9963C13.2262 14.0124 13.0577 13.9637 12.9238 13.8601L12.8611 13.8047L9.69775 10.6427C9.06642 11.1241 8.32953 11.4483 7.54805 11.5883C6.76657 11.7284 5.96297 11.6803 5.20375 11.4481C4.44453 11.216 3.75152 10.8063 3.18205 10.2531C2.61259 9.69991 2.18305 9.01905 1.92897 8.26687C1.67489 7.5147 1.60359 6.71283 1.72095 5.92762C1.83831 5.14241 2.14097 4.39644 2.60388 3.75143C3.06679 3.10642 3.67665 2.58092 4.38298 2.21841C5.08932 1.85589 5.87182 1.66679 6.66575 1.66675ZM6.66575 3.00008C5.69329 3.00008 4.76066 3.38639 4.07303 4.07402C3.38539 4.76166 2.99909 5.69429 2.99909 6.66675C2.99909 7.63921 3.38539 8.57184 4.07303 9.25947C4.76066 9.94711 5.69329 10.3334 6.66575 10.3334C7.63821 10.3334 8.57084 9.94711 9.25848 9.25947C9.94611 8.57184 10.3324 7.63921 10.3324 6.66675C10.3324 5.69429 9.94611 4.76166 9.25848 4.07402C8.57084 3.38639 7.63821 3.00008 6.66575 3.00008Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <div className="hidden text-sm text-gray-400 sm:block">Status indicators</div>
                    <div className="h-8 w-8 rounded-full bg-gray-400" />
                </div>
            </div>
        </header>
    )
}

export default Header

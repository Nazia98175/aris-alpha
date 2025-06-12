'use client'

import React, { useEffect, useRef } from 'react'

interface DropdownProps {
    isOpen: boolean
    onClose: () => void
    items: { label: string; href: string }[]
    className?: string
    dropdownClassName?: string
    listClassName?: string
    listItemClassName?: string
}

const Dropdown: React.FC<DropdownProps> = ({
    isOpen,
    onClose,
    items,
    className = '',
    dropdownClassName = '',
    listClassName = '',
    listItemClassName = '',
}) => {
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div ref={dropdownRef} className={`relative ${className}`}>
            <div
                className={`ring-opacity-5 absolute z-10 mt-2 w-28 overflow-hidden rounded-md bg-white font-medium text-[#010101] shadow-lg ring-1 ring-black ${dropdownClassName}`}
            >
                <ul className={` ${listClassName}`}>
                    {items.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className={`block px-4 py-2 duration-300 hover:bg-[#2A64F6] hover:text-white ${listItemClassName}`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Dropdown

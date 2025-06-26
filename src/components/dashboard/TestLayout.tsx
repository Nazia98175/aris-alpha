'use client'
import React from 'react'
import { Header } from './header'

interface LayoutProps {
    children: React.ReactNode
}

export const TestLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen flex-col overflow-hidden">
            <Header />
            <div className="bg-fadeblack flex h-[calc(100vh-60px)] flex-1">
                <main className="flex-1 overflow-auto pt-4 pb-[76px] md:py-6 px-3 md:px-4 lg:px-6">{children}</main>
            </div>
        </div>
    )
}

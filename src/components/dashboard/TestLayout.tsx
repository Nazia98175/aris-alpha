'use client'
import React from 'react'
import Header from './header'

interface LayoutProps {
    children: React.ReactNode
}

export const TestLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen flex-col overflow-hidden">
            <Header />
            <div className="bg-fadeblack flex h-[calc(100vh-60px)] flex-1">
                <main className="flex-1 overflow-auto px-3 pt-4 pb-[76px] md:px-4 md:py-6 lg:px-6">{children}</main>
            </div>
        </div>
    )
}

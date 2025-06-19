'use client'
import React from 'react'
import { Header } from './Header'

interface LayoutProps {
    children: React.ReactNode
}

export const TestLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen flex-col overflow-hidden">
            <Header />
            <div className="bg-fadeblack flex h-[calc(100vh-60px)] flex-1">
                <main className="flex-1 overflow-auto p-3 lg:p-6">{children}</main>
            </div>
        </div>
    )
}

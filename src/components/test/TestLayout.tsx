'use client'
import React, { useState } from 'react'
import { Header } from './Header'
import Sidebar from './Sidebar'

interface LayoutProps {
    children: React.ReactNode
}

export const TestLayout: React.FC<LayoutProps> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    // const toggleSidebar = () => {
    //     setSidebarOpen(!sidebarOpen)
    // }

    return (
        <div className="flex h-screen flex-col overflow-hidden">
            {/* {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/30 lg:hidden" onClick={toggleSidebar} />} */}
            <Header />
            <div className="bg-fadeblack flex h-[calc(100vh-60px)] flex-1">
                {/* <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} /> */}
                <main className="flex-1 overflow-auto p-4 lg:p-6">{children}</main>
            </div>
        </div>
    )
}

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'

import Link from 'next/link'
import Logo from '@/components/ui/logo'
import PortalSidebarFooter from './sidebar-footer'
import React from 'react'
import { dashboardLinks } from '@/data/nav-links'

const PortalSidebar = () => {
    return (
        <Sidebar variant="floating" fixedChildClassName="flex flex-col justify-between">
            <SidebarHeader>
                <Logo className="mx-auto text-white" />
            </SidebarHeader>

            <SidebarContent className="mt-8">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {dashboardLinks.map((link) => (
                                <SidebarMenuItem key={link.href}>
                                    <SidebarMenuButton
                                        className="bg-white/5 pl-5 text-white hover:bg-white/25 hover:text-white data-[active=true]:bg-white/5 data-[active=true]:text-white"
                                        size="lg"
                                        isActive
                                        asChild
                                    >
                                        <Link href={link.href} className="relative">
                                            <div className="bg-primary absolute top-1/2 right-0 h-[40%] w-0.5 -translate-y-1/2 transform" />
                                            <link.icon />
                                            {link.label}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <PortalSidebarFooter />
        </Sidebar>
    )
}

export default PortalSidebar

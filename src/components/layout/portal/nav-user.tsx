'use client'

import { Avatar, AvatarFallback } from '@/components/ui/Avatar'
import { ChevronDown, LogOut } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'

import React from 'react'
import { supabase } from '@/lib/supabase/client'
import { useAuth } from '@/hooks/use-auth'

const NavUser = () => {
    const { user } = useAuth()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        window.location.replace('/')
        if (sessionStorage.getItem('onBoardData')) {
            sessionStorage.removeItem('onBoardData')
        }
    }

    return (
        <div className="flex items-center gap-2">
            <Avatar className="sm:size-10">
                <AvatarFallback>
                    {user.first_name[0]}
                    {user.last_name[0]}
                </AvatarFallback>
            </Avatar>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2">
                    <span className="text-muted-foreground text-sm font-medium">
                        {user.first_name} {user.last_name}
                    </span>
                    <ChevronDown className="text-muted-foreground size-4" />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg">
                    <DropdownMenuLabel className="p-0 font-normal">
                        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                            <Avatar className="size-6">
                                <AvatarFallback>
                                    {user.first_name[0]}
                                    {user.last_name[0]}
                                </AvatarFallback>
                            </Avatar>

                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">
                                    {user.first_name} {user.last_name}
                                </span>
                                <span className="truncate text-xs">{user.email}</span>
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut />
                        Log out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default NavUser

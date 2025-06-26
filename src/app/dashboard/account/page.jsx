'use client'
import AccountContent from '@/components/dashboard/AccountContent'
import { Suspense } from 'react'

const AccountPage = () => {
    return (
        <Suspense>
            <AccountContent />
        </Suspense>
    )
}

export default AccountPage

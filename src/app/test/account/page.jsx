'use client'
import AccountContent from '@/components/test/AccountContent'
import { Suspense } from 'react'

const AccountPage = () => {
    return (
        <Suspense>
            <AccountContent />
        </Suspense>
    )
}

export default AccountPage

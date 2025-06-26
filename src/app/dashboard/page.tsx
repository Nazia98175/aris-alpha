'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const TestDashboard = () => {
    const router = useRouter()

    useEffect(() => {
        router.replace('/dashboard/overview')
    }, [router])

    return null // Only return this — DO NOT include any JSX below
}

export default TestDashboard

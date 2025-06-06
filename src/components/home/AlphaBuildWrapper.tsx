'use client'

import { useEffect, useState } from 'react'
import AlphaBuild from '@/components/home/alpha-build'

const AlphaBuildWrapper = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check initial state from sessionStorage
        if (typeof window !== 'undefined') {
            const storedState = sessionStorage.getItem('showAlphaBuild')
            if (storedState === 'true') {
                setIsVisible(true)
            }
        }

        // Listen for visibility change event
        const handleVisibilityChange = (event: CustomEvent) => {
            setIsVisible(event.detail.show)
        }

        window.addEventListener('alphaBuildVisibilityChange', handleVisibilityChange as EventListener)

        return () => {
            window.removeEventListener('alphaBuildVisibilityChange', handleVisibilityChange as EventListener)
        }
    }, [])

    if (!isVisible) {
        // Return placeholder div to maintain layout space
        return <div className="min-h-[400px] md:min-h-[500px] lg:min-h-[600px]" />
    }

    return <AlphaBuild />
}

export default AlphaBuildWrapper

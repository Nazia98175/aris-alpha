'use client'
import AlphaBuild from '@/components/home/AlphaBuild'
import { useEffect, useState } from 'react'

const AlphaBuildWrapper = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedState = sessionStorage.getItem('showAlphaBuild')
            if (storedState === 'true') {
                setIsVisible(true)
            }
        }
        const handleVisibilityChange = (event: CustomEvent) => {
            setIsVisible(event.detail.show)
        }

        window.addEventListener('alphaBuildVisibilityChange', handleVisibilityChange as EventListener)

        return () => {
            window.removeEventListener('alphaBuildVisibilityChange', handleVisibilityChange as EventListener)
        }
    }, [])

    if (!isVisible) {
        return <div className="min-h-[400px] md:min-h-[500px] lg:min-h-[600px]" />
    }

    return <AlphaBuild />
}

export default AlphaBuildWrapper

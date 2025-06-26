// hooks/useScrollActiveSection.ts
import { useEffect, useRef, useState } from 'react'

export const useScrollActiveSection = (sectionCount: number) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const sectionRefs = useRef<(HTMLDivElement | null)[]>(Array(sectionCount).fill(null))

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 768) return

            sectionRefs.current.forEach((ref, index) => {
                if (ref) {
                    const { top, bottom } = ref.getBoundingClientRect()
                    const sectionCenter = top + (bottom - top) / 2
                    const windowHeight = window.innerHeight

                    if (sectionCenter > windowHeight / 3 && sectionCenter < (windowHeight * 2) / 3) {
                        setActiveIndex(index)
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return { activeIndex, sectionRefs }
}

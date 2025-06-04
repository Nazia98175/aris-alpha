'use client'

import { useEffect, useState } from 'react'

type Props = {
    startPercent: number
    targetPercent: number
}

export default function ProgressBarAnimation({ startPercent, targetPercent }: Props) {
    const [animatedPercent, setAnimatedPercent] = useState(startPercent)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimatedPercent(targetPercent)
        }, 50)

        return () => clearTimeout(timeout)
    }, [startPercent, targetPercent])

    return (
        <div className="mx-auto my-[72px] h-3 w-full max-w-[654px] overflow-hidden rounded-[67px] bg-[#3D4048] md:h-5 xl:h-6">
            <div
                style={{ width: `${animatedPercent}%` }}
                className="h-full rounded-[120px] bg-white transition-all duration-1000 ease-in-out"
            />
        </div>
    )
}

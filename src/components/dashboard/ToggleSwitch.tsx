// components/ui/ToggleSwitch.tsx
'use client'

import React from 'react'

interface ToggleSwitchProps {
    enabled: boolean
    onToggle: () => void
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ enabled, onToggle }) => {
    return (
        <div
            onClick={onToggle}
            className={`relative h-5 w-10 cursor-pointer rounded-full transition-colors ${
                enabled ? 'bg-primaryblue' : 'bg-darksand'
            }`}
        >
            <div
                className={`absolute top-[2px] h-4 w-4 rounded-full bg-[#D9D9D9] transition-all duration-200 ${
                    enabled ? 'left-[22px]' : 'left-[2px]'
                }`}
            />
        </div>
    )
}

export default ToggleSwitch

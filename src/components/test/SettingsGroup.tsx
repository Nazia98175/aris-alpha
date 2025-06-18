// components/ui/SettingsGroup.tsx
import React from 'react'

interface SettingsGroupProps {
    title: string
    children: React.ReactNode
}

const SettingsGroup: React.FC<SettingsGroupProps> = ({ title, children }) => {
    return (
        <div>
            <p className="mb-2 text-white/80 uppercase">{title}</p>
            {children}
        </div>
    )
}

export default SettingsGroup

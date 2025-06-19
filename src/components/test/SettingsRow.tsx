import { ReactNode } from 'react'

interface SettingsRowProps {
    icon?: ReactNode
    label: string
    description?: string
    rightElement?: ReactNode
}

const SettingsRow: React.FC<SettingsRowProps> = ({ icon, label, description, rightElement }) => {
    return (
        <div className="flex items-center justify-between rounded-md py-1.5 md:py-2">
            <div className="flex items-center gap-4">
                {icon && <span className="text-sm md:text-base">{icon}</span>}
                <div>
                    <p className="text-sm text-white md:text-base">{label}</p>
                    {description && <p className="text-xs text-white/80 md:text-sm">{description}</p>}
                </div>
            </div>
            {rightElement}
        </div>
    )
}

export default SettingsRow

import { ReactNode } from 'react'

interface SettingsRowProps {
    icon?: ReactNode
    label: string
    description?: string
    rightElement?: ReactNode
}

const SettingsRow: React.FC<SettingsRowProps> = ({ icon, label, description, rightElement }) => {
    return (
        <div className="flex items-center justify-between rounded-md py-2">
            <div className="flex items-center gap-4">
                {icon && <span className="text-base">{icon}</span>}
                <div>
                    <p className="text-white">{label}</p>
                    {description && <p className="text-sm text-white/80">{description}</p>}
                </div>
            </div>
            {rightElement}
        </div>
    )
}

export default SettingsRow

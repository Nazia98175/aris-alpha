import { ReactNode } from 'react'

interface FeatureListItemProps {
    icon: ReactNode
    text: string
}

const FeatureListItem = ({ icon, text }: FeatureListItemProps) => (
    <li className="flex items-center gap-2">
        {icon}
        {text}
    </li>
)

export default FeatureListItem

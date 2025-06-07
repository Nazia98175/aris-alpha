import StrategyFeed from './StrategyFeed'
import FocusYourFeed from './FocusYourFeed'
import TakeAction from './TakeAction'
import CutNoise from './CutNoise'
import MainObjective from './MainObjective'
import { Filter, Rss, Target, VolumeX, Zap } from 'lucide-react'

export type StepComponentProps = {
    formData: {
        strategyFeed: string[]
        focusYourFeed: string[]
        takeAction: string[]
        cutNoise: string[]
        mainObjective: string[]
    }
    updateFormData: (key: keyof StepComponentProps['formData'], value: string[]) => void
}

export const steps: {
    slug: string
    component: React.FC<StepComponentProps>
    desc: string
    icon: React.ComponentType
}[] = [
    {
        slug: 'cut-noise',
        component: CutNoise,
        desc: 'Distractions reduced. Focus sharpened.',
        icon: VolumeX,
    },
    {
        slug: 'main-objective',
        component: MainObjective,
        desc: 'Objective locked in',
        icon: Target,
    },
    {
        slug: 'strategy-feed',
        component: StrategyFeed,
        desc: 'Got it. Your feed will sync with your style.',
        icon: Rss,
    },
    {
        slug: 'focus-your-feed',
        component: FocusYourFeed,
        desc: 'Dialed in to your preferred asset classes.',
        icon: Filter,
    },
    {
        slug: 'take-action',
        component: TakeAction,
        desc: 'Timing sensitivity adjusted.',
        icon: Zap,
    },
]

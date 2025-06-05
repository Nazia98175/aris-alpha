import StrategyFeed from './StrategyFeed'
import FocusYourFeed from './FocusYourFeed'
import TakeAction from './TakeAction'
import CutNoise from './CutNoise'
import MainObjective from './MainObjective'

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

export const steps: { slug: string; component: React.FC<StepComponentProps> }[] = [
    { slug: 'cut-noise', component: CutNoise },
    { slug: 'main-objective', component: MainObjective },
    { slug: 'strategy-feed', component: StrategyFeed },
    { slug: 'focus-your-feed', component: FocusYourFeed },
    { slug: 'take-action', component: TakeAction },
]

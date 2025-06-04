import StrategyFeed from './StrategyFeed'
import FocusYourFeed from './FocusYourFeed'
import TakeAction from './TakeAction'
import CutNoise from './CutNoise'
import MainObjective from './MainObjective'

export type StepComponentProps = {
    formData: {
        strategyFeed: string[]
        takeAction: string[]
        focusYourFeed: string[]
        cutNoise: string[]
        mainObjective: string[]
    }
    updateFormData: (key: keyof StepComponentProps['formData'], value: string[]) => void
}
type Step = {
    slug: string
    component: React.FC<StepComponentProps>
}

export const steps: Step[] = [
    { slug: 'strategy-feed', component: StrategyFeed },
    { slug: 'focus-your-feed', component: FocusYourFeed },
    { slug: 'take-action', component: TakeAction },
    { slug: 'cut-noise', component: CutNoise },
    { slug: 'main-objective', component: MainObjective },
]

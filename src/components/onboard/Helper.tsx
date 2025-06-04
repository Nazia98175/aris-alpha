import CutNoise from './CutNoise'
import FocusYourFeed from './FocusYourFeed'
import MainObjective from './MainObjective'
import StrategyFeed from './StrategyFeed'
import TakeAction from './TakeAction'

export const steps = [
    { slug: 'strategy-feed', component: StrategyFeed },
    { slug: 'focus-your-feed', component: FocusYourFeed },
    { slug: 'take-action', component: TakeAction },
    { slug: 'cut-noise', component: CutNoise },
    { slug: 'main-objective', component: MainObjective },
]

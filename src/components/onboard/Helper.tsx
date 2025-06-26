import StrategyFeed from './StrategyFeed'
import FocusYourFeed from './FocusYourFeed'
import TakeAction from './TakeAction'
import CutNoise from './CutNoise'
import MainObjective from './MainObjective'
import { Filter, Rss, Target, VolumeX, Zap } from 'lucide-react'
import {
    CalendarIcon,
    CheckIcon,
    LessionIcon,
    MytradeIcon,
    NewsIcon,
    OpportunitiesIcon,
    PieChartIcon,
    PromotionIcon,
    SettingIcon,
    StrategiesIcon,
    SymbolsIcon,
    TargetIcon,
    TechIcon,
    TradeHomeIcon,
    ZapIcon,
} from '../home/Icons'

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

export const whatYouGet = [
    {
        icon: <TargetIcon />,
        title: 'Signals with clear entry logic',
    },
    {
        icon: <PieChartIcon />,
        title: 'Suggested allocation ranges',
    },
    {
        icon: <ZapIcon />,
        title: 'Fast alerts when momentum starts building',
    },
]

export const traditionalPoints = ['Too many alerts', 'Reacts to headlines', 'Unclear sizing', 'Late entries']

export const arisPoints = [
    'Only high-conviction signals',
    'Anticipates structural shifts',
    'Portfolio-aware allocations',
    'Early signals',
]

export const featureListItems = [
    {
        icon: <CheckIcon />,
        text: 'Wait for confirmation',
    },
    {
        icon: <CheckIcon />,
        text: 'Ignore the noise',
    },
    {
        icon: <CheckIcon />,
        text: 'Trigger only when risk and reward align',
    },
]

interface FeatureCard {
    id: number
    title: string
    description: string
    image: string
}
export const features: FeatureCard[] = [
    {
        id: 1,
        title: 'Momentum Alerts',
        description: 'We highlight the moment, you decide what to do.',
        image: '/assets/homepage/png/buy-sell.png',
    },
    {
        id: 2,
        title: 'No guessing. We flag the moment.',
        description: 'No spread cants, just deart insights.',
        image: '/assets/homepage/png/no-guessing.png',
    },
    {
        id: 3,
        title: 'Sentiment Forecasts',
        description: 'No gimmicks. Only clear market moves.',
        image: '/assets/homepage/png/forecast.png',
    },
    {
        id: 4,
        title: 'Weekly Outlooks',
        description: "Be prepared—know what's ahead.",
        image: '/assets/homepage/png/outlook.png',
    },
]

export const menuItems = [
    { label: 'Overview', icon: <TradeHomeIcon /> },
    { label: 'Symbols', icon: <SymbolsIcon /> },
    { label: 'My trades', icon: <MytradeIcon /> },
    { label: 'News', icon: <NewsIcon /> },
    { label: 'Calendar', icon: <CalendarIcon /> },
    { label: 'Opportunities', icon: <OpportunitiesIcon /> },
    { label: 'Tech analysis', icon: <TechIcon /> },
    { label: 'Lessons', icon: <LessionIcon /> },
    { label: 'Strategies', icon: <StrategiesIcon /> },
    { label: 'Promotions', icon: <PromotionIcon /> },
    { label: 'Settings', icon: <SettingIcon /> },
]

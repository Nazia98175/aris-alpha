import { Advisor, CalculatorIcon, ExploringIcon, LongTermIcon } from './Icons'

export const step1Options = [
    {
        id: 'opt1',
        title: 'Monthly Rotation',
        desc: 'I adjust allocations a few times a month',
        value: 'monthly-rotation',
        icon: <CalculatorIcon />,
    },
    {
        id: 'opt2',
        title: 'Tactical Positioning',
        desc: 'I shift exposure weekly',
        value: 'tactical-positioning',
        icon: <ExploringIcon />,
    },
    {
        id: 'opt3',
        title: 'Advisor',
        desc: 'I manage capital for others',
        value: 'advisor',
        icon: <Advisor />,
    },
    {
        id: 'opt4',
        title: 'Long-Term Holder',
        desc: 'I prefer fewer changes but want insight',
        value: 'long-term-holder',
        icon: <LongTermIcon />,
    },
    {
        id: 'opt5',
        title: 'Still Exploring',
        desc: 'I’m figuring it out',
        value: 'still-exploring',
        icon: <ExploringIcon />,
    },
]

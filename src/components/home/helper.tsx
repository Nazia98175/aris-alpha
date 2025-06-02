import { TellTraderIcon, TradePlaneIcon, TradePlaneIcon2 } from './Icons'

export const reviewSlider = [
    {
        userImg: '/assets/homepage/png/user-img-1.png',
        title: 'Daniel Rosewell',
        position: 'IT Manager',
        desc: 'I don’t have hours to analyze charts. Aris Alpha helps me stay in the loop with minimal effort. Just wish it had more altcoin coverage.',
    },
    {
        userImg: '/assets/homepage/png/user-img-2.png',
        title: 'Sophia Mendell',
        position: 'Chief Executive Officer',
        desc: 'I used to juggle 5 screens and news feeds. Now I just follow Aris Alpha.',
    },
    {
        userImg: '/assets/homepage/png/user-img-3.png',
        title: 'Shirley Shetia',
        position: 'Operations Head',
        desc: 'The weekly outlook and sentiment analysis are 🔥. It helps me plan better and avoid emotional trades. Super clean interface too.',
    },
]

export const footerLinks = [
    {
        label: 'Home',
        href: '#home',
    },
    {
        label: 'Learn More',
        href: '/onboard',
    },
    {
        label: 'About Us',
        href: '#about-us',
    },
]

export const ProgressStep = [
    {
        id: 1,
        icon: <TellTraderIcon />,
    },
    {
        id: 2,
        icon: <TradePlaneIcon />,
    },
    {
        id: 3,
        icon: <TradePlaneIcon2 />,
    },
]

export const stepInstractions = [
    {
        id: 1,
        title: 'Tell us how you trade',
        description: ' Your goals and style shape everything. We start by learning how you think.',
        tradeCard: true,
        startTradebtn: false,
        tradingNavigation: false,
    },
    {
        id: 2,
        title: 'We generate your signal and allocation plan',
        description: 'You get a custom playbook — clear entries, exits, and position sizing.',
        tradeCard: false,
        startTradebtn: true,
        tradingNavigation: false,
    },
    {
        id: 3,
        title: 'You act — no digging',
        description: '  Your dashboard updates in real time. No scrolling. No  guesswork. Just action.',
        tradeCard: false,
        startTradebtn: false,
        tradingNavigation: true,
    },
]

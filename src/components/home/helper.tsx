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
        href: '/onboarding',
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
        title: 'Your rhythm, Your goals',
        description: 'We use that to frame your feed',
        tradeCard: true,
        startTradebtn: false,
        tradingNavigation: false,
    },
    {
        id: 2,
        title: 'We surface signals and allocation cues',
        description: 'Your playbook updates in real time. No noise, just signal flow matched to your style.',
        tradeCard: false,
        startTradebtn: true,
        tradingNavigation: false,
    },
    {
        id: 3,
        title: 'You act—without the digging',
        description: 'No scrolling, no overload. You see what matters, when it matters.',
        tradeCard: false,
        startTradebtn: false,
        tradingNavigation: true,
    },
]

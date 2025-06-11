import Image from 'next/image'
import CommonBtn from '../ui/common-btn'
import { ProgressStep, stepInstractions } from './helper'
import {
    BtnPlusIcon,
    BtnUpArrowIcon,
    CalendarIcon,
    DotedLineIcon,
    LessionIcon,
    MicroTradeUpIcon,
    MytradeIcon,
    NewsIcon,
    OpportunitiesIcon,
    PromotionIcon,
    SettingIcon,
    StrategiesIcon,
    SymbolsIcon,
    TechIcon,
    TradeHomeIcon,
} from './Icons'
import Link from 'next/link'

const AlphaBuild = () => {
    const menuItems = [
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
    return (
        <section className="relative">
            <Image
                width={1440}
                height={800}
                className="absolute top-0 left-0 z-[-1] h-[700px] w-full object-cover object-right max-sm:object-top md:object-fill lg:h-[1000px]"
                src="/assets/homepage/webp/hero-bg.webp"
                alt="background"
                unoptimized
            />
            <div className="mx-auto max-w-[1004px] px-4 py-13 sm:pt-10 md:pb-[112px] lg:pb-[161px]">
                <h2 className="secondary-heading text-center text-white">How Aris Alpha Builds Your Strategy</h2>
                <div className="pt-[45px] md:pt-[60px]">
                    <div className="flex justify-between gap-7">
                        <div className="relative hidden max-w-[50px] pt-[45px] md:block">
                            <span className="absolute top-[45px] left-[50%] z-[-1] h-full w-full">
                                <DotedLineIcon />
                            </span>
                            {ProgressStep.map((step, index) => (
                                <div key={index} className={index > 0 ? 'mt-[162px]' : ''}>
                                    {step.icon}
                                </div>
                            ))}
                        </div>
                        <div className="w-full">
                            {stepInstractions.map((list, index) => (
                                <div key={index}>
                                    <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
                                        <div className="w-full max-w-[450px] text-center sm:text-start">
                                            <h4 className="large-text">{list.title}</h4>
                                            <p className="description pt-2">{list.description}</p>
                                        </div>
                                        {list.tradeCard && (
                                            <div className="w-full sm:max-w-[260px] sm:p-4">
                                                <div className="w-full rounded-[5px] border border-[#3F3F3F] p-3">
                                                    <div className="flex items-center justify-between gap-3">
                                                        <div>
                                                            <p className="text-sm text-[#FF6363]">$80 \ 13.5%</p>
                                                            <h5 className="pt-1 text-xs text-[#d0d0d0]">
                                                                Unrealized profit
                                                            </h5>
                                                        </div>
                                                        <div>
                                                            <p className="flex items-center text-sm text-[#2A64F6]">
                                                                $750
                                                                <span className="pl-2">
                                                                    <MicroTradeUpIcon />
                                                                </span>
                                                                4.3%
                                                            </p>
                                                            <h5 className="pt-1 text-xs text-[#d0d0d0]">
                                                                Realized profit
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-3 pt-6">
                                                        <div>
                                                            <h4 className="text-base text-[#808080] md:text-lg">
                                                                $10,750
                                                            </h4>
                                                            <p className="pt-1 text-xs text-[#d0d0d0]">Balance</p>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-base text-[#808080] md:text-lg">
                                                                $6,500
                                                            </h4>
                                                            <p className="pt-1 text-xs text-[#d0d0d0]">
                                                                Available margin
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {list.startTradebtn && (
                                            <>
                                                {/* Desktop View - Original Buttons */}
                                                <div className="hidden w-full max-w-[239px] items-center justify-center sm:p-4 md:flex">
                                                    <div className="w-full max-w-[188px] space-y-3">
                                                        <Link
                                                            href={'/onboarding'}
                                                            className="group flex h-[49px] w-full max-w-[188px] cursor-pointer items-center justify-center gap-3 rounded-[24px] border border-[#0082ff] bg-[#0082FF] text-lg text-white shadow-[0px_11.75px_14.688px_-5.875px_rgba(0,130,255,0.30)] transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#0082FF] md:text-xl"
                                                        >
                                                            <BtnPlusIcon />
                                                            Start Trade
                                                        </Link>
                                                        <Link
                                                            href={'/onboarding'}
                                                            className="group shadow-[0px_8.813px_26.438px -2.937px #E2E6EE] flex h-[49px] w-full max-w-[188px] cursor-pointer items-center justify-center gap-3 rounded-[24px] bg-white text-lg text-[#0082FF] transition-all duration-300 ease-in-out hover:bg-[#0082FF] hover:text-white md:text-xl"
                                                        >
                                                            <BtnUpArrowIcon />
                                                            Start Trade
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Mobile View - Information Card */}
                                                <div className="w-full max-w-[280px] md:hidden">
                                                    <div className="rounded-xl border border-[#3F3F3F] bg-[#1a1a1a] p-4">
                                                        <div className="mb-3 flex items-center gap-3">
                                                            <div className="rounded-lg bg-[#0082FF]/20 p-2">
                                                                <svg
                                                                    width="20"
                                                                    height="20"
                                                                    viewBox="0 0 20 20"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
                                                                        stroke="#0082FF"
                                                                        strokeWidth="1.5"
                                                                    />
                                                                    <path
                                                                        d="M10 6V10M10 14H10.01"
                                                                        stroke="#0082FF"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <h5 className="font-medium text-white">Trading Options</h5>
                                                        </div>

                                                        <div className="space-y-2">
                                                            <div className="flex items-center gap-2 text-[#808080]">
                                                                <div className="rounded bg-[#0082FF]/10 p-1">
                                                                    <BtnPlusIcon />
                                                                </div>
                                                                <span className="text-sm">Start Trade</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-[#808080]">
                                                                <div className="rounded bg-white/10 p-1">
                                                                    <BtnUpArrowIcon />
                                                                </div>
                                                                <span className="text-sm">Advanced Trade</span>
                                                            </div>
                                                        </div>

                                                        <div className="mt-3 border-t border-[#3F3F3F] pt-3">
                                                            <p className="text-center text-xs text-[#808080]">
                                                                Available on desktop
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        {list.tradingNavigation && (
                                            <div className="w-full max-w-fit overflow-hidden sm:max-w-[200px]">
                                                <div className="w-ful h-[118px] space-y-3 overflow-auto">
                                                    {menuItems.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="md:group flex items-center gap-3 max-md:pointer-events-none md:cursor-pointer"
                                                        >
                                                            {item.icon && item.icon}
                                                            <p className="font-outfit text-base text-white transition-all duration-300 ease-in-out group-hover:text-[#0082FF]">
                                                                {item.label}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {index < stepInstractions.length - 1 && (
                                        <div className="my-[36px] flex h-[1px] w-full bg-[#141517]"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center pt-10">
                    <CommonBtn
                        btnText="Get Started"
                        btnUrl="/onboarding"
                        variant="secondary"
                        className="h-[45px] w-full sm:w-fit md:h-[63px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default AlphaBuild

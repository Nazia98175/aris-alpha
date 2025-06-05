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
                className="absolute top-0 left-0 z-[-1] h-[700px] w-full object-cover object-right md:object-fill lg:h-[1000px]"
                src="/assets/homepage/webp/hero-bg.webp"
                alt="background"
                unoptimized
            />
            <div className="mx-auto max-w-[1004px] px-4 py-13 sm:pt-10 md:pb-[112px] lg:pb-[161px]">
                <h2 className="gradient-text secondary-heading text-center">How Aris Alpha Builds Your Strategy</h2>
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
                                            <div className="flex w-full max-w-[239px] items-center justify-center sm:p-4">
                                                <div className="w-full max-w-[188px] space-y-3">
                                                    <button className="group flex h-[49px] w-full max-w-[188px] cursor-pointer items-center justify-center gap-3 rounded-[24px] border border-[#0082ff] bg-[#0082FF] text-lg text-white shadow-[0px_11.75px_14.688px_-5.875px_rgba(0,130,255,0.30)] transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#0082FF] md:text-xl">
                                                        <BtnPlusIcon />
                                                        Start Trade
                                                    </button>
                                                    <button className="group shadow-[0px_8.813px_26.438px -2.937px #E2E6EE] flex h-[49px] w-full max-w-[188px] cursor-pointer items-center justify-center gap-3 rounded-[24px] bg-white text-lg text-[#0082FF] transition-all duration-300 ease-in-out hover:bg-[#0082FF] hover:text-white md:text-xl">
                                                        <BtnUpArrowIcon />
                                                        Start Trade
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                        {list.tradingNavigation && (
                                            <div className="w-full max-w-fit overflow-hidden sm:max-w-[200px]">
                                                <div className="w-ful h-[118px] space-y-3 overflow-auto">
                                                    {menuItems.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="group flex cursor-pointer items-center gap-3"
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
                        btnUrl="/onboard"
                        variant="primary"
                        className="h-[45px] w-full sm:w-fit md:h-[63px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default AlphaBuild

// components/onboard/StepInstructionBlock.tsx
import React from 'react'
import Link from 'next/link'
import { BtnPlusIcon, BtnUpArrowIcon, MicroTradeUpIcon } from './Icons'
import { menuItems } from '../onboard/Helper'

interface StepInstractionProps {
    list: {
        title: string
        description: string
        tradeCard?: boolean
        startTradebtn?: boolean
        tradingNavigation?: boolean
    }
    index: number
    totalSteps: number
}

const StepInstractionBlock: React.FC<StepInstractionProps> = ({ list, index, totalSteps }) => {
    return (
        <div>
            <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="w-full max-w-[450px] text-center sm:text-start">
                    <h4 className="large-text">{list.title}</h4>
                    <p className="description pt-2">{list.description}</p>
                </div>

                {list.tradeCard && (
                    <div className="w-full sm:max-w-[260px] sm:p-4">
                        <div className="border-sacer w-full rounded-[5px] border p-3">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-fusion text-sm">$80 \ 13.5%</p>
                                    <h5 className="text-waterwhite pt-1 text-xs">Unrealized profit</h5>
                                </div>
                                <div>
                                    <p className="text-primaryblue flex items-center text-sm">
                                        $750{' '}
                                        <span className="pl-2">
                                            <MicroTradeUpIcon />
                                        </span>{' '}
                                        4.3%
                                    </p>
                                    <h5 className="text-waterwhite pt-1 text-xs">Realized profit</h5>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-3 pt-6">
                                <div>
                                    <h4 className="text-gray text-base md:text-lg">$10,750</h4>
                                    <p className="text-waterwhite pt-1 text-xs">Balance</p>
                                </div>
                                <div>
                                    <h4 className="text-gray text-base md:text-lg">$6,500</h4>
                                    <p className="text-waterwhite pt-1 text-xs">Available margin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {list.startTradebtn && (
                    <>
                        <div className="hidden w-full max-w-[239px] items-center justify-center sm:p-4 md:flex">
                            <div className="w-full max-w-[188px] space-y-3">
                                <Link
                                    href={'/onboarding'}
                                    className="group border-brescian bg-brescian hover:text-brescian flex h-[49px] w-full max-w-[188px] cursor-pointer items-center justify-center gap-3 rounded-[24px] border text-lg text-white shadow-[0px_11.75px_14.688px_-5.875px_rgba(0,130,255,0.30)] transition-all duration-300 ease-in-out hover:bg-transparent md:text-xl"
                                >
                                    <BtnPlusIcon />
                                    Start Trade
                                </Link>
                                <Link
                                    href={'/onboarding'}
                                    className="group text-brescian hover:bg-brescian flex h-[49px] w-full max-w-[188px] cursor-pointer items-center justify-center gap-3 rounded-[24px] bg-white text-lg shadow-[0px_8.813px_26.438px_-2.937px_#E2E6EE] transition-all duration-300 ease-in-out hover:text-white md:text-xl"
                                >
                                    <BtnUpArrowIcon />
                                    Start Trade
                                </Link>
                            </div>
                        </div>

                        <div className="w-full max-w-[280px] md:hidden">
                            <div className="border-sacer bg-darker rounded-xl border p-4">
                                <div className="mb-3 flex items-center gap-3">
                                    <div className="bg-brescian/20 rounded-lg p-2">
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
                                    <div className="text-gray flex items-center gap-2">
                                        <div className="bg-brescian/10 rounded p-1">
                                            <BtnPlusIcon />
                                        </div>
                                        <span className="text-sm">Start Trade</span>
                                    </div>
                                    <div className="text-gray flex items-center gap-2">
                                        <div className="rounded bg-white/10 p-1">
                                            <BtnUpArrowIcon />
                                        </div>
                                        <span className="text-sm">Advanced Trade</span>
                                    </div>
                                </div>
                                <div className="border-sacer mt-3 border-t pt-3">
                                    <p className="text-gray text-center text-xs">Available on desktop</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {list.tradingNavigation && (
                    <div className="w-full max-w-fit overflow-hidden sm:max-w-[200px]">
                        <div className="h-[118px] w-full space-y-3 overflow-auto">
                            {menuItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="md:group flex items-center gap-3 max-md:pointer-events-none md:cursor-pointer"
                                >
                                    {item.icon && item.icon}
                                    <p className="font-outfit group-hover:text-brescian text-base text-white transition-all duration-300 ease-in-out">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {index < totalSteps - 1 && <div className="bg-smores my-[36px] flex h-[1px] w-full"></div>}
        </div>
    )
}

export default StepInstractionBlock

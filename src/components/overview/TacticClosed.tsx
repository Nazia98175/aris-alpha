import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BitcoinLogo, RightTopArrow } from '../home/Icons'
import { TACTICAL_SIGNALS_DATA_LIST } from './Helper'
import CandlestickChart from './CandleStickChart'

interface TacticClosedProps {
    isSingleExpanded: boolean
    isSingleExpandedCardFour: boolean
    isSingleExpandedCardTwo: boolean
    isSingleExpandedCardThree: boolean
}

const TacticClosed = ({
    isSingleExpanded,
    isSingleExpandedCardFour,
    isSingleExpandedCardTwo,
    isSingleExpandedCardThree,
}: TacticClosedProps) => {
    const [isXL, setIsXL] = useState(false)
    const shouldSliceToTwo = isSingleExpanded && isXL
    const visibleSignals = TACTICAL_SIGNALS_DATA_LIST.slice(0, shouldSliceToTwo ? 2 : 4)

    useEffect(() => {
        const checkScreen = () => {
            setIsXL(window.innerWidth >= 1280)
        }

        checkScreen()
        window.addEventListener('resize', checkScreen)

        return () => window.removeEventListener('resize', checkScreen)
    }, [])

    return (
        <div>
            <div className={`${isSingleExpandedCardFour ? 'overflow-x-auto' : 'overflow-x-visible'}`}>
                <div
                    className={`grid gap-4 ${isSingleExpandedCardFour ? 'min-w-[358px]' : 'min-w-[unset]'} ${
                        isSingleExpanded
                            ? 'xs:grid-cols-2 grid-cols-1 lg:grid-cols-4 xl:grid-cols-2'
                            : 'xs:grid-cols-2 grid-cols-1 md:grid-cols-4'
                    }`}
                >
                    {visibleSignals.map((signal, i) => (
                        <div key={i} className="bg-lightblack rounded-[10px] p-3 sm:p-4">
                            <div className="mb-4 flex justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`flex h-8 w-8 items-center justify-center rounded-full ${signal.symbol === 'QQQ' && 'bg-lightred'} ${signal.symbol === 'BTC' && 'bg-lightyellow'} ${signal.symbol === 'SPY' && 'bg-lightgreen'}`}
                                    >
                                        <BitcoinLogo />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-richwhite text-sm font-semibold tracking-normal">
                                            {signal.coin}
                                        </span>
                                        <span className="text-slate text-xs font-normal tracking-normal">
                                            {signal.symbol}
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    href="#"
                                    className={`text-custom-xs text-richwhite h-fit w-fit rounded-[30px] px-2.5 py-0.5 !leading-[150%] duration-300 hover:scale-105 ${signal.status === 'BUY' ? 'bg-lightgreen' : 'bg-red-400'}`}
                                >
                                    {signal.status}
                                </Link>
                            </div>
                            <div className="mb-3.5 flex justify-between">
                                <span className="text-custom-sm text-lightslate font-normal tracking-normal">
                                    Suggested <br /> Allocation
                                </span>
                                <div className="flex items-center gap-1">
                                    <RightTopArrow />
                                    <span className="text-lightgreen text-xs !leading-[120%] font-semibold tracking-normal">
                                        {' '}
                                        {signal.allocation}
                                    </span>
                                </div>
                            </div>
                            <div className="mb-4 flex items-center justify-between text-xs text-gray-400">
                                <span className="text-custom-sm text-lightslate font-normal tracking-normal">
                                    Entry Range
                                </span>
                                <span className="text-lightgreen text-xs !leading-[120%] font-semibold tracking-normal">
                                    ${signal.range[0]}-${signal.range[1]}
                                </span>
                            </div>
                            <div className="mx-auto h-[52px] w-full">
                                <CandlestickChart symbol={signal.symbol} height={52} />
                            </div>
                            <div className={`my-2.5 ${isSingleExpanded && 'mb-0'}`}>
                                <span className="text-custom-sm text-richslate font-light tracking-normal">
                                    Updated 1 min ago
                                </span>
                            </div>
                            <div
                                className={`bg-richsand w-full rounded-md px-2.5 py-1.5 ${isSingleExpanded && 'hidden'}`}
                            >
                                <p className="text-custom-sm text-mediumgrey font-normal tracking-normal italic">
                                    &quot;BTC held support on weekly close, momentum building from $69K base.&quot;{' '}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <p
                className={`${isSingleExpandedCardFour ? 'pt-5 pb-3.5 text-start' : ''} ${isSingleExpandedCardTwo || isSingleExpandedCardThree ? 'pt-3.5 sm:pt-5 xl:pt-6' : ''} text-offgrey text-custom-sm mx-auto rounded-[10px] py-2 text-center font-normal italic`}
            >
                Model-generated signals for informational use only. Not financial advice
            </p>
        </div>
    )
}

export default TacticClosed

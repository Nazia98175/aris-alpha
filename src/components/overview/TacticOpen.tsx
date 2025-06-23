import Link from 'next/link'
import { BitcoinLogo, RightTopArrow } from '../home/Icons'
import { TACTICAL_SIGNALS_DATA_LIST } from './Helper'
import CandlestickChart from './CandleStickChart'

const TacticOpen = () => {
    return (
        <div>
            <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-5">
                {TACTICAL_SIGNALS_DATA_LIST.map((signal, i) => (
                    <div key={i} className="bg-lightblack rounded-[10px] p-3 sm:p-4">
                        <div className="mb-4 flex justify-between">
                            <div className="flex items-center gap-3">
                                <div
                                    className={`flex h-8 w-8 items-center justify-center rounded-full ${signal.symbol === 'QQQ' && 'bg-lightred'} ${signal.symbol === 'BTC' && 'bg-lightyellow'} ${signal.symbol === 'SPY' && 'bg-lightgreen'} `}
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
                            <div className="flex flex-col items-end gap-1">
                                <Link
                                    href="#"
                                    className={`text-custom-xs text-richwhite h-fit w-fit rounded-[30px] px-2.5 py-0.5 !leading-[150%] duration-300 hover:scale-105 ${signal.status === 'BUY' ? 'bg-lightgreen' : 'bg-red-400'}`}
                                >
                                    {signal.status}
                                </Link>
                                <span className="text-custom-sm text-richslate text-end font-light tracking-normal">
                                    Updated 1 min ago
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-1.5">
                                <span className="text-custom-sm text-lightslate font-normal tracking-normal">
                                    Suggested Allocation
                                </span>
                                <div className="flex items-center gap-1">
                                    <RightTopArrow />
                                    <span className="text-lightgreen text-xs !leading-[120%] font-semibold tracking-normal">
                                        {' '}
                                        {signal.allocation}
                                    </span>
                                </div>
                            </div>
                            <div className="mb-4 flex flex-col text-xs">
                                <span className="text-custom-sm text-lightslate font-normal tracking-normal">
                                    Entry Range
                                </span>
                                <span className="text-lightgreen text-xs !leading-[120%] font-semibold tracking-normal">
                                    ${signal.range[0]}-${signal.range[1]}
                                </span>
                            </div>
                        </div>
                        <div className="mx-auto h-[94px] w-full xl:h-[94px]">
                            <CandlestickChart symbol={signal.symbol} />
                        </div>
                        <div className="gradient-border-tactic my-3.5 h-[1px] w-full"></div>
                        <span className="text-richwhite text-custom-sm font-semibold tracking-normal">Entry Logic</span>
                        {signal.entryLogic && (
                            <div className="bg-richsand mt-3 w-full rounded-[4px] px-[5px] py-2.5">
                                <div className="h-10">{signal.entryLogic}</div>
                            </div>
                        )}
                        {signal.desc && (
                            <p className="text-custom-sm text-smoke mt-3 !leading-[180%] font-normal tracking-normal">
                                {signal.desc}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            <p className="text-offgrey text-custom-sm mx-auto rounded-[10px] pt-6 pb-5 text-center font-normal italic">
                Model-generated signals for informational use only. Not financial advice
            </p>
        </div>
    )
}

export default TacticOpen

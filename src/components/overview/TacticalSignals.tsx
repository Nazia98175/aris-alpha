import Link from 'next/link'
import { BitcoinLogo, MiniGraph, RightTopArrow } from '../home/Icons'
// import Image from 'next/image'

interface TacticalSignalsProps {
    expanded: boolean
}

const TacticalSignals = ({ expanded }: TacticalSignalsProps) => {
    const signals = [
        { coin: 'Bitcoin', symbol: 'BTC', status: 'BUY', allocation: '15%', range: [420, 430], current: 425 },
        { coin: 'SPY', symbol: 'SPY', status: 'BUY', allocation: '10%', range: [420, 430], current: 425 },
        { coin: 'QQQ', symbol: 'QQQ', status: 'BUY', allocation: '15%', range: [420, 430], current: 425 },
        { coin: 'QQQ', symbol: 'QQQ', status: 'BUY', allocation: '15%', range: [420, 430], current: 425 },
    ]

    if (!expanded) {
        return (
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
                {signals.slice(0, 4).map((signal, i) => (
                    <div key={i} className="bg-lightblack rounded-[10px] p-3 sm:p-4">
                        <div className="mb-4 flex justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="bg-lightyellow flex h-8 w-8 items-center justify-center rounded-full">
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
                        <div className='h-[58px]'>
                            <MiniGraph />
                        </div>
                        <div className="my-2.5">
                            <span className="text-custom-sm text-richslate font-light tracking-normal">
                                Updated 1 min ago
                            </span>
                        </div>
                        <div className="w-full px-2.5 py-1.5 rounded-md bg-richsand">
                            <p className='text-custom-sm italic font-normal tracking-normal text-mediumgrey'>&quot;BTC held support on weekly close, momentum building from $69K base.&quot; </p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            {[...signals, ...signals].map((signal, i) => (
                <div key={i} className="bg-lightblack rounded-[10px] p-3 sm:p-4">
                    <div className="mb-4 flex justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div className="bg-lightyellow flex h-8 w-8 items-center justify-center rounded-full">
                                <BitcoinLogo />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-richwhite text-sm font-semibold tracking-normal">
                                    {signal.coin}
                                </span>
                                <span className="text-slate text-xs font-normal tracking-normal">{signal.symbol}</span>
                            </div>
                        </div>
                        <Link
                            href="#"
                            className={`text-custom-xs text-richwhite h-fit w-fit rounded-[30px] px-2.5 py-0.5 !leading-[150%] duration-300 hover:scale-105 ${signal.status === 'BUY' ? 'bg-lightgreen' : 'bg-red-400'}`}
                        >
                            {signal.status}
                        </Link>
                    </div>
                    <div className="flex justify-between items-center">
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
                        <div className="flex flex-col text-xs">
                            <span className="text-custom-sm text-lightslate font-normal tracking-normal">
                                Entry Range
                            </span>
                            <span className="text-lightgreen text-xs !leading-[120%] font-semibold tracking-normal">
                                ${signal.range[0]}-${signal.range[1]}
                            </span>
                        </div>
                    </div>
                    <div className="mb-3 h-16">
                 {/* <Image
                 src={signal.image}
                 alt='graph'
                 width={283}
                 height={94}
                 unoptimized
                 /> */}
                    </div>
                    <p className="text-xs text-gray-500">
                        30% held support on weekly, cross momentum looking from $396 level.
                    </p>
                </div>
            ))}
        </div>
    )
}

export default TacticalSignals

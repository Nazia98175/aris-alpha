import Link from 'next/link'
import { BitcoinLogo, MiniGraph, RightTopArrow } from '../home/Icons'
import Image from 'next/image'

interface TacticalSignalsProps {
    expanded: boolean
}

const TacticalSignals = ({ expanded }: TacticalSignalsProps) => {
    const signals = [
        {
            coin: 'Bitcoin',
            image: '/assets/dashboard/webp/graph1.webp',
            symbol: 'BTC',
            status: 'BUY',
            allocation: '15%',
            range: [420, 430],
            current: 425,
        },
        {
            coin: 'SPY',
            image: '/assets/dashboard/webp/graph2.webp',
            symbol: 'SPY',
            status: 'BUY',
            allocation: '10%',
            range: [420, 430],
            current: 425,
        },
        {
            coin: 'QQQ',
            image: '/assets/dashboard/webp/graph3.webp',
            symbol: 'QQQ',
            status: 'BUY',
            allocation: '15%',
            range: [420, 430],
            current: 425,
        },
        {
            coin: 'SPY',
            image: '/assets/dashboard/webp/graph4.webp',
            symbol: 'SPY',
            status: 'BUY',
            allocation: '15%',
            range: [420, 430],
            current: 425,
        },
        {
            coin: 'Bitcoin',
            image: '/assets/dashboard/webp/graph1.webp',
            symbol: 'BTC',
            status: 'BUY',
            allocation: '15%',
            range: [420, 430],
            current: 425,
        },
        {
            coin: 'SPY',
            image: '/assets/dashboard/webp/graph2.webp',
            symbol: 'SPY',
            status: 'BUY',
            allocation: '10%',
            range: [420, 430],
            current: 425,
        },
        {
            coin: 'QQQ',
            image: '/assets/dashboard/webp/graph3.webp',
            symbol: 'QQQ',
            status: 'BUY',
            allocation: '15%',
            range: [420, 430],
            current: 425,
        },
        {
            coin: 'SPY',
            image: '/assets/dashboard/webp/graph4.webp',
            symbol: 'SPY',
            status: 'BUY',
            allocation: '15%',
            range: [420, 430],
            current: 425,
        },
        {
            coin: 'Bitcoin',
            image: '/assets/dashboard/webp/graph1.webp',
            symbol: 'BTC',
            status: 'BUY',
            allocation: '15%',
            range: [420, 430],
            current: 425,
        },
        {
            coin: 'SPY',
            image: '/assets/dashboard/webp/graph2.webp',
            symbol: 'SPY',
            status: 'BUY',
            allocation: '10%',
            range: [420, 430],
            current: 425,
        },
    ]

    if (!expanded) {
        return (
            <div>
                <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 md:grid-cols-4">
                    {signals.slice(0, 4).map((signal, i) => (
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
                            <div className="h-[58px]">
                                <MiniGraph />
                            </div>
                            <div className="my-2.5">
                                <span className="text-custom-sm text-richslate font-light tracking-normal">
                                    Updated 1 min ago
                                </span>
                            </div>
                            <div className="bg-richsand w-full rounded-md px-2.5 py-1.5">
                                <p className="text-custom-sm text-mediumgrey font-normal tracking-normal italic">
                                    &quot;BTC held support on weekly close, momentum building from $69K base.&quot;{' '}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className='font-normal italic rounded-[10px] text-center text-offgrey mx-auto py-2 '>Model-generated signals for informational use only. Not financial advice</p>
            </div>
        )
    }

    return (
        <div>
            <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-5">
                {signals.map((signal, i) => (
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
                        <Image
                            className="mx-auto h-[94px] w-full max-w-[283px]"
                            src={signal.image}
                            alt="graph"
                            width={283}
                            height={94}
                            unoptimized
                        />
                        <div className="bg-richsand mt-4 w-full rounded-md px-2.5 py-1.5">
                            <p className="text-custom-sm text-mediumgrey font-normal tracking-normal italic">
                                &quot;BTC held support on weekly close, momentum building from $69K base.&quot;{' '}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-offgrey mx-auto rounded-[10px] pt-6 pb-5 text-center font-normal italic">
                Model-generated signals for informational use only. Not financial advice
            </p>
        </div>
    )
}

export default TacticalSignals

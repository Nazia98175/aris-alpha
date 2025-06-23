'use client'
import { MOMENTUM_ALERTS_DATA_LIST } from './Helper'

interface MomentumClosedProps {
    isSingleExpandedCardOne: boolean
}

const MomentumClosed = ({ isSingleExpandedCardOne }: MomentumClosedProps) => {
    return (
        <div className="pb-3 max-sm:overflow-x-auto sm:pb-5">
            <table className="w-full max-sm:min-w-[580px]">
                <thead>
                    <tr className="text-mediumsand bg-mediumslate text-xs !leading-[150%] font-medium tracking-normal uppercase">
                        <th className="rounded-tl-[10px] px-4 py-2.5 text-left">TIMESTAMP</th>
                        <th className="px-4 py-2.5 text-left">ASSET</th>
                        <th className="px-4 py-2.5 text-left">TRIGGER</th>
                        <th className="rounded-tr-[10px] px-4 py-2.5 text-left">INSIGHT</th>
                    </tr>
                </thead>
                <tbody>
                    {MOMENTUM_ALERTS_DATA_LIST.slice(0, 5).map((alert, i) => (
                        <tr key={i} className={`${i % 2 === 0 ? 'bg-lightblack' : 'bg-mediumslate'}`}>
                            <td
                                className={`text-richwhite px-4 py-[13.5px] text-sm font-normal tracking-normal ${i === MOMENTUM_ALERTS_DATA_LIST.slice(0, 5).length - 1 && 'rounded-bl-[10px]'}`}
                            >
                                {alert.time}
                            </td>
                            <td className="px-4 py-[13.5px]">
                                <span
                                    className={`text-sm font-normal tracking-normal ${
                                        alert.coin === 'BTC'
                                            ? 'text-orange'
                                            : alert.coin === 'ETH'
                                              ? 'text-purple'
                                              : alert.coin === 'SOL'
                                                ? 'text-lightred'
                                                : 'text-green'
                                    }`}
                                >
                                    {alert.coin}
                                </span>
                            </td>
                            <td className="px-4 py-[13.5px] text-sm font-normal tracking-normal">
                                <span className="line-clamp-1">{alert.trigger}</span>
                            </td>
                            <td
                                className={`px-4 py-[13.5px] text-sm font-normal tracking-normal ${i === MOMENTUM_ALERTS_DATA_LIST.slice(0, 5).length - 1 && 'rounded-br-[10px]'}`}
                            >
                                <span className="line-clamp-1">{alert.desc}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div
                className={`${isSingleExpandedCardOne ? 'block' : 'hidden'} bg-richsand mt-5 w-full rounded-md px-2.5 py-1.5 xl:mt-3.5`}
            >
                <p className="text-custom-sm text-mediumgrey font-normal tracking-normal italic">
                    All alerts are informational and do not constitute a recommendation to buy or sell.
                </p>
            </div>
        </div>
    )
}

export default MomentumClosed

import { BitcoinWhite, GreenRightArrowCircle, RedDownArrowCircle } from '../home/Icons'
import { MARKET_SNAPSHOT_DATA_LIST } from './Helper'

interface MarketClosedProps {
    isSingleExpandedCardFour: boolean
}

const MarketClosed = ({ isSingleExpandedCardFour }: MarketClosedProps) => {
    return (
        <div className={`${isSingleExpandedCardFour ? '!pb-0' : ''} pb-3 sm:pb-5`}>
            <div className="max-sm:overflow-x-auto">
                <table className="w-full max-sm:min-w-[450px]">
                    <thead>
                        <tr className="text-mediumsand bg-mediumslate text-xs !leading-[150%] font-medium tracking-normal uppercase">
                            <th className="rounded-tl-[10px] px-4 py-2.5 text-left">NAME</th>
                            <th className="px-4 py-2.5 text-left">24H</th>
                            <th className="px-4 py-2.5 text-left">7D</th>
                            <th className="rounded-tr-[10px] px-4 py-2.5 text-right">SENTIMENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MARKET_SNAPSHOT_DATA_LIST.slice(0, 5).map((market, i) => (
                            <tr key={i} className={`text-sm ${i % 2 === 0 ? 'bg-lightblack' : 'bg-mediumslate'}`}>
                                <td
                                    className={`px-4 py-4 ${i === MARKET_SNAPSHOT_DATA_LIST.slice(0, 5).length - 1 && 'rounded-bl-[10px]'}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <BitcoinWhite />
                                        <span className="text-richwhite text-sm font-medium tracking-normal">
                                            {market.name}
                                        </span>
                                        <span className="text-richslate text-xs font-normal tracking-normal">
                                            {market.symbol}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-2">
                                        {market.trend === 'up' ? <GreenRightArrowCircle /> : <RedDownArrowCircle />}
                                        <span className="text-richwhite text-left text-sm font-normal tracking-normal">
                                            1.09%
                                        </span>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-2">
                                        {market.trend === 'up' ? <GreenRightArrowCircle /> : <RedDownArrowCircle />}
                                        <span className="text-richwhite text-left text-sm font-normal tracking-normal">
                                            1.09%
                                        </span>
                                    </div>
                                </td>
                                <td
                                    className={`px-4 py-4 text-right ${i === MARKET_SNAPSHOT_DATA_LIST.slice(0, 5).length - 1 && 'rounded-br-[10px]'}`}
                                >
                                    <span
                                        className={`rounded-[30px] border bg-transparent px-2.5 py-0.5 text-xs !leading-[150%] font-medium tracking-normal ${
                                            market.trend === 'up'
                                                ? 'text-lightgreen border-lightgreen'
                                                : 'text-lightred border-lightred'
                                        }`}
                                    >
                                        {market.sentiment}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p
                className={`${isSingleExpandedCardFour ? 'block' : 'hidden'} text-offgrey text-custom-sm mx-auto rounded-[10px] pt-1.5 pb-1 text-center font-normal italic`}
            >
                Model-generated signals for informational use only. Not financial advice
            </p>
        </div>
    )
}

export default MarketClosed

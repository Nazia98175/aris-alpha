import { BitcoinWhite, GreenRightArrowCircle, RedDownArrowCircle } from '../home/Icons'
import { MARKET_SNAPSHOT_DATA_LIST } from './Helper'

const MarketOpen = () => {
    return (
        <div>
            <div className="overflow-x-auto md:overflow-x-visible">
                <table className="w-full min-w-[693px]">
                    <thead>
                        <tr className="text-mediumsand bg-mediumslate text-xs !leading-[150%] font-medium tracking-normal uppercase">
                            <th className="rounded-tl-[10px] py-2.5 pl-4 text-left">NAME</th>
                            <th className="px-4 py-2.5 text-left">24 HOUR</th>
                            <th className="py-2.5 pr-10 pl-4 text-center">7 DAY</th>
                            <th className="py-2.5 pr-10 pl-4 text-right text-nowrap">5 DAY</th>
                            <th className="py-2.5 pr-[52px] pl-4 text-right">COMMENTS</th>
                            <th className="rounded-tr-[10px] px-4 py-2.5 text-right">SENTIMENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MARKET_SNAPSHOT_DATA_LIST.map((market, i) => (
                            <tr key={i} className={`text-sm ${i % 2 === 0 ? 'bg-lightblack' : 'bg-mediumslate'}`}>
                                <td
                                    className={`px-4 py-4 ${i === MARKET_SNAPSHOT_DATA_LIST.length - 1 && 'rounded-bl-[10px]'}`}
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
                                <td className="px-4">
                                    <div className="flex items-center gap-2">
                                        {market.trend === 'up' ? <GreenRightArrowCircle /> : <RedDownArrowCircle />}
                                        <span className="text-richwhite text-left text-sm font-normal tracking-normal">
                                            1.09%
                                        </span>
                                    </div>
                                </td>
                                <td className="px-4">
                                    <div className="flex items-center justify-center gap-2">
                                        {market.trend === 'up' ? <GreenRightArrowCircle /> : <RedDownArrowCircle />}
                                        <span className="text-richwhite text-left text-sm font-normal tracking-normal">
                                            1.09%
                                        </span>
                                    </div>
                                </td>
                                <td className="px-4">
                                    <div className="flex items-center justify-end gap-2">
                                        {market.trend === 'up' ? <GreenRightArrowCircle /> : <RedDownArrowCircle />}
                                        <span className="text-richwhite text-left text-sm font-normal tracking-normal">
                                            1.09%
                                        </span>
                                    </div>
                                </td>
                                <td className="text-richwhite pl-4 text-right text-sm font-normal tracking-normal text-nowrap">
                                    {market.comment}
                                </td>
                                <td
                                    className={`px-4 text-right ${i === MARKET_SNAPSHOT_DATA_LIST.length - 1 && 'rounded-br-[10px]'}`}
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
            <p className="text-offgrey text-custom-sm mx-auto rounded-[10px] pt-[18px] pb-2.5 text-center font-normal italic">
                Model-generated signals for informational use only. Not financial advice
            </p>
        </div>
    )
}

export default MarketOpen

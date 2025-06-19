import { BitcoinWhite, GreenRightArrowCircle, RedDownArrowCircle } from '../home/Icons'

interface MarketSnapshotProps {
    expanded: boolean
}

const MarketSnapshot = ({ expanded }: MarketSnapshotProps) => {
    const markets = [
        { name: 'Bitcoin', symbol: 'BTC', sentiment: 'BULLISH', percentage: '109%', status: '109%', trend: 'up' },
        { name: 'Bitcoin', symbol: 'BTC', sentiment: 'BEARISH', percentage: '109%', status: '109%', trend: 'down' },
        { name: 'Bitcoin', symbol: 'BTC', sentiment: 'BULLISH', percentage: '109%', status: '109%', trend: 'up' },
        { name: 'Bitcoin', symbol: 'BTC', sentiment: 'BEARISH', percentage: '109%', status: '109%', trend: 'down' },
        { name: 'Bitcoin', symbol: 'BTC', sentiment: 'BULLISH', percentage: '109%', status: '109%', trend: 'up' },
    ]

    if (!expanded) {
        return (
            <div className=" rounded-[10px]">
                <table className="w-full">
                    <thead>
                        <tr className="text-mediumsand bg-mediumslate text-xs !leading-[150%] font-medium tracking-normal uppercase">
                            <th className="rounded-tl-[10px] py-2.5 pl-4 text-left">NAME</th>
                            <th className="py-2.5 text-left">24H</th>
                            <th className="py-2.5 pl-4 text-left">7D</th>
                            <th className="rounded-tr-[10px] py-2.5 pr-4 text-right">SENTIMENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {markets.slice(0, 5).map((market, i) => (
                            <tr key={i} className={`text-sm ${i % 2 === 0 ? 'bg-lightblack' : 'bg-mediumslate'}`}>
                                <td
                                    className={`py-4 pl-4 ${i === markets.slice(0, 5).length - 1 && 'rounded-bl-[10px]'}`}
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
                                <td>
                                    <div className="flex items-center gap-2">
                                        {market.trend === 'up' ? <GreenRightArrowCircle /> : <RedDownArrowCircle />}
                                        <span className="text-richwhite font-norma text-left tracking-normal">
                                            1.09%
                                        </span>
                                    </div>
                                </td>
                                <td className="pl-4">
                                    <div className="flex items-center gap-2">
                                        {market.trend === 'up' ? <GreenRightArrowCircle /> : <RedDownArrowCircle />}
                                        <span className="text-richwhite font-norma text-left tracking-normal">
                                            1.09%
                                        </span>
                                    </div>
                                </td>

                                <td
                                    className={`pr-4 text-right ${i === markets.slice(0, 5).length - 1 && 'rounded-br-[10px]'}`}
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
        )
    }

    return (
        <div>
            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-800 text-xs text-gray-500">
                        <th className="pb-3 text-left">NAME</th>
                        <th className="pb-3 text-right">1H</th>
                        <th className="pb-3 text-right">24H</th>
                        <th className="pb-3 text-right">7D</th>
                        <th className="pb-3 text-right">30D</th>
                        <th className="pb-3 text-right">SENTIMENT</th>
                        <th className="pb-3 text-right">MARKET CAP</th>
                        <th className="pb-3 text-right">VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                    {[...markets, ...markets].slice(0, 10).map((market, i) => (
                        <tr key={i} className="border-b border-gray-800 text-sm">
                            <td className="py-3">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500">
                                        <span className="font-bold text-black">₿</span>
                                    </div>
                                    <span className="text-white">{market.name}</span>
                                    <span className="text-gray-500">{market.symbol}</span>
                                </div>
                            </td>
                            <td className="text-right text-green-400">0.5%</td>
                            <td className="text-right text-green-400">1.09%</td>
                            <td className="text-right text-green-400">1.09%</td>
                            <td className="text-right text-red-400">-2.3%</td>
                            <td className="text-right">
                                <span
                                    className={`rounded px-3 py-1 text-xs ${
                                        market.sentiment === 'BULLISH'
                                            ? 'bg-green-500/20 text-green-400'
                                            : market.sentiment === 'BEARISH'
                                              ? 'bg-red-500/20 text-red-400'
                                              : 'bg-yellow-500/20 text-yellow-400'
                                    }`}
                                >
                                    {market.sentiment}
                                </span>
                            </td>
                            <td className="text-right text-gray-400">$1.2T</td>
                            <td className="text-right text-gray-400">$45B</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-offgrey mx-auto rounded-[10px] pt-[18px] pb-2.5 text-center font-normal italic">
                Model-generated signals for informational use only. Not financial advice
            </p>
        </div>
    )
}

export default MarketSnapshot

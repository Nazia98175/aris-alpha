interface MarketSnapshotProps {
    expanded: boolean
}

const MarketSnapshot = ({ expanded }: MarketSnapshotProps) => {
    const markets = [
        { name: 'Bitcoin', symbol: 'BTC', sentiment: 'BULLISH', percentage: '109%', status: '109%', trend: 'up' },
        { name: 'Bitcoin', symbol: 'BTC', sentiment: 'BULLISH', percentage: '109%', status: '109%', trend: 'up' },
        { name: 'Bitcoin', symbol: 'BTC', sentiment: 'NEUTRAL', percentage: '109%', status: '109%', trend: 'up' },
        { name: 'Bitcoin', symbol: 'BTC', sentiment: 'BEARISH', percentage: '109%', status: '109%', trend: 'down' },
        { name: 'Bitcoin', symbol: 'BTC', sentiment: 'BULLISH', percentage: '109%', status: '109%', trend: 'up' },
    ]

    if (!expanded) {
        return (
            <div className="space-y-2">
                <div className="mb-2 text-xs text-gray-400">Understand how the market&apos;s moving today.</div>
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-800 text-xs text-gray-500">
                            <th className="pb-2 text-left">NAME</th>
                            <th className="pb-2 text-right">24H</th>
                            <th className="pb-2 text-right">7D</th>
                            <th className="pb-2 text-right">SENTIMENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {markets.slice(0, 5).map((market, i) => (
                            <tr key={i} className="border-b border-gray-800 text-sm">
                                <td className="py-2">
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500">
                                            <span className="text-xs font-bold text-black">₿</span>
                                        </div>
                                        <span className="text-white">{market.name}</span>
                                        <span className="text-gray-500">{market.symbol}</span>
                                    </div>
                                </td>
                                <td className="text-right text-green-400">1.09%</td>
                                <td className="text-right text-green-400">1.09%</td>
                                <td className="text-right">
                                    <span
                                        className={`rounded px-2 py-1 text-xs ${
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
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-3 text-xs text-gray-500">
                    Model-generated signals for informational use only. Not financial advice.
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="mb-4 text-sm text-gray-400">Understand how the market&apos;s moving today.</div>
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
            <div className="mt-4 text-xs text-gray-500">
                Model-generated signals for informational use only. Not financial advice.
            </div>
        </div>
    )
}

export default MarketSnapshot

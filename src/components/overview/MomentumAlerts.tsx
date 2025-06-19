interface MomentumAlertsProps {
    expanded: boolean
}

const MomentumAlerts = ({ expanded }: MomentumAlertsProps) => {
    const alerts = [
        {
            time: '10:32 AM',
            coin: 'BTC',
            trigger: 'Volume Surge',
            desc: 'BTC volume spiked 2x the hourly average, indicating strong market activity.',
        },
        {
            time: '10:22 AM',
            coin: 'ETH',
            trigger: 'RSI Oversold (30)',
            desc: 'ETH may reverse - oversold levels seen on hourly RSI.',
        },
        {
            time: '10:32 AM',
            coin: 'SOL',
            trigger: 'MA Cross (10/50)',
            desc: 'Short-term bullish: 10DMA crossed above 50DMA.',
        },
        {
            time: '10:32 AM',
            coin: 'AVAX',
            trigger: 'Breakout ($38)',
            desc: 'AVAX volume spiked 2x hourly avg - possible breakout.',
        },
    ]

    if (!expanded) {
        return (
            <div className="space-y-2">
                <div className="mb-2 text-xs text-gray-400">Unfiltered alerts just as momentum builds.</div>
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-800 text-xs text-gray-500">
                            <th className="pb-2 text-left">TIMESTAMP</th>
                            <th className="pb-2 text-left">ASSET</th>
                            <th className="pb-2 text-left">TRIGGER</th>
                            <th className="pb-2 text-left">INSIGHT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alerts.map((alert, i) => (
                            <tr key={i} className="border-b border-gray-800 text-sm">
                                <td className="py-2 text-gray-400">{alert.time}</td>
                                <td className="py-2">
                                    <span
                                        className={`rounded px-2 py-1 text-xs ${
                                            alert.coin === 'BTC'
                                                ? 'bg-yellow-500/20 text-yellow-400'
                                                : alert.coin === 'ETH'
                                                  ? 'bg-purple-500/20 text-purple-400'
                                                  : alert.coin === 'SOL'
                                                    ? 'bg-pink-500/20 text-pink-400'
                                                    : 'bg-blue-500/20 text-blue-400'
                                        }`}
                                    >
                                        {alert.coin}
                                    </span>
                                </td>
                                <td className="py-2 text-white">{alert.trigger}</td>
                                <td className="py-2 text-xs text-gray-400">{alert.desc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-3 text-xs text-gray-500">
                    All alerts are informational and do not constitute a recommendation to buy or sell.
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="mb-4 text-sm text-gray-400">Unfiltered alerts just as momentum builds.</div>
            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-800 text-xs text-gray-500">
                        <th className="pb-3 text-left">TIMESTAMP</th>
                        <th className="pb-3 text-left">ASSET</th>
                        <th className="pb-3 text-left">TRIGGER</th>
                        <th className="pb-3 text-left">INSIGHT</th>
                        <th className="pb-3 text-left">PRICE</th>
                        <th className="pb-3 text-left">CHANGE</th>
                        <th className="pb-3 text-left">VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                    {[...alerts, ...alerts].map((alert, i) => (
                        <tr key={i} className="border-b border-gray-800 text-sm">
                            <td className="py-3 text-gray-400">{alert.time}</td>
                            <td className="py-3">
                                <span
                                    className={`rounded px-3 py-1 text-xs ${
                                        alert.coin === 'BTC'
                                            ? 'bg-yellow-500/20 text-yellow-400'
                                            : alert.coin === 'ETH'
                                              ? 'bg-purple-500/20 text-purple-400'
                                              : alert.coin === 'SOL'
                                                ? 'bg-pink-500/20 text-pink-400'
                                                : 'bg-blue-500/20 text-blue-400'
                                    }`}
                                >
                                    {alert.coin}
                                </span>
                            </td>
                            <td className="py-3 text-white">{alert.trigger}</td>
                            <td className="py-3 text-gray-400">{alert.desc}</td>
                            <td className="py-3 text-white">$68,245</td>
                            <td className="py-3 text-green-400">+2.3%</td>
                            <td className="py-3 text-gray-400">$1.2B</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 text-xs text-gray-500">
                All alerts are informational and do not constitute a recommendation to buy or sell.
            </div>
        </div>
    )
}

export default MomentumAlerts

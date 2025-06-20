interface MomentumAlertsProps {
    expanded: boolean
}

const MomentumAlerts = ({ expanded }: MomentumAlertsProps) => {
    const alerts = [
        {
            time: '10:32 AM',
            coin: 'BTC',
            trigger: 'Volume Surge',
            desc: 'BTC volume spiked 2x hourly avg — possible breakout.',
        },
        {
            time: '10:22 AM',
            coin: 'ETH',
            trigger: 'RSI Oversold (30)',
            desc: 'ETH may reverse — oversold levels seen on hourly RSI.',
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
        {
            time: '10:32 AM',
            coin: 'BTC',
            trigger: 'Volume Surge',
            desc: 'BTC volume spiked 2x hourly avg — possible breakout.',
        },
        {
            time: '10:22 AM',
            coin: 'ETH',
            trigger: 'RSI Oversold (30)',
            desc: 'ETH may reverse — oversold levels seen on hourly RSI.',
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
            <div className="pb-3 sm:pb-5 overflow-x-auto">
                <table className="w-full min-w-[580px]">
                    <thead>
                        <tr className="text-mediumsand bg-mediumslate text-xs !leading-[150%] font-medium tracking-normal uppercase">
                            <th className="rounded-tl-[10px] px-4 py-2.5 text-left">TIMESTAMP</th>
                            <th className="px-4 py-2.5 text-left">ASSET</th>
                            <th className="px-4 py-2.5 text-left">TRIGGER</th>
                            <th className="rounded-tr-[10px] px-4 py-2.5 text-left">INSIGHT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alerts.slice(0,4).map((alert, i) => (
                            <tr key={i} className={`${i % 2 === 0 ? 'bg-lightblack' : 'bg-mediumslate'}`}>
                                <td
                                    className={`text-richwhite px-4 py-4 sm:py-[18px] text-sm font-normal tracking-normal ${i === alerts.slice(0,4).length - 1 && 'rounded-bl-[10px]'}`}
                                >
                                    {alert.time}
                                </td>
                                <td className="px-4 py-4 sm:py-[18px]">
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
                                <td className="px-4 py-4 sm:py-[18px] text-sm font-normal tracking-normal">{alert.trigger}</td>
                                <td
                                    className={`px-4 py-4 sm:py-[18px] text-sm font-normal tracking-normal ${i === alerts.slice(0,4).length - 1 && 'rounded-br-[10px]'}`}
                                >
                                    {alert.desc}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div className="max-sm:overflow-x-auto sm:overflow-x-visible">
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
                    {alerts.map((alert, i) => (
                        <tr key={i} className={`${i % 2 === 0 ? 'bg-lightblack' : 'bg-mediumslate'}`}>
                            <td
                                className={`text-richwhite px-4 py-4 text-sm font-normal tracking-normal sm:py-[18px] ${i === alerts.length - 1 && 'rounded-bl-[10px]'}`}
                            >
                                {alert.time}
                            </td>
                            <td className="px-4 py-4 sm:py-[18px]">
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
                            <td className="px-4 py-4 text-sm font-normal tracking-normal sm:py-[18px]">
                                {alert.trigger}
                            </td>
                            <td
                                className={`px-4 py-4 text-sm font-normal tracking-normal sm:py-[18px] ${i === alerts.length - 1 && 'rounded-br-[10px]'}`}
                            >
                                {alert.desc}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="bg-richsand mt-4 mb-5 w-full rounded-md px-2.5 py-1.5">
                <p className="text-custom-sm text-mediumgrey font-normal tracking-normal italic">
                    All alerts are informational and do not constitute a recommendation to buy or sell.
                </p>
            </div>
        </div>
    )
}

export default MomentumAlerts

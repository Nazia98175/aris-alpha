'use client'
import { Maximize2, Minimize2, MoreVertical } from 'lucide-react'
import { useState } from 'react'
import { TestLayout } from '@/components/test/TestLayout'
import TabNavigation from '@/components/test/TabNavigation'

interface CardData {
    id: string
    title: string
    expanded: boolean
}

const Page = () => {
    const [cards, setCards] = useState<CardData[]>([
        { id: 'tactical', title: 'Tactical Signals', expanded: false },
        { id: 'market', title: 'Market Snapshot', expanded: false },
        { id: 'momentum', title: 'Momentum Alerts', expanded: false },
        { id: 'allocation', title: 'Allocation View', expanded: false },
    ])

    const toggleCard = (id: string) => {
        setCards((prev) => prev.map((card) => (card.id === id ? { ...card, expanded: !card.expanded } : card)))
    }

    const getCardClass = (card: CardData) => {
        if (card.expanded) return 'col-span-3'
        return 'col-span-1'
    }

    const renderTacticalSignals = (expanded: boolean) => {
        const signals = [
            { coin: 'Bitcoin', symbol: 'BTC', status: 'BUY', allocation: '15%', range: [420, 430], current: 425 },
            { coin: 'SPY', symbol: 'SPY', status: 'BUY', allocation: '10%', range: [420, 430], current: 425 },
            { coin: 'QQQ', symbol: 'QQQ', status: 'BUY', allocation: '15%', range: [420, 430], current: 425 },
            { coin: 'QQQ', symbol: 'QQQ', status: 'BUY', allocation: '15%', range: [420, 430], current: 425 },
        ]

        if (!expanded) {
            return (
                <div className="grid grid-cols-2 gap-3">
                    {signals.slice(0, 4).map((signal, i) => (
                        <div key={i} className="rounded-lg bg-gray-900 p-3">
                            <div className="mb-2 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500">
                                        <span className="text-xs font-bold text-black">₿</span>
                                    </div>
                                    <span className="text-sm text-white">{signal.coin}</span>
                                </div>
                                <span
                                    className={`rounded px-2 py-0.5 text-xs ${signal.status === 'BUY' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                                >
                                    {signal.status}
                                </span>
                            </div>
                            <div className="mb-2 flex items-center justify-between text-xs text-gray-400">
                                <span>Suggested Allocation</span>
                                <span className="text-green-400">↑ {signal.allocation}</span>
                            </div>
                            <div className="mb-3 flex items-center justify-between text-xs text-gray-400">
                                <span>Entry Range</span>
                                <span className="text-white">
                                    ${signal.range[0]}-${signal.range[1]}
                                </span>
                            </div>
                            <div className="h-12">
                                <svg viewBox="0 0 100 40" className="h-full w-full">
                                    <polyline
                                        fill="none"
                                        stroke="#10b981"
                                        strokeWidth="2"
                                        points="0,35 20,30 40,32 60,20 80,15 100,10"
                                    />
                                </svg>
                            </div>
                            <div className="mt-2 text-xs text-gray-500">
                                30% held support on weekly, cross momentum looking from $396 level.
                            </div>
                        </div>
                    ))}
                </div>
            )
        }

        return (
            <div className="grid grid-cols-4 gap-4">
                {[...signals, ...signals].map((signal, i) => (
                    <div key={i} className="rounded-lg bg-gray-900 p-4">
                        <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500">
                                    <span className="font-bold text-black">₿</span>
                                </div>
                                <div>
                                    <div className="text-white">{signal.coin}</div>
                                    <div className="text-xs text-gray-400">{signal.symbol}</div>
                                </div>
                            </div>
                            <span
                                className={`rounded px-3 py-1 text-sm ${signal.status === 'BUY' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                            >
                                {signal.status}
                            </span>
                        </div>
                        <div className="mb-3 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Suggested Allocation</span>
                                <span className="text-green-400">↑ {signal.allocation}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Entry Range</span>
                                <span className="text-white">
                                    ${signal.range[0]}-${signal.range[1]}
                                </span>
                            </div>
                        </div>
                        <div className="mb-3 h-16">
                            <svg viewBox="0 0 100 40" className="h-full w-full">
                                <polyline
                                    fill="none"
                                    stroke="#10b981"
                                    strokeWidth="2"
                                    points="0,35 20,30 40,32 60,20 80,15 100,10"
                                />
                            </svg>
                        </div>
                        <p className="text-xs text-gray-500">
                            30% held support on weekly, cross momentum looking from $396 level.
                        </p>
                    </div>
                ))}
            </div>
        )
    }

    const renderMarketSnapshot = (expanded: boolean) => {
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

    const renderMomentumAlerts = (expanded: boolean) => {
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

    const renderAllocationView = (expanded: boolean) => {
        const allocations = [
            {
                name: 'Equities',
                percentage: 45,
                color: 'bg-green-500',
                desc: 'Balanced exposure based on strong earnings momentum and improving macro data.',
            },
            {
                name: 'Crypto',
                percentage: 20,
                color: 'bg-orange-500',
                desc: 'Maintained current weight as BTC continues to respect key support and upside trend.',
            },
            {
                name: 'Fixed Income',
                percentage: 25,
                color: 'bg-purple-500',
                desc: 'Holding overweight position amid stable yields and defensive tilt in market sentiment.',
            },
            {
                name: 'Alternative',
                percentage: 10,
                color: 'bg-red-500',
                desc: 'Reduced slightly to fund tactical increases in equities and crypto.',
            },
        ]

        if (!expanded) {
            return (
                <div className="flex h-full flex-col">
                    <div className="mb-3 text-xs text-gray-400">
                        Know where you&apos;re positioned — and why it matters.
                    </div>
                    <div className="mb-4 flex flex-1 items-center justify-center">
                        <div className="relative h-48 w-48">
                            <svg viewBox="0 0 42 42" className="h-full w-full -rotate-90">
                                <circle
                                    cx="21"
                                    cy="21"
                                    r="15.915"
                                    fill="transparent"
                                    stroke="#374151"
                                    strokeWidth="3"
                                />
                                <circle
                                    cx="21"
                                    cy="21"
                                    r="15.915"
                                    fill="transparent"
                                    stroke="#10b981"
                                    strokeWidth="3"
                                    strokeDasharray="45 55"
                                    strokeDashoffset="0"
                                />
                                <circle
                                    cx="21"
                                    cy="21"
                                    r="15.915"
                                    fill="transparent"
                                    stroke="#f97316"
                                    strokeWidth="3"
                                    strokeDasharray="20 80"
                                    strokeDashoffset="-45"
                                />
                                <circle
                                    cx="21"
                                    cy="21"
                                    r="15.915"
                                    fill="transparent"
                                    stroke="#8b5cf6"
                                    strokeWidth="3"
                                    strokeDasharray="25 75"
                                    strokeDashoffset="-65"
                                />
                                <circle
                                    cx="21"
                                    cy="21"
                                    r="15.915"
                                    fill="transparent"
                                    stroke="#ef4444"
                                    strokeWidth="3"
                                    strokeDasharray="10 90"
                                    strokeDashoffset="-90"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">100%</div>
                                    <div className="text-xs text-gray-400">Total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {allocations.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className={`h-3 w-3 rounded-full ${item.color}`} />
                                <span className="text-xs text-gray-400">{item.name}</span>
                                <span className="ml-auto text-xs text-white">{item.percentage}%</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-3 text-xs text-gray-500">
                        Suggested allocations are model-based and not tailored to individual portfolios.
                    </div>
                </div>
            )
        }

        return (
            <div className="h-full">
                <div className="mb-4 text-sm text-gray-400">
                    Know where you&apos;re positioned — and why it matters.
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex items-center justify-center">
                        <div className="relative h-64 w-64">
                            <svg viewBox="0 0 42 42" className="h-full w-full -rotate-90">
                                <circle
                                    cx="21"
                                    cy="21"
                                    r="15.915"
                                    fill="transparent"
                                    stroke="#374151"
                                    strokeWidth="3"
                                />
                                <circle
                                    cx="21"
                                    cy="21"
                                    r="15.915"
                                    fill="transparent"
                                    stroke="#10b981"
                                    strokeWidth="3"
                                    strokeDasharray="45 55"
                                    strokeDashoffset="0"
                                />
                                <circle
                                    cx="21"
                                    cy="21"
                                    r="15.915"
                                    fill="transparent"
                                    stroke="#f97316"
                                    strokeWidth="3"
                                    strokeDasharray="20 80"
                                    strokeDashoffset="-45"
                                />
                                <circle
                                    cx="21"
                                    cy="21"
                                    r="15.915"
                                    fill="transparent"
                                    stroke="#8b5cf6"
                                    strokeWidth="3"
                                    strokeDasharray="25 75"
                                    strokeDashoffset="-65"
                                />
                                <circle
                                    cx="21"
                                    cy="21"
                                    r="15.915"
                                    fill="transparent"
                                    stroke="#ef4444"
                                    strokeWidth="3"
                                    strokeDasharray="10 90"
                                    strokeDashoffset="-90"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">100%</div>
                                    <div className="text-sm text-gray-400">Asset Allocation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {allocations.map((item, i) => (
                            <div key={i} className="rounded-lg bg-gray-900 p-4">
                                <div className="mb-2 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`h-4 w-4 rounded-full ${item.color}`} />
                                        <span className="font-medium text-white">{item.name}</span>
                                    </div>
                                    <span className="text-2xl font-bold text-white">{item.percentage}%</span>
                                </div>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 text-xs text-gray-500">
                    Suggested allocations are model-based and not tailored to individual portfolios.
                </div>
            </div>
        )
    }

    const renderCardContent = (card: CardData) => {
        switch (card.id) {
            case 'tactical':
                return renderTacticalSignals(card.expanded)
            case 'market':
                return renderMarketSnapshot(card.expanded)
            case 'momentum':
                return renderMomentumAlerts(card.expanded)
            case 'allocation':
                return renderAllocationView(card.expanded)
            default:
                return null
        }
    }

    // Sort cards to show expanded card first
    const sortedCards = [...cards].sort((a, b) => {
        if (a.expanded) return -1
        if (b.expanded) return 1
        return 0
    })

    return (
        <section className="min-h-screen bg-black p-6 text-white">
            <div className="mx-auto max-w-7xl">
                <div className={`grid gap-4 ${cards.some((c) => c.expanded) ? 'grid-cols-3' : 'grid-cols-2'}`}>
                    {sortedCards.map((card, index) => (
                        <div
                            key={index}
                            className={`rounded-xl border border-gray-800 bg-gray-950 p-4 ${getCardClass(card)}`}
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-lg font-semibold">{card.title}</h2>
                                <div className="flex items-center gap-2">
                                    <button className="text-gray-400 hover:text-white">
                                        <MoreVertical size={20} />
                                    </button>
                                    <button
                                        onClick={() => toggleCard(card.id)}
                                        className="text-gray-400 transition-colors hover:text-white"
                                    >
                                        {card.expanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-auto">{renderCardContent(card)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Page

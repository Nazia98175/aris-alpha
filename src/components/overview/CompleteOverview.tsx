'use client'
import AllocationView from '@/components/overview/AllocationView'
import MarketSnapshot from '@/components/overview/MarketSnapshot'
import MomentumAlerts from '@/components/overview/MomentumAlerts'
import TacticalSignals from '@/components/overview/TacticalSignals'
import { useState } from 'react'
import { Expand, Minimize } from '../home/Icons'

interface CardData {
    id: string
    title: string
    expanded: boolean
    description: string
}
const CompleteOverview = () => {
    const [cards, setCards] = useState<CardData[]>([
        { id: 'tactical', title: 'Tactical Signals', description: 'See what to act on — right now.', expanded: false },
        {
            id: 'market',
            title: 'Market Snapshot',
            description: 'Understand how the market’s moving today.',
            expanded: false,
        },
        {
            id: 'momentum',
            title: 'Momentum Alerts',
            description: 'Unfiltered alerts just as momentum builds.',
            expanded: false,
        },
        {
            id: 'allocation',
            title: 'Allocation View',
            description: "Know where you're positioned — and why it matters.",
            expanded: false,
        },
    ])

    const toggleCard = (id: string) => {
        setCards((prev) => prev.map((card) => (card.id === id ? { ...card, expanded: !card.expanded } : card)))
    }

    const getCardClass = (card: CardData, index: number) => {
        if (card.expanded) return 'col-span-3'
        // When not expanded and in 2-column grid, make first and third cards wider
        if (!cards.some((c) => c.expanded)) {
            return index === 0 || index === 2 ? 'xl:col-span-3' : 'col-span-2'
        }
        return 'col-span-1'
    }

    const renderCardContent = (card: CardData) => {
        switch (card.id) {
            case 'tactical':
                return <TacticalSignals expanded={card.expanded} />
            case 'market':
                return <MarketSnapshot expanded={card.expanded} />
            case 'momentum':
                return <MomentumAlerts expanded={card.expanded} />
            case 'allocation':
                return <AllocationView expanded={card.expanded} />
            default:
                return null
        }
    }

    const sortedCards = [...cards].sort((a, b) => {
        if (a.expanded) return -1
        if (b.expanded) return 1
        return 0
    })

    return (
        <div className="w-full">
            <div
                className={`grid max-xl:gap-y-4 xl:gap-4 ${cards.some((c) => c.expanded) ? 'grid-cols-3' : 'grid-cols-1 xl:grid-cols-5'}`}
            >
                {sortedCards.map((card, index) => (
                    <div
                        key={index}
                        className={`border-sand bg-darker rounded-xl border pt-3 px-3 sm:pt-5 sm:px-5 ${getCardClass(card, index)}`}
                    >
                        <div className="mb-5 flex justify-between">
                            <div>
                                <h2 className="text-lg !leading-[120%] font-medium tracking-normal text-white sm:text-xl">
                                    {card.title}
                                </h2>
                                <p className='mt-2 font-normal text-sm !leading-[128%] tracking-normal text-offwhite'>{card.description}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => toggleCard(card.id)}>
                                    {card.expanded ? (
                                        <Minimize className="max-sm:size-5" />
                                    ) : (
                                        <Expand className="max-sm:size-5" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="overflow-auto">{renderCardContent(card)}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompleteOverview

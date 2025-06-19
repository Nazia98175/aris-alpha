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
}
const CompleteOverview = () => {
    const [cards, setCards] = useState<CardData[]>([
        { id: 'tactical', title: 'Tactical Signals', expanded: false },
        { id: 'market', title: 'Market Snapshot', expanded: false },
        { id: 'momentum', title: 'Momentum Alerts', expanded: false },
        { id: 'allocation', title: 'Allocation View', expanded: false },
    ])

    const toggleCard = (id: string) => {
        setCards((prev) => prev.map((card) => (card.id === id ? { ...card, expanded: !card.expanded } : card)))
    }

    const getCardClass = (card: CardData, index: number) => {
        if (card.expanded) return 'col-span-3'
        // When not expanded and in 2-column grid, make first and third cards wider
        if (!cards.some(c => c.expanded)) {
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

    // Sort cards to show expanded card first
    const sortedCards = [...cards].sort((a, b) => {
        if (a.expanded) return -1
        if (b.expanded) return 1
        return 0
    })

    return (
        <div className="w-full">
            <div className={`grid max-xl:gap-y-4 xl:gap-4 ${cards.some((c) => c.expanded) ? 'grid-cols-3' : 'grid-cols-1 xl:grid-cols-5'}`}>
                {sortedCards.map((card, index) => (
                    <div key={index} className={`border-sand bg-darker rounded-xl border p-3 sm:p-5 ${getCardClass(card,index)}`}>
                        <div className="mb-5 flex justify-between">
                            <h2 className="text-lg sm:text-xl !leading-[120%] font-medium tracking-normal text-white">
                                {card.title}
                            </h2>
                            <div className="flex items-center gap-2">
                                <button onClick={() => toggleCard(card.id)}>
                                    {card.expanded ? <Minimize className='max-sm:size-5' /> : <Expand className='max-sm:size-5' />}
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

'use client'
import AllocationView from '@/components/overview/AllocationView'
import { CardData, OVERVIEW_CARDS_DATA } from '@/components/overview/Helper'
import MarketSnapshot from '@/components/overview/MarketSnapshot'
import MomentumAlerts from '@/components/overview/MomentumAlerts'
import TacticalSignals from '@/components/overview/TacticalSignals'
import { useState } from 'react'
import SortedCards from './SortedCards'

const CompleteOverview = () => {
    const [cards, setCards] = useState<CardData[]>(OVERVIEW_CARDS_DATA)

    const toggleCard = (id: string) => {
        setCards((prev) =>
            prev.map((card) => {
                if (card.id === id) {
                    return { ...card, expanded: !card.expanded }
                } else {
                    return { ...card, expanded: false }
                }
            }),
        )
    }

    /**
      @param card 
      @param expandedCards 
      @returns
     */
    const getCardClass = (card: CardData, expandedCards: CardData[]) => {
        const expandedCount = expandedCards.length
        const isExpanded = card.expanded
        let colSpanClass = ''

        switch (expandedCount) {
            case 0:
                const cardIndex = cards.findIndex((c) => c.id === card.id)
                colSpanClass = cardIndex === 0 || cardIndex === 2 ? 'xl:col-span-3' : 'col-span-2'
                break

            case 1:
                const expandedCard = expandedCards[0]

                if (isExpanded) {
                    colSpanClass = 'col-span-12'
                } else {
                    switch (expandedCard.id) {
                        case 'tactical':
                            if (card.id === 'market') colSpanClass = 'col-span-12 xl:col-span-5'
                            else if (card.id === 'momentum') colSpanClass = 'col-span-12 xl:col-span-4'
                            else if (card.id === 'allocation') colSpanClass = 'col-span-12 xl:col-span-3'
                            break
                        case 'market':
                            if (card.id === 'tactical') colSpanClass = 'col-span-12 xl:col-span-4'
                            else if (card.id === 'momentum') colSpanClass = 'col-span-12 xl:col-span-5'
                            else if (card.id === 'allocation') colSpanClass = 'col-span-12 xl:col-span-3'
                            break
                        case 'momentum':
                            if (card.id === 'tactical') colSpanClass = 'col-span-12 xl:col-span-4'
                            else if (card.id === 'market') colSpanClass = 'col-span-12 xl:col-span-5'
                            else if (card.id === 'allocation') colSpanClass = 'col-span-12 xl:col-span-3'
                            break
                        case 'allocation':
                            if (card.id === 'tactical') colSpanClass = 'col-span-12 xl:col-span-3'
                            else if (card.id === 'market') colSpanClass = 'col-span-12 xl:col-span-5'
                            else if (card.id === 'momentum') colSpanClass = 'col-span-12 xl:col-span-4'
                            break
                        default:
                            colSpanClass = 'col-span-12 xl:col-span-4'
                    }
                }
                break

            default:
                colSpanClass = 'col-span-12'
        }

        return colSpanClass
    }

    const renderCardContent = (card: CardData) => {
        const isSingleExpanded = expandedCards.length === 1
        const isSingleExpandedCardOne = expandedCards.length === 1 && expandedCards[0].id === 'tactical'
        const isSingleExpandedCardTwo = expandedCards.length === 1 && expandedCards[0].id === 'market'
        const isSingleExpandedCardThree = expandedCards.length === 1 && expandedCards[0].id === 'momentum'
        const isSingleExpandedCardFour = expandedCards.length === 1 && expandedCards[0].id === 'allocation'

        switch (card.id) {
            case 'tactical':
                return (
                    <TacticalSignals
                        isSingleExpandedCardFour={isSingleExpandedCardFour}
                        isSingleExpanded={isSingleExpanded}
                        expanded={card.expanded}
                    />
                )
            case 'market':
                return <MarketSnapshot isSingleExpandedCardFour={isSingleExpandedCardFour} expanded={card.expanded} />
            case 'momentum':
                return <MomentumAlerts isSingleExpandedCardOne={isSingleExpandedCardOne} expanded={card.expanded} />
            case 'allocation':
                return (
                    <AllocationView
                        isSingleExpanded={isSingleExpanded}
                        isSingleExpandedCardOne={isSingleExpandedCardOne}
                        isSingleExpandedCardTwo={isSingleExpandedCardTwo}
                        isSingleExpandedCardThree={isSingleExpandedCardThree}
                        expanded={card.expanded}
                    />
                )
            default:
                return null
        }
    }

    const expandedCards = cards.filter((card) => card.expanded)

    const sortedCards = [...cards].sort((a, b) => {
        if (a.expanded && !b.expanded) return -1
        if (!a.expanded && b.expanded) return 1
        return 0
    })

    return (
        <div className="w-full">
            <SortedCards
                cards={cards}
                expandedCards={expandedCards}
                sortedCards={sortedCards}
                getCardClass={getCardClass}
                toggleCard={toggleCard}
                renderCardContent={renderCardContent}
            />
        </div>
    )
}

export default CompleteOverview

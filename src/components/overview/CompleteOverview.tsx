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
    // State management for all 4 cards with their default properties
    const [cards, setCards] = useState<CardData[]>([
        { id: 'tactical', title: 'Tactical Signals', description: 'See what to act on — right now.', expanded: false },
        {
            id: 'market',
            title: 'Market Snapshot',
            description: "Understand how the market's moving today.",
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

    /**
     * Calculate column span class for each card based on expansion state
     * Uses a 12-column grid system for maximum flexibility
     *
     * @param card - The current card to calculate spans for
     * @param expandedCards - Array of currently expanded cards
     * @returns Tailwind CSS column span class
     */
    const getCardClass = (card: CardData, expandedCards: CardData[]) => {
        const expandedCount = expandedCards.length // How many cards are currently expanded
        const isExpanded = card.expanded // Is this specific card expanded?

        let colSpanClass = ''

        switch (expandedCount) {
            // ========================================
            // SCENARIO 1: NO CARDS EXPANDED (Default Layout)
            // ========================================
            case 0:
                // Default layout when nothing is expanded
                // Tactical (index 0) and Momentum (index 2) get 3 columns on xl screens
                // Market (index 1) and Allocation (index 3) get 2 columns
                const cardIndex = cards.findIndex((c) => c.id === card.id)
                colSpanClass = cardIndex === 0 || cardIndex === 2 ? 'xl:col-span-3' : 'col-span-2'
                break

            // ========================================
            // SCENARIO 2: ONE CARD EXPANDED
            // ========================================
            case 1:
                const expandedCard = expandedCards[0]

                if (isExpanded) {
                    // Expanded card always takes full width
                    colSpanClass = 'col-span-12'
                } else {
                    // Custom logic for the 3 non-expanded cards when one is expanded
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

            // ========================================
            // SCENARIO 3: TWO CARDS EXPANDED
            // ========================================
            case 2:
                if (isExpanded) {
                    // THE 2 EXPANDED CARDS: Custom distribution based on card combination
                    // Each combination has optimized spans for best visual balance
                    const otherExpandedCard = expandedCards.find((c) => c.id !== card.id)
                    const combination = [card.id, otherExpandedCard?.id].sort().join('-')

                    switch (combination) {
                        case 'market-tactical': // Tactical + Market
                            colSpanClass = card.id === 'tactical' ? 'col-span-12' : 'col-span-12'
                            break
                        case 'momentum-tactical': // Tactical + Momentum
                            colSpanClass = card.id === 'tactical' ? 'col-span-12' : 'col-span-12'
                            break
                        case 'allocation-tactical': // Tactical + Allocation
                            colSpanClass = card.id === 'tactical' ? 'col-span-12' : 'col-span-12'
                            break
                        case 'market-momentum': // Market + Momentum
                            colSpanClass = card.id === 'market' ? 'col-span-12' : 'col-span-12'
                            break
                        case 'allocation-market': // Market + Allocation
                            colSpanClass = card.id === 'market' ? 'col-span-12' : 'col-span-12'
                            break
                        case 'allocation-momentum': // Momentum + Allocation
                            colSpanClass = card.id === 'momentum' ? 'col-span-12' : 'col-span-12'
                            break
                        default:
                            colSpanClass = 'col-span-12' // Fallback: equal split
                    }
                } else {
                    // THE 2 NON-EXPANDED CARDS: Share remaining space equally (6 columns each)
                    colSpanClass = 'col-span-12 xl:col-span-6'
                }
                break

            // ========================================
            // SCENARIO 4: THREE CARDS EXPANDED
            // ========================================
            case 3:
                if (isExpanded) {
                    // THE 3 EXPANDED CARDS: Variable spans based on which card is NOT expanded
                    // The non-expanded card influences how the expanded ones are distributed
                    const nonExpandedCard = cards.find((c) => !c.expanded)

                    switch (nonExpandedCard?.id) {
                        case 'tactical':
                            // When ONLY tactical is collapsed: Market(5) + Momentum(4) + Allocation(3) = 12
                            switch (card.id) {
                                case 'market':
                                    colSpanClass = 'col-span-12'
                                    break
                                case 'momentum':
                                    colSpanClass = 'col-span-12'
                                    break
                                case 'allocation':
                                    colSpanClass = 'col-span-12'
                                    break
                            }
                            break
                        case 'market':
                            // When ONLY market is collapsed: Tactical(6) + Momentum(3) + Allocation(3) = 12
                            switch (card.id) {
                                case 'tactical':
                                    colSpanClass = 'col-span-12'
                                    break
                                case 'momentum':
                                    colSpanClass = 'col-span-12'
                                    break
                                case 'allocation':
                                    colSpanClass = 'col-span-12'
                                    break
                            }
                            break
                        case 'momentum':
                            // When ONLY momentum is collapsed: All expanded cards get equal space (4 each)
                            switch (card.id) {
                                case 'tactical':
                                    colSpanClass = 'col-span-12'
                                    break
                                case 'market':
                                    colSpanClass = 'col-span-12'
                                    break
                                case 'allocation':
                                    colSpanClass = 'col-span-12'
                                    break
                            }
                            break
                        case 'allocation':
                            // When ONLY allocation is collapsed: Tactical(5) + Market(4) + Momentum(3) = 12
                            switch (card.id) {
                                case 'tactical':
                                    colSpanClass = 'col-span-12'
                                    break
                                case 'market':
                                    colSpanClass = 'col-span-12'
                                    break
                                case 'momentum':
                                    colSpanClass = 'col-span-12'
                                    break
                            }
                            break
                        default:
                            colSpanClass = 'col-span-4' // Fallback: equal distribution
                    }
                } else {
                    // THE 1 NON-EXPANDED CARD: Gets full width (takes a full row)
                    colSpanClass = 'col-span-12'
                }
                break

            // ========================================
            // SCENARIO 5: ALL FOUR CARDS EXPANDED
            // ========================================
            case 4:
                // All cards expanded: Equal distribution (3 columns each = 12 total)
                colSpanClass = 'col-span-12'
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

    // Get all currently expanded cards for calculation purposes
    const expandedCards = cards.filter((card) => card.expanded)

    /**
     * Sort cards to show expanded ones first
     * This ensures expanded cards appear at the top/left of the layout
     */
    const sortedCards = [...cards].sort((a, b) => {
        if (a.expanded && !b.expanded) return -1 // Expanded cards come first
        if (!a.expanded && b.expanded) return 1 // Non-expanded cards come after
        return 0 // Keep original order for same type
    })

    /**
     * Dynamic grid system based on how many cards are expanded
     * - No expansion: Uses 5-column grid on xl screens, 1-column on smaller screens
     * - Any expansion: Uses 12-column grid for maximum flexibility
     */
    const getGridClass = () => {
        const expandedCount = expandedCards.length

        switch (expandedCount) {
            case 0:
                // Default layout: 5 columns on large screens, 1 column on mobile
                return 'grid-cols-1 xl:grid-cols-5'
            case 1:
            case 2:
            case 3:
            case 4:
                // All expansion scenarios use 12-column grid for precise control
                return 'grid-cols-12'
            default:
                return 'grid-cols-12 gap-4'
        }
    }
    const singleExpanded = expandedCards.length === 1

    return (
        <div className="w-full">
            <div className={`grid max-xl:gap-y-4 xl:gap-4 ${getGridClass()}`}>
                {sortedCards.map((card) => (
                    <div
                        key={card.id} // Use card.id instead of index to prevent React key issues
                        className={`border-sand bg-darker rounded-xl border px-3 pt-3 sm:px-5 sm:pt-5 ${getCardClass(card, expandedCards)}`}
                    >
                        {/* Card Header: Title, description, and expand/collapse button */}
                        <div className={`${singleExpanded && 'items-start'} mb-5 flex justify-between`}>
                            <div>
                                <h2 className="text-lg !leading-[120%] font-medium tracking-normal text-white sm:text-xl">
                                    {card.title}
                                </h2>
                                <p className="text-offwhite mt-2 text-sm !leading-[128%] font-normal tracking-normal">
                                    {card.description}
                                </p>
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

                        <div>{renderCardContent(card)}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompleteOverview

'use client'
import { CardData } from '@/components/overview/Helper'
import { Expand, Minimize } from '../home/Icons'

interface Props {
    cards: CardData[]
    expandedCards: CardData[]
    sortedCards: CardData[]
    getCardClass: (card: CardData, expandedCards: CardData[]) => string
    toggleCard: (id: string) => void
    renderCardContent: (card: CardData) => React.ReactNode
}

const SortedCards = ({ expandedCards, sortedCards, getCardClass, toggleCard, renderCardContent }: Props) => {
    const singleExpanded = expandedCards.length === 1

    const getGridClass = () => {
        switch (expandedCards.length) {
            case 0:
                return 'grid-cols-1 xl:grid-cols-5'
            case 1:
            case 2:
            case 3:
            case 4:
                return 'grid-cols-12'
            default:
                return 'grid-cols-12 gap-4'
        }
    }

    return (
        <div className={`grid max-xl:gap-y-4 xl:gap-4 ${getGridClass()}`}>
            {sortedCards.map((card) => (
                <div
                    key={card.id}
                    className={`border-sand bg-darker rounded-xl border px-3 pt-3 sm:px-5 sm:pt-5 ${getCardClass(
                        card,
                        expandedCards,
                    )}`}
                >
                    <div className={`${singleExpanded ? 'items-start' : ''} mb-5 flex justify-between`}>
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
    )
}

export default SortedCards

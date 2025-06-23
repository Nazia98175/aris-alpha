import MarketClosed from './MarketClosed'
import MarketOpen from './MarketOpen'

interface MarketSnapshotProps {
    expanded: boolean
    isSingleExpandedCardFour: boolean
    isSingleExpandedCardOne: boolean
}

const MarketSnapshot = ({ expanded, isSingleExpandedCardFour, isSingleExpandedCardOne }: MarketSnapshotProps) => {
    if (!expanded) {
        return (
            <MarketClosed
                isSingleExpandedCardOne={isSingleExpandedCardOne}
                isSingleExpandedCardFour={isSingleExpandedCardFour}
            />
        )
    }

    return <MarketOpen />
}

export default MarketSnapshot

import MarketClosed from './MarketClosed'
import MarketOpen from './MarketOpen'

interface MarketSnapshotProps {
    expanded: boolean
    isSingleExpandedCardFour: boolean
}

const MarketSnapshot = ({ expanded, isSingleExpandedCardFour }: MarketSnapshotProps) => {
    if (!expanded) {
        return <MarketClosed isSingleExpandedCardFour={isSingleExpandedCardFour} />
    }

    return <MarketOpen />
}

export default MarketSnapshot

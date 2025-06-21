import TacticClosed from './TacticClosed'
import TacticOpen from './TacticOpen'

interface TacticalSignalsProps {
    expanded: boolean
    isSingleExpanded: boolean
    isSingleExpandedCardFour: boolean
}

const TacticalSignals = ({ expanded, isSingleExpanded, isSingleExpandedCardFour }: TacticalSignalsProps) => {
    if (!expanded) {
        return <TacticClosed isSingleExpanded={isSingleExpanded} isSingleExpandedCardFour={isSingleExpandedCardFour} />
    }

    return <TacticOpen />
}

export default TacticalSignals

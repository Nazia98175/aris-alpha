import TacticClosed from './TacticClosed'
import TacticOpen from './TacticOpen'

interface TacticalSignalsProps {
    expanded: boolean
    isSingleExpanded: boolean
    isSingleExpandedCardFour: boolean
    isSingleExpandedCardTwo: boolean
    isSingleExpandedCardThree: boolean
}

const TacticalSignals = ({
    expanded,
    isSingleExpanded,
    isSingleExpandedCardFour,
    isSingleExpandedCardTwo,
    isSingleExpandedCardThree,
}: TacticalSignalsProps) => {
    if (!expanded) {
        return (
            <TacticClosed
                isSingleExpandedCardThree={isSingleExpandedCardThree}
                isSingleExpandedCardTwo={isSingleExpandedCardTwo}
                isSingleExpanded={isSingleExpanded}
                isSingleExpandedCardFour={isSingleExpandedCardFour}
            />
        )
    }

    return <TacticOpen />
}

export default TacticalSignals

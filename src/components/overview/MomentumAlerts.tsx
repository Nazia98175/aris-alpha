import MomentumClosed from './MomentumClosed'
import MomentumOpen from './MomentumOpen'

interface MomentumAlertsProps {
    expanded: boolean
    isSingleExpandedCardOne: boolean
    isSingleExpanded:boolean
}
const MomentumAlerts = ({ expanded, isSingleExpandedCardOne, isSingleExpanded }: MomentumAlertsProps) => {
    if (!expanded) {
        return <MomentumClosed isSingleExpanded={isSingleExpanded} isSingleExpandedCardOne={isSingleExpandedCardOne} />
    }

    return <MomentumOpen />
}

export default MomentumAlerts

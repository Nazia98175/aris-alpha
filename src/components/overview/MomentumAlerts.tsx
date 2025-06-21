import MomentumClosed from './MomentumClosed'
import MomentumOpen from './MomentumOpen'

interface MomentumAlertsProps {
    expanded: boolean
    isSingleExpandedCardOne: boolean
}
const MomentumAlerts = ({ expanded, isSingleExpandedCardOne }: MomentumAlertsProps) => {
    if (!expanded) {
        return <MomentumClosed isSingleExpandedCardOne={isSingleExpandedCardOne} />
    }

    return <MomentumOpen />
}

export default MomentumAlerts

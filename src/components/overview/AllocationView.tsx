import AllocationClosed from './AllocationClosed'
import AllocationOpen from './AllocationOpen'

interface AllocationViewProps {
    expanded: boolean
    isSingleExpandedCardThree: boolean
    isSingleExpandedCardTwo: boolean
    isSingleExpandedCardOne: boolean
    isSingleExpanded:boolean
}

const AllocationView = ({
    expanded,
    isSingleExpanded,
    isSingleExpandedCardThree,
    isSingleExpandedCardTwo,
    isSingleExpandedCardOne,
}: AllocationViewProps) => {
    if (!expanded) {
        return (
            <AllocationClosed
                isSingleExpanded={isSingleExpanded}
                isSingleExpandedCardOne={isSingleExpandedCardOne}
                isSingleExpandedCardTwo={isSingleExpandedCardTwo}
                isSingleExpandedCardThree={isSingleExpandedCardThree}
            />
        )
    }

    return <AllocationOpen />
}

export default AllocationView

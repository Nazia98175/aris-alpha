import AllocationClosed from './AllocationClosed'
import AllocationOpen from './AllocationOpen'

interface AllocationViewProps {
    expanded: boolean
    isSingleExpandedCardThree: boolean
    isSingleExpandedCardTwo: boolean
    isSingleExpandedCardOne: boolean
}

const AllocationView = ({
    expanded,
    isSingleExpandedCardThree,
    isSingleExpandedCardTwo,
    isSingleExpandedCardOne,
}: AllocationViewProps) => {
    if (!expanded) {
        return (
            <AllocationClosed
                isSingleExpandedCardOne={isSingleExpandedCardOne}
                isSingleExpandedCardTwo={isSingleExpandedCardTwo}
                isSingleExpandedCardThree={isSingleExpandedCardThree}
            />
        )
    }

    return <AllocationOpen />
}

export default AllocationView

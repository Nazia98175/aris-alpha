import CompleteOverview from '@/components/overview/CompleteOverview'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Aris Alpha | Overview ',
    description: 'Real-time trading dashboard with candlestick charts, market insights, and portfolio analytics.',
}
const page = () => {
    return (
        <div className="bg-fadeblack min-h-screen px-4 pt-10 pb-14 lg:px-6">
            <div className="mx-auto w-full max-w-[1360px]">
                <CompleteOverview />
            </div>
        </div>
    )
}

export default page

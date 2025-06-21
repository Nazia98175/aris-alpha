import Image from 'next/image'

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
    const allocations = [
        {
            name: 'Equities',
            percentage: '45%',
            color: 'bg-lightgreen/10',
            border: 'border-lightgreen',
            desc: 'Raised exposure based on strong earnings momentum and improving macro data.',
        },
        {
            name: 'Crypto',
            percentage: '20%',
            color: 'bg-brown/10',
            border: 'border-brown',
            desc: 'Maintained current weight as BTC continues to respect key support and upside trend.',
        },
        {
            name: 'Fixed Income',
            percentage: '25%',
            color: 'bg-darkpurple/10',
            border: 'border-darkpurple',
            desc: 'Holding overweight position amid stable yields and defensive tilt in market sentiment.',
        },
        {
            name: 'Alternative',
            percentage: '10%',
            color: 'bg-mediumred/10',
            border: 'border-mediumred',
            desc: 'Reduced slightly to fund tactical increases in equities and crypto.',
        },
    ]

    if (!expanded) {
        return (
            <div
                className={`${isSingleExpandedCardOne ? 'min-h-[298px]' : ''} ${isSingleExpandedCardTwo ? 'min-h-[260px]' : ''} ${isSingleExpandedCardThree ? 'min-h-[298px]' : ''} flex h-full w-full flex-col justify-between gap-5 pb-3 sm:pb-5 xl:gap-3.5`}
            >
                <div className="max-xs:flex-col xs:justify-between mt-6 flex w-full max-w-[550px] items-center gap-5 sm:gap-8 xl:max-w-[436px]">
                    <div className="xs:max-w-[256px] xs:max-h-[229px] max-xs:max-w-[290px] relative aspect-[256/229] w-full">
                        <Image
                            src="/assets/dashboard/webp/allocated.webp"
                            alt="percentage chart"
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-2">
                                <div className="bg-lightblue h-2.5 w-2.5 rounded-full"></div>
                                <span className="text-richwhite text-sm !leading-[104.4%] font-normal tracking-normal">
                                    Equities
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-darkred h-2.5 w-2.5 rounded-full"></div>
                                <span className="text-richwhite text-sm !leading-[104.4%] font-normal tracking-normal">
                                    ETFs
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-2">
                                <div className="bg-lightorange h-2.5 w-2.5 rounded-full"></div>
                                <span className="text-richwhite text-sm !leading-[104.4%] font-normal tracking-normal">
                                    Crypto
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-darkgreen h-2.5 w-2.5 rounded-full"></div>
                                <span className="text-richwhite text-sm !leading-[104.4%] font-normal tracking-normal">
                                    Cash
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-richsand w-full rounded-md px-2.5 py-1.5">
                    <p className="text-custom-sm text-mediumgrey font-normal tracking-normal italic">
                        Suggested allocations are model-based and not tailored to individual portfolios.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="h-full">
            <div className="bg-darkgrey rounded-[10px] p-3 sm:p-5">
                <div className="flex flex-col">
                    <span className="text-richwhite text-sm font-normal tracking-normal">Asset Allocation</span>
                    <span className="text-richwhite text-2xl font-semibold tracking-normal">100%</span>
                </div>
                <div className="xs:grid-cols-4 mt-5 grid w-full grid-cols-2 items-end gap-4 md:gap-6">
                    {allocations.map((obj, index) => (
                        <div key={index} className="w-full max-w-[293px]">
                            <div className="flex flex-col gap-4">
                                <div
                                    className={`flex items-end justify-center border-t-2 ${obj.border} ${obj.color} ${index === 0 && 'h-[213px]'} ${index === 1 && 'h-[143px]'} ${index === 2 && 'h-[169px]'} ${index === 3 && 'h-[82px]'} `}
                                >
                                    <div className="mb-4 flex items-center gap-1 px-4 max-lg:flex-col lg:mb-6 lg:gap-5 xl:gap-8">
                                        <span className="text-tealgreen text-xs !leading-[150%] font-normal tracking-normal max-lg:text-center">
                                            {obj.name}
                                        </span>
                                        <span className="text-base font-semibold tracking-normal text-white md:text-lg">
                                            {obj.percentage}
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-darkslate w-full rounded-md px-2.5 py-1.5">
                                    <p className="text-custom-sm text-richwhite mx-auto line-clamp-2 max-w-[273px] text-center font-normal tracking-normal italic">
                                        {obj.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-richsand mt-4 mb-5 w-fit rounded-md px-2.5 py-1.5">
                <p className="text-custom-sm text-mediumgrey font-normal tracking-normal italic">
                    Suggested allocations are model-based and not tailored to individual portfolios.
                </p>
            </div>
        </div>
    )
}

export default AllocationView

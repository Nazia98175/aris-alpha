import Image from 'next/image'

interface AllocationClosedProps {
    isSingleExpandedCardOne: boolean
    isSingleExpandedCardTwo: boolean
    isSingleExpandedCardThree: boolean
}
const AllocationClosed = ({
    isSingleExpandedCardOne,
    isSingleExpandedCardTwo,
    isSingleExpandedCardThree,
}: AllocationClosedProps) => {
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

export default AllocationClosed

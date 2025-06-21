import { ALLOCATION_DATA_LIST } from './Helper'

const AllocationOpen = () => {
    return (
        <div className="h-full">
            <div className="bg-darkgrey rounded-[10px] p-3 sm:p-5">
                <div className="flex flex-col">
                    <span className="text-richwhite text-sm font-normal tracking-normal">Asset Allocation</span>
                    <span className="text-richwhite text-2xl font-semibold tracking-normal">100%</span>
                </div>
                <div className="xs:grid-cols-4 mt-5 grid w-full grid-cols-2 items-end gap-4 md:gap-6">
                    {ALLOCATION_DATA_LIST.map((obj, index) => (
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

export default AllocationOpen

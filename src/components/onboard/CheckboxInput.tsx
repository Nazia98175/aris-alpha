import React from 'react'

interface CheckboxInputProps {
    id: string
    title: string
    desc?: string
    icon?: React.ReactNode
    value?: string
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ id, title, desc, icon, value }) => {
    return (
        <label
            htmlFor={id}
            className="group flex w-full cursor-pointer items-center justify-between gap-2 rounded-2xl bg-[#FCF6F1] p-3 backdrop-blur-lg md:p-4"
        >
            <div className="flex w-full items-center gap-3">
                {icon ? (
                    <span className="inline-block h-full max-h-[42px] w-full max-w-[42px] rounded-full bg-[#E7E7F1] p-2.5 backdrop-blur-[64px]">
                        {icon}
                    </span>
                ) : (
                    <span className="h-[42px] w-[42px] min-w-[42px] rounded-full border-[1.5px] border-[#3F3F3F]"></span>
                )}

                <div className="w-full space-y-0.5 sm:space-y-1">
                    <h4 className="text-base leading-[130%] font-semibold text-[#010101] sm:text-lg sm:text-nowrap">
                        {title}
                    </h4>
                    {desc && <p className="text-xs leading-[150%] text-[#3F3F3F] sm:text-sm sm:text-nowrap">{desc}</p>}
                </div>
            </div>
            <div className="relative">
                <input type="checkbox" className="peer sr-only" id={id} value={value} />
                <div className="h-6 w-6 rounded-full border-2 border-[#3F3F3F] transition-all duration-200 peer-checked:border-[#2A64F6] peer-checked:bg-[#2A64F6]">
                    <svg
                        className="h-full w-full scale-0 transition-transform duration-200 peer-checked:scale-100"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M9 12l2 2 4-4"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </label>
    )
}

export default CheckboxInput

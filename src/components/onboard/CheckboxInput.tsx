import React from 'react'

interface CheckboxInputProps {
    id: string
    title: string
    desc?: string
    icon?: React.ReactNode
    value: string
    checked?: boolean
    onChange?: () => void
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ id, title, desc, icon, value, checked, onChange }) => {
    return (
        <label
            htmlFor={id}
            className={` ${desc ? '3xl:py-4 py-2 lg:py-3' : '3xl:py-[19px] py-3 lg:py-4'} group sm:rounded-2xl" flex w-full cursor-pointer items-center justify-between gap-2 rounded-md border border-transparent bg-[#FCF6F1] px-3 backdrop-blur-lg transition-colors duration-300 ease-in-out hover:border-[#638EFA] hover:bg-[#2A64F6] lg:rounded-xl xl:px-4`}
        >
            <div className="flex w-full items-center gap-3 transition-colors duration-300 ease-in-out">
                {icon ? (
                    <span className="flex max-h-8 min-h-8 max-w-8 min-w-8 items-center justify-center rounded-full bg-[#E7E7F1] p-1 text-[#2A64F6] backdrop-blur-[64px] transition-all duration-300 ease-in-out group-hover:bg-[#3F74F7] group-hover:text-white sm:max-h-[42px] sm:min-h-[42px] sm:max-w-[42px] sm:min-w-[42px] sm:p-2.5">
                        {icon}
                    </span>
                ) : (
                    <span className="max-h-8 min-h-8 max-w-8 min-w-8 rounded-full border-[1.5px] border-[#3F3F3F] transition-colors duration-300 group-hover:border-white sm:max-h-[42px] sm:min-h-[42px] sm:max-w-[42px] sm:min-w-[42px]" />
                )}

                <div className="w-full space-y-0.5 sm:space-y-1">
                    <h4 className="text-base leading-[130%] font-semibold text-[#010101] transition-colors duration-300 group-hover:text-white sm:text-lg sm:text-nowrap">
                        {title}
                    </h4>
                    {desc && (
                        <p className="text-[10px] leading-[150%] text-[#3F3F3F] transition-colors duration-300 group-hover:text-white sm:text-xs sm:text-nowrap md:text-sm">
                            {desc}
                        </p>
                    )}
                </div>
            </div>

            <div className="relative">
                <input
                    type="checkbox"
                    className="peer sr-only"
                    id={id}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                />
                <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#3F3F3F] transition-all duration-300 group-hover:border-white peer-checked:border-[#2A64F6] peer-checked:bg-[#2A64F6] group-hover:peer-checked:border-white sm:h-6 sm:w-6">
                    <svg
                        className="h-full w-full scale-0 transition-transform duration-300 peer-checked:scale-100"
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
                    <svg
                        className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 peer-checked:opacity-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <path
                            d="M13.7592 5.35747C13.9155 5.2064 14.0019 5.00406 14 4.79404C13.998 4.58402 13.9078 4.38312 13.7488 4.23461C13.5897 4.0861 13.3746 4.00186 13.1497 4.00003C12.9248 3.99821 12.7081 4.07894 12.5463 4.22485L6.28442 10.0722L3.45371 7.42886C3.29193 7.28295 3.07525 7.20221 2.85034 7.20403C2.62543 7.20586 2.41028 7.2901 2.25124 7.43861C2.0922 7.58713 2.00199 7.78803 2.00003 7.99805C1.99808 8.20807 2.08454 8.4104 2.24079 8.56147L5.67196 11.7655C5.83282 11.9156 6.05096 12 6.27841 12C6.50587 12 6.72401 11.9156 6.88487 11.7655L13.7472 5.35747H13.7592Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </label>
    )
}

export default CheckboxInput

import React from 'react'

interface PreferenceGroupProps {
    title: string
    options: string[]
    defaultChecked?: string[]
}

const PreferenceGroup: React.FC<PreferenceGroupProps> = ({ title, options, defaultChecked = [] }) => {
    return (
        <div>
            <p className="mb-2 text-xs font-normal text-white/80 uppercase md:text-sm">{title}</p>
            {options.map((item) => (
                <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 py-1 text-sm font-normal text-white md:text-base"
                >
                    <input
                        type="checkbox"
                        defaultChecked={defaultChecked.includes(item)}
                        className="h-[18px] w-[18px] cursor-pointer appearance-none rounded border border-white bg-transparent checked:border-white checked:bg-white checked:before:block checked:before:text-center checked:before:text-sm checked:before:leading-4 checked:before:text-black checked:before:content-['✓']"
                    />
                    {item}
                </label>
            ))}
        </div>
    )
}

export default PreferenceGroup

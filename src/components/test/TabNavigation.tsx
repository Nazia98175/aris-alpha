'use client'

import { FileIcon, HomeIcon } from '../home/Icons'

interface TabProps {
    activeTab: string
    setActiveTab: (tab: string) => void
}

const tabs = [
    { name: 'Overview', icon: <HomeIcon />, width: 'w-[152px]' },
    { name: 'Account', icon: <FileIcon />, width: 'w-[145px]' },
]

const TabNavigation = ({ activeTab, setActiveTab }: TabProps) => {
    return (
        <div className="mt-6 flex max-w-full gap-2 md:gap-[14px]">
            {tabs.map((tab) => {
                const isActive = activeTab === tab.name
                return (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`flex h-auto items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-medium transition-all duration-300 md:h-[50px] md:py-0 md:text-base ${tab.width} ${
                            isActive
                                ? 'bg-primaryblue text-white shadow-[0px_0px_10px_0px_#2A64F6]'
                                : 'bg-white/5 text-gray-300 hover:shadow-[0px_0px_10px_0px_#2A64F6]'
                        } `}
                    >
                        {tab.icon}
                        {tab.name}
                    </button>
                )
            })}
        </div>
    )
}

export default TabNavigation

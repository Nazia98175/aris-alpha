interface AllocationViewProps {
    expanded: boolean
}

const AllocationView = ({ expanded }: AllocationViewProps) => {
    const allocations = [
        {
            name: 'Equities',
            percentage: 45,
            color: 'bg-green-500',
            desc: 'Balanced exposure based on strong earnings momentum and improving macro data.',
        },
        {
            name: 'Crypto',
            percentage: 20,
            color: 'bg-orange-500',
            desc: 'Maintained current weight as BTC continues to respect key support and upside trend.',
        },
        {
            name: 'Fixed Income',
            percentage: 25,
            color: 'bg-purple-500',
            desc: 'Holding overweight position amid stable yields and defensive tilt in market sentiment.',
        },
        {
            name: 'Alternative',
            percentage: 10,
            color: 'bg-red-500',
            desc: 'Reduced slightly to fund tactical increases in equities and crypto.',
        },
    ]

    if (!expanded) {
        return (
            <div className="flex h-full flex-col">
                <div className="mb-3 text-xs text-gray-400">
                    Know where you&apos;re positioned — and why it matters.
                </div>
                <div className="mb-4 flex flex-1 items-center justify-center">
                    <div className="relative h-48 w-48">
                        <svg viewBox="0 0 42 42" className="h-full w-full -rotate-90">
                            <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#374151" strokeWidth="3" />
                            <circle
                                cx="21"
                                cy="21"
                                r="15.915"
                                fill="transparent"
                                stroke="#10b981"
                                strokeWidth="3"
                                strokeDasharray="45 55"
                                strokeDashoffset="0"
                            />
                            <circle
                                cx="21"
                                cy="21"
                                r="15.915"
                                fill="transparent"
                                stroke="#f97316"
                                strokeWidth="3"
                                strokeDasharray="20 80"
                                strokeDashoffset="-45"
                            />
                            <circle
                                cx="21"
                                cy="21"
                                r="15.915"
                                fill="transparent"
                                stroke="#8b5cf6"
                                strokeWidth="3"
                                strokeDasharray="25 75"
                                strokeDashoffset="-65"
                            />
                            <circle
                                cx="21"
                                cy="21"
                                r="15.915"
                                fill="transparent"
                                stroke="#ef4444"
                                strokeWidth="3"
                                strokeDasharray="10 90"
                                strokeDashoffset="-90"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">100%</div>
                                <div className="text-xs text-gray-400">Total</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {allocations.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className={`h-3 w-3 rounded-full ${item.color}`} />
                            <span className="text-xs text-gray-400">{item.name}</span>
                            <span className="ml-auto text-xs text-white">{item.percentage}%</span>
                        </div>
                    ))}
                </div>
                <div className="mt-3 text-xs text-gray-500">
                    Suggested allocations are model-based and not tailored to individual portfolios.
                </div>
            </div>
        )
    }

    return (
        <div className="h-full">
            <div className="mb-4 text-sm text-gray-400">Know where you&apos;re positioned — and why it matters.</div>
            <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center justify-center">
                    <div className="relative h-64 w-64">
                        <svg viewBox="0 0 42 42" className="h-full w-full -rotate-90">
                            <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#374151" strokeWidth="3" />
                            <circle
                                cx="21"
                                cy="21"
                                r="15.915"
                                fill="transparent"
                                stroke="#10b981"
                                strokeWidth="3"
                                strokeDasharray="45 55"
                                strokeDashoffset="0"
                            />
                            <circle
                                cx="21"
                                cy="21"
                                r="15.915"
                                fill="transparent"
                                stroke="#f97316"
                                strokeWidth="3"
                                strokeDasharray="20 80"
                                strokeDashoffset="-45"
                            />
                            <circle
                                cx="21"
                                cy="21"
                                r="15.915"
                                fill="transparent"
                                stroke="#8b5cf6"
                                strokeWidth="3"
                                strokeDasharray="25 75"
                                strokeDashoffset="-65"
                            />
                            <circle
                                cx="21"
                                cy="21"
                                r="15.915"
                                fill="transparent"
                                stroke="#ef4444"
                                strokeWidth="3"
                                strokeDasharray="10 90"
                                strokeDashoffset="-90"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">100%</div>
                                <div className="text-sm text-gray-400">Asset Allocation</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    {allocations.map((item, i) => (
                        <div key={i} className="rounded-lg bg-gray-900 p-4">
                            <div className="mb-2 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`h-4 w-4 rounded-full ${item.color}`} />
                                    <span className="font-medium text-white">{item.name}</span>
                                </div>
                                <span className="text-2xl font-bold text-white">{item.percentage}%</span>
                            </div>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-6 text-xs text-gray-500">
                Suggested allocations are model-based and not tailored to individual portfolios.
            </div>
        </div>
    )
}

export default AllocationView

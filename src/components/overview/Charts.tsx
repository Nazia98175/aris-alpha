import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { ALLOCATION_DATA_LIST } from './Helper'

// Type definitions
interface ChartDataItem {
    name: string
    value: number
    percentage: string
    desc: string
    color: string
    borderColor: string
}

interface CustomBarProps {
    fill?: string
    x?: number
    y?: number
    width?: number
    height?: number
    payload?: ChartDataItem
    index?: number
}

interface CustomLabelProps {
    x?: number
    y?: number
    width?: number
    height?: number
    payload?: ChartDataItem
    value?: number
    index?: number
}

const AllocationOpen = () => {
    // Transform data for vertical Recharts
    const chartData: ChartDataItem[] = ALLOCATION_DATA_LIST.map((item) => ({
        name: item.name,
        value: parseInt(item.percentage),
        percentage: item.percentage,
        desc: item.desc,
        color: getColorFromClass(item.color),
        borderColor: getBorderColorFromClass(item.border),
    }))

    // Helper functions to convert Tailwind classes to hex colors
    function getColorFromClass(colorClass: string): string {
        const colorMap: Record<string, string> = {
            'bg-lightgreen/10': '#202F26',
            'bg-brown/10': '#302820',
            'bg-darkpurple/10': '#26202F',
            'bg-mediumred/10': '#352626',
        }
        return colorMap[colorClass] || '#374151'
    }

    function getBorderColorFromClass(borderClass: string): string {
        const borderMap: Record<string, string> = {
            'border-lightgreen': '#10AE51',
            'border-brown': '#B26810',
            'border-darkpurple': '#4E10AC',
            'border-mediumred': '#E54C4C',
        }
        return borderMap[borderClass] || '#6b7280'
    }

    // Custom bar shape with top border
    const CustomBar = (props: CustomBarProps) => {
        const { fill, x, y, width, height, payload, index } = props

        if (x === undefined || y === undefined || width === undefined || height === undefined) {
            return null
        }

        const data = payload || (index !== undefined ? chartData[index] : null)
        const borderColor = data?.borderColor || '#6b7280'

        return (
            <g>
                <rect x={x} y={y} width={width} height={height} fill={fill} />
                <rect x={x} y={y} width={width} height={3} fill={borderColor} />
            </g>
        )
    }

    const CustomLabel = (props: CustomLabelProps) => {
        const { x, y, width, height, payload, value, index } = props

        if (x === undefined || y === undefined || width === undefined || height === undefined) {
            return null
        }

        if (!payload && (index === undefined || !chartData[index])) return null

        const data = payload || (index !== undefined ? chartData[index] : null)
        const centerX = x + width / 2
        const labelY = y + height - 20 // Position near bottom of bar

        return (
            <g>
                <text x={centerX} y={labelY} textAnchor="middle" fill="#D4D3D6" fontSize="12" fontWeight="normal">
                    {data?.name || ''}
                </text>
                <text x={centerX} y={labelY + 15} textAnchor="middle" fill="white" fontSize="18" fontWeight="600">
                    {data?.percentage || `${value || 0}%`}
                </text>
            </g>
        )
    }

    return (
        <div className="h-full">
            <div className="bg-darkgrey rounded-[10px] p-3 sm:p-5">
                <div className="flex flex-col">
                    <span className="text-richwhite text-sm font-normal tracking-normal">Asset Allocation</span>
                    <span className="text-richwhite text-2xl font-semibold tracking-normal">100%</span>
                </div>

                <div className="mt-5 h-[213px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                            barCategoryGap="4%" // Space between bars
                        >
                            <XAxis dataKey="name" hide />
                            <YAxis
                                hide
                                domain={[0, 50]} // Set max height based on largest value (45%)
                            />
                            <Bar dataKey="value" shape={<CustomBar />} label={<CustomLabel />}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Descriptions below the chart */}
                <div className="xs:grid-cols-4 mt-4 grid grid-cols-2 gap-4 md:gap-6">
                    {ALLOCATION_DATA_LIST.map((obj, index) => (
                        <div key={index} className="w-full">
                            <div className="bg-darkslate w-full rounded-md px-2.5 py-1.5">
                                <p className="text-custom-sm text-richwhite mx-auto line-clamp-2 text-center font-normal tracking-normal italic">
                                    {obj.desc}
                                </p>
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

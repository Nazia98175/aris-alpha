import Chart from '@/components/dashboard/chart'
import Header from '@/components/dashboard/header'
import React from 'react'

const chartData = [
    { time: '2012-02-29', value: 1.0902 },
    { time: '2012-03-31', value: 1.1615 },
    { time: '2012-04-30', value: 1.1816 },
    { time: '2012-05-31', value: 1.1242 },
    { time: '2012-06-30', value: 1.2033 },
    { time: '2012-07-31', value: 1.084 },
    { time: '2012-08-31', value: 1.1874 },
    { time: '2012-09-30', value: 1.2424 },
    { time: '2012-10-31', value: 1.2163 },
    { time: '2012-11-30', value: 1.1006 },
    { time: '2012-12-31', value: 1.116 },
    { time: '2013-01-31', value: 1.1752 },
    { time: '2013-02-28', value: 1.2254 },
    { time: '2013-03-31', value: 1.2775 },
]

const page = () => {
    return (
        <div className="flex h-full w-full flex-col space-y-5 sm:space-y-10">
            <Header />

            <div className="grow">
                <Chart data={chartData} />
            </div>
        </div>
    )
}

export default page

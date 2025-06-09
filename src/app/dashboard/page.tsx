import Chart from '@/components/dashboard/chart'
import Header from '@/components/dashboard/header'
import React from 'react'
import { tradeData } from '../actions/trade.actions'
import DashboardLayout from './layout'

const page = async () => {
    const trade = await tradeData()
    return (
        <DashboardLayout>
            <div className="flex h-full w-full flex-col space-y-5 sm:space-y-10">
                <Header />
                <div className="grow">
                    <Chart data={trade} />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default page

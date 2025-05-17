import { NextResponse } from 'next/server'
import { TRADE_COLUMNS_NAME } from '@/constants'
import { promises as fs } from 'fs'
import parseCSVFile from '@/lib/csv-parse'

export async function GET() {
    try {
        const file = await fs.readFile(process.cwd() + '/src/trade.csv', 'utf8')
        const parsedFile = await parseCSVFile(file)

        const trade = (parsedFile as Record<string, string>[]).map((row) => {
            const rawValue = row[TRADE_COLUMNS_NAME.value]
            const parsedValue = Number(rawValue)

            return {
                time: row[TRADE_COLUMNS_NAME.date] || '',
                value: isNaN(parsedValue) ? 0 : parsedValue,
            }
        })

        return NextResponse.json({ trade })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: 'Webhook error', ok: false }, { status: 400 })
    }
}

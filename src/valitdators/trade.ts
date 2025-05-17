import { z } from 'zod'

export const tradeDataSchema = z.object({
    date: z.string().min(1),
    time: z.number({ coerce: true }),
})

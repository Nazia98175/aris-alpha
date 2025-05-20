import { z } from 'zod'

export const waitListFormSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
})

export type WaitListFormValues = z.infer<typeof waitListFormSchema>

import { z } from 'zod'

export const newsletterFormSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
})

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>

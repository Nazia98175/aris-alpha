import { z } from 'zod'

export const signupFormSchema = z.object({
    firstName: z.string().min(1, 'First name is required').max(20, 'First name cannot exceed 20 characters'),
    lastName: z.string().min(1, 'Last name is required').max(20, 'Last name cannot exceed 20 characters'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    email: z.string().email('Please enter a valid email address'),
})

export const loginFormSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(1, 'Password is required'),
})

export type SignupFormValues = z.infer<typeof signupFormSchema>
export type LoginFormValues = z.infer<typeof loginFormSchema>

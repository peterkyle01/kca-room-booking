import { z } from 'zod'

export const signInFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})

export type SignInFormData = z.infer<typeof signInFormSchema>

export const signUpFormSchema = z
  .object({
    firstname: z.string().min(2, { message: 'First name must be at least 2 characters' }),
    lastname: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type SignUpFormData = z.infer<typeof signUpFormSchema>

export const contactFormSchema = z.object({
  fullname: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

export const reviewSchema = z.object({
  rating: z.enum(['one', 'two', 'three', 'four', 'five'], {
    required_error: 'Please select a rating',
  }),
  reviewText: z.string().min(10, {
    message: 'Review must be at least 10 characters.',
  }),
})

export type ReviewFormValues = z.infer<typeof reviewSchema>

export const roomSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  capacity: z.coerce.number().min(1, { message: "Capacity must be at least 1" }),
  location: z.string().min(2, { message: "Location is required" }),
  roomType: z.enum(["Conference Room", "Study Room", "Event Hall", "Classroom"]),
  status: z.enum(["Available", "Booked"]),
})
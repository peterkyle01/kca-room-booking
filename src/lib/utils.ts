import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleError(error: unknown, defaultMessage: string) {
  if (error instanceof z.ZodError) {
    return {
      error: 'Validation failed',
      details: error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      })),
    }
  }
  console.error(defaultMessage, error)
  return {
    error: defaultMessage,
    details: error instanceof Error ? error.message : 'Unknown error',
  }
}

'use server'

import config from '@/payload.config'
import { getPayload } from 'payload'
import { headers as getHeaders } from 'next/headers'
import { cookies } from 'next/headers'
import { User } from '@/payload-types'
import {
  SignInFormData,
  signInFormSchema,
  SignUpFormData,
  signUpFormSchema,
} from '@/lib/form-schemas'

export async function getUser() {
  const payload = await getPayload({ config })
  const headers = await getHeaders()
  const res = await payload.auth({ headers })

  // @ts-expect-error type
  const { user }: { user: User } = res

  return user
}

export async function signUpUser(formData: SignUpFormData) {
  // Validate form data
  const validatedData = signUpFormSchema.parse(formData)
  const payload = await getPayload({ config })

  // Check if user already exists
  const existingUser = await payload.find({
    collection: 'users',
    where: { email: { equals: validatedData.email } },
  })

  if (existingUser.totalDocs > 0) {
    return { error: 'A user with this email already exists' }
  }

  await payload.create({
    collection: 'users',
    data: { ...validatedData, role: 'USER' },
  })

  // Auto-login after successful registration
  return await signInUser({
    email: validatedData.email,
    password: validatedData.password,
  })
}

export async function signInUser(formData: SignInFormData) {
  // Validate form data
  const validatedData = signInFormSchema.parse(formData)
  const payload = await getPayload({ config })

  // Find user and verify credentials
  const { docs: users } = await payload.find({
    collection: 'users',
    where: { email: { equals: validatedData.email } },
  })

  if (users.length === 0) {
    return { error: 'Sign up first!' }
  }

  const result = await payload.login({
    collection: 'users',
    data: validatedData,
  })

  if (!result.token) {
    return { error: 'Invalid email or password' }
  }

  ;(await cookies()).set('payload-token', result.token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  return { success: true, token: result.token }
}

export async function signOutUser() {
  ;(await cookies()).set('payload-token', '', {
    httpOnly: true,
    path: '/',
    maxAge: 0,
  })
}

export async function editUser(userId: number, updatedData: SignUpFormData) {
  const payload = await getPayload({ config })
  await payload.update({
    collection: 'users',
    id: userId,
    data: {
      ...(updatedData as unknown as Partial<User>),
    },
  })
}

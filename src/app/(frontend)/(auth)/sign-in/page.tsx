'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter, useSearchParams } from 'next/navigation'
import { SignInFormData, signInFormSchema } from '@/lib/form-schemas'
import { signInUser } from '@/app/server-actions/user'

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || '/'
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: SignInFormData) {
    setIsLoading(true)
    try {
      const result = await signInUser(data)
      router.push(from)
      if (result?.error) {
        toast.error(result?.error)
        return
      }
      toast.success('You have successfully signed in')
    } catch (error) {
      toast.error(error as string)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid w-full max-w-md gap-6">
            <div className="flex flex-col text-center space-y-2">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <p className="text-muted-foreground">
                Enter your email and password to access your account
              </p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <Link
                          href="#"
                          className="text-sm text-primary underline-offset-4 hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </form>
            </Form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/sign-up" className="text-primary underline-offset-4 hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

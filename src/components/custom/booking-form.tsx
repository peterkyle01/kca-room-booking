'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { format, addHours } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CalendarIcon, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { createBooking, checkRoomAvailability } from '@/app/server-actions/booking'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import Link from 'next/link'

const bookingSchema = z.object({
  date: z.date({
    required_error: 'Please select a date',
  }),
  startTime: z.string({
    required_error: 'Please select a start time',
  }),
  duration: z.string({
    required_error: 'Please select a duration',
  }),
})

interface BookingFormProps {
  room: any
  userId: string
}

export function BookingForm({ room, userId }: BookingFormProps) {
  const router = useRouter()
  const [availableTimes, setAvailableTimes] = useState<string[]>([])
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [bookingError, setBookingError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      duration: '1',
    },
  })

  const selectedDate = form.watch('date')

  // When date changes, fetch available times
  const onDateChange = async (date: Date | undefined) => {
    if (!date) return

    form.setValue('date', date)
    form.setValue('startTime', '') // Reset start time when date changes

    setIsCheckingAvailability(true)
    setAvailableTimes([])

    try {
      const { availableTimes, existingBookings } = await checkRoomAvailability(
        room.id.toString(),
        date.toISOString(),
      )

      // Process available times
      const bookedTimeSlots = new Set(
        existingBookings.map((booking: any) => {
          const startTime = new Date(booking.startTime)
          return `${startTime.getHours()}:${startTime.getMinutes()}`
        }),
      )

      // Filter out already booked times
      const available = availableTimes
        .map((slot: any) => {
          const time = new Date(slot.time)
          const hours = time.getHours()
          const minutes = time.getMinutes()
          const timeString = `${hours}:${minutes}`

          if (!bookedTimeSlots.has(timeString)) {
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
          }
          return null
        })
        .filter(Boolean) as string[]

      setAvailableTimes(available)
    } catch (error) {
      console.error('Error checking availability:', error)
    } finally {
      setIsCheckingAvailability(false)
    }
  }

  const onSubmit = async (values: z.infer<typeof bookingSchema>) => {
    setIsSubmitting(true)
    setBookingError(null)

    try {
      // Calculate end time based on duration
      const startDateTime = new Date(values.date)
      const [hours, minutes] = values.startTime.split(':').map(Number)
      startDateTime.setHours(hours, minutes, 0, 0)

      const endDateTime = addHours(startDateTime, Number.parseInt(values.duration))

      // Create booking
      const result = await createBooking({
        userId,
        roomId: room.id.toString(),
        startTime: startDateTime.toISOString(),
        endTime: endDateTime.toISOString(),
      })

      if (result.success) {
        setBookingSuccess(true)
        form.reset()

        // Redirect to bookings page after a delay
        setTimeout(() => {
          router.push('/bookings')
          router.refresh()
        }, 2000)
      } else {
        setBookingError(result.error || 'Failed to create booking')
      }
    } catch (error) {
      console.error('Error creating booking:', error)
      setBookingError('An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Format time for display
  const formatTimeDisplay = (time: string) => {
    if (!time) return ''
    const [hours, minutes] = time.split(':').map(Number)
    const period = hours >= 12 ? 'PM' : 'AM'
    const displayHours = hours % 12 || 12
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`
  }

  if (bookingSuccess) {
    return (
      <Alert className="bg-green-50 border-green-200">
        <AlertTitle className="text-green-800">Booking Successful!</AlertTitle>
        <AlertDescription className="text-green-700">
          Your booking request has been submitted and is pending approval. You will be redirected to
          your bookings page.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {bookingError && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{bookingError}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground',
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? format(field.value, 'PPP') : 'Select a date'}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => onDateChange(date)}
                      disabled={(date) => {
                        // Disable dates in the past
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)
                        return date < today
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Select the date you want to book the room.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Start Time</FormLabel>
                <Select
                  disabled={!selectedDate || isCheckingAvailability || availableTimes.length === 0}
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          isCheckingAvailability
                            ? 'Checking availability...'
                            : !selectedDate
                              ? 'Select a date first'
                              : availableTimes.length === 0
                                ? 'No available times'
                                : 'Select a time'
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {availableTimes.map((time) => (
                      <SelectItem key={time} value={time}>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                          {formatTimeDisplay(time)}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>Available time slots for the selected date.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">1 hour</SelectItem>
                    <SelectItem value="2">2 hours</SelectItem>
                    <SelectItem value="3">3 hours</SelectItem>
                    <SelectItem value="4">4 hours</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>How long do you need the room?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full flex justify-center">
          {!userId ? (
            <Button asChild>
              <Link href={'/sign-in'} className="w-60">
                Sign In
              </Link>
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-60"
              disabled={isSubmitting || !form.formState.isValid}
            >
              {isSubmitting ? 'Submitting...' : 'Book Room'}
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}

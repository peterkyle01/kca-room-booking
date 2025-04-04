import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookingsList } from '@/components/custom/booking-list'
import { getBookings, getCurrentUser } from '@/app/server-actions/booking'

export default async function BookingsPage() {
  const currentUser = await getCurrentUser()
  const bookings = await getBookings(currentUser.id.toString())

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Bookings</h1>
          <p className="text-muted-foreground mt-1">Manage your room bookings and reservations</p>
        </div>
        <Link href="/rooms" className="mt-4 md:mt-0">
          <Button>Browse Rooms</Button>
        </Link>
      </div>

      <BookingsList bookings={bookings || []} />
    </div>
  )
}

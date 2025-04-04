import { BookingsList } from '@/components/custom/booking-list'
import { getBookings, getCurrentUser } from '@/app/server-actions/booking'

export default async function BookingsPage() {
  const currentUser = await getCurrentUser()
  const bookings = await getBookings(currentUser.id.toString())

  return (
    <div className="min-h-[80vh] container mx-auto py-10 px-4">
      <BookingsList bookings={bookings || []} />
    </div>
  )
}

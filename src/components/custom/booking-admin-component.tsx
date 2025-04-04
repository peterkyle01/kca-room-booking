import { getAllBookingStats } from '@/app/server-actions/booking'
import { BookingStats } from './booking-stats'

export default async function BookingAdminComponent() {
  const bookingStats = await getAllBookingStats()
  return (
    <div className="w-full container mx-auto my-10">
      <BookingStats stats={bookingStats} />
    </div>
  )
}

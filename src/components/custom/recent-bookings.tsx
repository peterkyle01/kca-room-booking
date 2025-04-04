import { format } from 'date-fns'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin } from 'lucide-react'

interface RecentBookingsProps {
  bookings: any[]
}

export function RecentBookings({ bookings }: RecentBookingsProps) {
  if (!bookings || bookings.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground mb-4">You don't have any bookings yet.</p>
        <Link href="/">
          <Button>Browse Rooms</Button>
        </Link>
      </div>
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Pending
          </Badge>
        )
      case 'approved':
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Approved
          </Badge>
        )
      case 'rejected':
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking) => {
        const room = booking.room
        const startTime = new Date(booking.startTime)
        const endTime = new Date(booking.endTime)

        return (
          <div key={booking.id} className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg">
            <div className="sm:w-24 h-24 bg-muted rounded-md overflow-hidden">
              {room.images && room.images.length > 0 ? (
                <img
                  src={room.images[0].image.url || '/placeholder.svg'}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  No image
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="font-medium">{room.name}</h3>
                {getStatusBadge(booking.status)}
              </div>

              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{format(startTime, 'EEEE, MMMM d, yyyy')}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>
                    {format(startTime, 'h:mm a')} - {format(endTime, 'h:mm a')}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{room.location}</span>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col gap-2 mt-2 sm:mt-0 sm:justify-center">
              <Link href={`/rooms/${room.id}`}>
                <Button variant="outline" size="sm" className="w-full">
                  View Room
                </Button>
              </Link>
              <Link href="/bookings">
                <Button variant="ghost" size="sm" className="w-full">
                  All Bookings
                </Button>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

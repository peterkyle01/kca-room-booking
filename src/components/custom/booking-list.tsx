'use client'

import { useState } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, Clock, MapPin } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useRouter } from 'next/navigation'
import { cancelBooking } from '@/app/server-actions/booking'

interface BookingsListProps {
  bookings: any[]
}

export function BookingsList({ bookings }: BookingsListProps) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  // Group bookings by status
  const pendingBookings = bookings.filter((booking) => booking.status === 'pending')
  const approvedBookings = bookings.filter((booking) => booking.status === 'approved')
  const rejectedBookings = bookings.filter((booking) => booking.status === 'rejected')

  const handleCancelBooking = async (bookingId: string) => {
    setIsDeleting(bookingId)

    try {
      const result = await cancelBooking(bookingId)

      if (result.success) {
        router.refresh()
      } else {
        console.error('Failed to cancel booking:', result.error)
      }
    } catch (error) {
      console.error('Error canceling booking:', error)
    } finally {
      setIsDeleting(null)
    }
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

  const renderBookingCard = (booking: any) => {
    const room = booking.room
    const startTime = new Date(booking.startTime)
    const endTime = new Date(booking.endTime)

    return (
      <Card key={booking.id} className="overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="line-clamp-1">{room.name}</CardTitle>
            {getStatusBadge(booking.status)}
          </div>
          <p className="text-sm text-muted-foreground">{room['room type']}</p>
        </CardHeader>

        <CardContent className="pb-2">
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{format(startTime, 'EEEE, MMMM d, yyyy')}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>
                {format(startTime, 'h:mm a')} - {format(endTime, 'h:mm a')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{room.location}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex gap-2 w-full">
            <Link href={`/rooms/${room.id}`} className="flex-1">
              <Button variant="outline" className="w-full">
                View Room
              </Button>
            </Link>

            {booking.status === 'pending' && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="destructive"
                    className="flex-1"
                    disabled={isDeleting === booking.id}
                  >
                    {isDeleting === booking.id ? 'Canceling...' : 'Cancel'}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Cancel Booking</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to cancel this booking? This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Keep Booking</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleCancelBooking(booking.id)}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Yes, Cancel Booking
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </CardFooter>
      </Card>
    )
  }

  const renderEmptyState = (message: string) => (
    <div className="text-center py-12 bg-muted/30 rounded-lg">
      <h3 className="text-lg font-medium mb-2">No bookings found</h3>
      <p className="text-muted-foreground mb-4">{message}</p>
      <Link href="/">
        <Button>Browse Rooms</Button>
      </Link>
    </div>
  )

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="mb-6">
        <TabsTrigger value="all">All Bookings ({bookings.length})</TabsTrigger>
        <TabsTrigger value="pending">Pending ({pendingBookings.length})</TabsTrigger>
        <TabsTrigger value="approved">Approved ({approvedBookings.length})</TabsTrigger>
        <TabsTrigger value="rejected">Rejected ({rejectedBookings.length})</TabsTrigger>
      </TabsList>

      <TabsContent value="all">
        {bookings.length === 0 ? (
          renderEmptyState("You don't have any bookings yet.")
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map(renderBookingCard)}
          </div>
        )}
      </TabsContent>

      <TabsContent value="pending">
        {pendingBookings.length === 0 ? (
          renderEmptyState("You don't have any pending bookings.")
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pendingBookings.map(renderBookingCard)}
          </div>
        )}
      </TabsContent>

      <TabsContent value="approved">
        {approvedBookings.length === 0 ? (
          renderEmptyState("You don't have any approved bookings.")
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedBookings.map(renderBookingCard)}
          </div>
        )}
      </TabsContent>

      <TabsContent value="rejected">
        {rejectedBookings.length === 0 ? (
          renderEmptyState("You don't have any rejected bookings.")
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rejectedBookings.map(renderBookingCard)}
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Users, MapPin } from 'lucide-react'
import { RoomGallery } from '@/components/custom/rooms-gallery'
import { RoomTypeDetails } from '@/components/custom/room-type-details'
import { BookingForm } from '@/components/custom/booking-form'
import { getCurrentUser, getOneRoom } from '@/app/server-actions/booking'

export default async function RoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const roomId = parseInt(id)

  if (isNaN(roomId)) {
    notFound()
  }

  const room = await getOneRoom(roomId)
  const currentUser = await getCurrentUser()

  if (!room) {
    notFound()
  }

  return (
    <div className="container mx-auto  px-4 max-w-5xl">
      <div className="space-y-8">
        {/* Room header with name and status */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{room.name}</h1>
            <p className="text-xl text-muted-foreground mt-1">{room['room type']}</p>
          </div>
          <Badge
            className="mt-2 md:mt-0 w-fit"
            variant={room.status === 'Available' ? 'default' : 'destructive'}
          >
            {room.status}
          </Badge>
        </div>

        {/* @ts-expect-error img-type*/}
        <RoomGallery images={room.images} roomName={room.name} />

        {/* Essential room information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Room Information</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p>{room.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Capacity</h3>
                  <p>
                    {room.capacity} {room.capacity === 1 ? 'person' : 'people'}
                  </p>
                </div>
              </div>

              {room.facilities && room.facilities.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Facilities</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {room.facilities.map((facility: any, i: number) => (
                      <Badge key={i} variant="secondary">
                        {facility.facility}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Room type specific details */}
          <RoomTypeDetails room={room} />
        </div>

        {/* Booking form */}
        {room.status === 'Available' && (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Book This Room</h2>
            <BookingForm room={room} userId={currentUser?.id.toString()} />
          </Card>
        )}

        {room.status !== 'Available' && (
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Room Currently Unavailable</h2>
            <p className="text-muted-foreground">
              This room is currently booked. Please check back later or browse other available
              rooms.
            </p>
            <Link href="/" className="mt-4 inline-block">
              <Button variant="outline">Browse Other Rooms</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

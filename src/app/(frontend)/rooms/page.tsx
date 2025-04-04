import { getRooms } from '@/app/server-actions/room'
import { RoomsDisplay } from '@/components/custom/rooms-display'

export default async function RoomsPage() {
  const rooms = await getRooms()

  return (
    <main className="container mx-auto py-10 px-4">
      <div className="space-y-6">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Room Booking System</h1>
          <p className="text-muted-foreground text-lg">
            Browse our selection of rooms and find the perfect space for your needs
          </p>
        </div>

        <RoomsDisplay initialRooms={rooms || []} />
      </div>
    </main>
  )
}

import { getRooms } from '@/app/server-actions/room'
import { RoomsDisplay } from '@/components/custom/rooms-display'

export default async function RoomsPage() {
  const rooms = await getRooms()

  return (
    <main className="container mx-auto py-10 px-4">
      <RoomsDisplay initialRooms={rooms || []} />
    </main>
  )
}

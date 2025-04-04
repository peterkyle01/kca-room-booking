import { getRooms } from '@/app/server-actions/room'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DoorClosed, DoorOpen, KeyRound, PlusCircle, Settings } from 'lucide-react'

export default async function RoomStats() {
  const rooms = await getRooms()
  const totalRooms = rooms.length
  const availableRooms = rooms.filter((room) => room.status === 'Available').length
  const bookedRooms = rooms.filter((room) => room.status === 'Booked').length

  // Assuming you might want to track rooms under maintenance with a different status
  // You might need to add a 'Maintenance' option to your 'status' field in Payload
  const maintenanceRooms = rooms.filter((room) => room.status === 'Maintainance').length

  // You might want to track newly added rooms based on their creation date
  // This is a simplified example and might need more sophisticated logic
  const recentRoomsThreshold = new Date()
  recentRoomsThreshold.setDate(recentRoomsThreshold.getDate() - 7) // Consider rooms added in the last 7 days as 'new'
  const newlyAddedRooms = rooms.filter(
    (room) => new Date(room.createdAt) > recentRoomsThreshold,
  ).length

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Rooms</CardTitle>
            <DoorClosed className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalRooms}</div>
            <p className="text-xs text-muted-foreground">All rooms in inventory</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available</CardTitle>
            <DoorOpen className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{availableRooms}</div>
            <p className="text-xs text-muted-foreground">Ready for occupancy</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Booked</CardTitle>
            <KeyRound className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bookedRooms}</div>
            <p className="text-xs text-muted-foreground">Currently in use</p>
          </CardContent>
        </Card>

        {/* Conditionally render the Maintenance card if you have a 'Maintenance' status */}
        {typeof maintenanceRooms !== 'undefined' && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Maintenance</CardTitle>
              <Settings className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{maintenanceRooms}</div>
              <p className="text-xs text-muted-foreground">Currently being serviced</p>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Newly Added</CardTitle>
            <PlusCircle className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newlyAddedRooms}</div>
            <p className="text-xs text-muted-foreground">Added in the last 7 days</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Users } from 'lucide-react'

interface FeaturedRoomsProps {
  rooms: any[]
}

export function FeaturedRooms({ rooms }: FeaturedRoomsProps) {
  if (!rooms || rooms.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-2">No rooms available</h3>
        <p className="text-muted-foreground mb-4">Check back later for available rooms</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {rooms.map((room) => {
        // Get the first image if available
        const imageUrl =
          room.images && room.images.length > 0
            ? room.images[0].image.url
            : '/placeholder.svg?height=300&width=500'

        return (
          <Card
            key={room.id}
            className="overflow-hidden h-full transition-all hover:shadow-md border-0 shadow-sm"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={imageUrl || '/placeholder.svg'}
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>

            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{room.name}</h3>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Available
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{room['room type']}</p>

              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                {room.location}
              </div>

              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-2" />
                Up to {room.capacity} {room.capacity === 1 ? 'person' : 'people'}
              </div>
            </CardContent>

            <CardFooter className="pt-0">
              <Link href={`/rooms/${room.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Users } from 'lucide-react'

interface RoomCardProps {
  room: any
}

export function RoomCard({ room }: RoomCardProps) {
  // Get the first image if available
  const imageUrl =
    room.images && room.images.length > 0
      ? room.images[0].image.url
      : '/placeholder.svg?height=300&width=500'

  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-md">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl || '/placeholder.svg'}
            alt={room.name}
            className="w-full h-full object-cover"
          />
        </div>
        <Badge
          className="absolute top-3 right-3"
          variant={room.status === 'Available' ? 'default' : 'destructive'}
        >
          {room.status}
        </Badge>
      </div>

      <CardContent className="pt-4">
        <div className="mb-2">
          <h3 className="font-semibold text-lg truncate">{room.name}</h3>
          <p className="text-sm text-muted-foreground">{room['room type']}</p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="truncate">{room.location}</span>
          </div>

          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5 text-muted-foreground" />
            <span>{room.capacity}</span>
          </div>
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
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, Users, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

interface RoomCardProps {
  room: any
  viewMode: 'grid' | 'list'
}

export function RoomCard({ room, viewMode }: RoomCardProps) {
  return (
    <Link href={`/rooms/${room.id}`}>
      <Card className={cn(viewMode === 'list' && 'flex-row items-center gap-4')}>
        {viewMode === 'list' ? (
          <>
            <div className="w-1/3">
              <img
                src={room.images[0].image.url || '/placeholder.svg'}
                alt={room.name}
                className="object-cover h-full w-full rounded-md"
              />
            </div>
            <CardContent className="p-6 w-2/3">
              <CardHeader className="space-y-1">
                <CardTitle className="text-lg font-semibold">{room.name}</CardTitle>
                <CardDescription>{room.description}</CardDescription>
              </CardHeader>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{room.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span>{room['room type']}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>Capacity: {room.capacity}</span>
              </div>
              <Badge>{room.status}</Badge>
            </CardContent>
          </>
        ) : (
          <>
            <img
              src={room.images[0].image.url || '/placeholder.svg'}
              alt={room.name}
              className="object-cover h-48 w-full rounded-md"
            />
            <CardContent className="p-6">
              <CardHeader className="space-y-1">
                <CardTitle className="text-lg font-semibold">{room.name}</CardTitle>
                <CardDescription>{room.description}</CardDescription>
              </CardHeader>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{room.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span>{room['room type']}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>Capacity: {room.capacity}</span>
              </div>
              <Badge>{room.status}</Badge>
            </CardContent>
          </>
        )}
      </Card>
    </Link>
  )
}

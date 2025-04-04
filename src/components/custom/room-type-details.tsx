import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Video,
  BookOpen,
  Music,
  Presentation,
  Clock,
  Wifi,
  Mic,
  MonitorSmartphone,
  Projector,
  Coffee,
  Utensils,
  LayoutGrid,
} from 'lucide-react'
import { format } from 'date-fns'

interface RoomTypeDetailsProps {
  room: any
}

export function RoomTypeDetails({ room }: RoomTypeDetailsProps) {
  // Get the room type
  const roomType = room['room type']

  // Function to get the appropriate icon based on facility name
  const getFacilityIcon = (facilityName: string) => {
    const name = facilityName.toLowerCase()
    if (name.includes('wifi') || name.includes('internet')) return <Wifi className="h-4 w-4" />
    if (name.includes('projector')) return <Projector className="h-4 w-4" />
    if (name.includes('video') || name.includes('conference')) return <Video className="h-4 w-4" />
    if (name.includes('mic') || name.includes('audio')) return <Mic className="h-4 w-4" />
    if (name.includes('screen') || name.includes('monitor'))
      return <MonitorSmartphone className="h-4 w-4" />
    if (name.includes('coffee') || name.includes('tea')) return <Coffee className="h-4 w-4" />
    if (name.includes('catering') || name.includes('food')) return <Utensils className="h-4 w-4" />
    return null
  }

  // Render different content based on room type
  const renderRoomTypeContent = () => {
    switch (roomType) {
      case 'Conference Room':
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Video className="mr-2 h-5 w-5" />
              Conference Room Details
            </h2>
            <div className="space-y-4">
              <p>
                Our conference rooms are designed for productive meetings and collaborations,
                equipped with modern technology and comfortable seating.
              </p>

              {room.availableTimes && room.availableTimes.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Available Time Slots</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {room.availableTimes.map((timeSlot: any, i: number) => {
                      const date = new Date(timeSlot.time)
                      return (
                        <div
                          key={i}
                          className="flex items-center p-2 rounded-md bg-secondary text-sm"
                        >
                          <Clock className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                          <span>{format(date, 'h:mm a')}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              <div>
                <h3 className="font-medium mb-2">Conference Equipment</h3>
                <ul className="space-y-1.5">
                  {room.facilities &&
                    room.facilities
                      .filter((f: any) => {
                        const name = f.facility.toLowerCase()
                        return (
                          name.includes('projector') ||
                          name.includes('video') ||
                          name.includes('screen') ||
                          name.includes('audio') ||
                          name.includes('mic')
                        )
                      })
                      .map((facility: any, i: number) => (
                        <li key={i} className="flex items-center">
                          {getFacilityIcon(facility.facility) && (
                            <span className="mr-2 text-muted-foreground">
                              {getFacilityIcon(facility.facility)}
                            </span>
                          )}
                          {facility.facility}
                        </li>
                      ))}
                </ul>
              </div>
            </div>
          </>
        )

      case 'Study Room':
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Study Room Details
            </h2>
            <div className="space-y-4">
              <p>
                Our study rooms provide a quiet and focused environment for individual or small
                group study sessions.
              </p>

              {room.availableTimes && room.availableTimes.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Available Time Slots</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {room.availableTimes.map((timeSlot: any, i: number) => {
                      const date = new Date(timeSlot.time)
                      return (
                        <div
                          key={i}
                          className="flex items-center p-2 rounded-md bg-secondary text-sm"
                        >
                          <Clock className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                          <span>{format(date, 'h:mm a')}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              <div>
                <h3 className="font-medium mb-2">Study Resources</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Quiet Environment</Badge>
                  <Badge variant="outline">Good Lighting</Badge>
                  <Badge variant="outline">Power Outlets</Badge>
                  {room.facilities &&
                    room.facilities.map((facility: any, i: number) => (
                      <Badge key={i} variant="outline">
                        {facility.facility}
                      </Badge>
                    ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium">Recommended For</h3>
                <p>Individual study, small group collaboration, research work</p>
              </div>
            </div>
          </>
        )

      case 'Event Hall':
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Music className="mr-2 h-5 w-5" />
              Event Hall Details
            </h2>
            <div className="space-y-4">
              <p>
                Our event halls are versatile spaces designed to accommodate various types of
                events, from conferences to celebrations.
              </p>

              <div className="flex items-center gap-2">
                <h3 className="font-medium">Layout Options:</h3>
                <Badge variant="outline">Theater</Badge>
                <Badge variant="outline">Banquet</Badge>
                <Badge variant="outline">Reception</Badge>
                <Badge variant="outline">Classroom</Badge>
              </div>

              <div>
                <h3 className="font-medium mb-2">Event Amenities</h3>
                <ul className="space-y-1.5">
                  {room.facilities &&
                    room.facilities.map((facility: any, i: number) => (
                      <li key={i} className="flex items-center">
                        {getFacilityIcon(facility.facility) && (
                          <span className="mr-2 text-muted-foreground">
                            {getFacilityIcon(facility.facility)}
                          </span>
                        )}
                        {facility.facility}
                      </li>
                    ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium">Suitable For</h3>
                <p>Conferences, receptions, performances, large gatherings</p>
              </div>
            </div>
          </>
        )

      case 'Classroom':
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Presentation className="mr-2 h-5 w-5" />
              Classroom Details
            </h2>
            <div className="space-y-4">
              <p>
                Our classrooms are designed for effective learning experiences with appropriate
                teaching equipment and comfortable seating.
              </p>

              <div className="flex items-start gap-3">
                <LayoutGrid className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Seating Arrangement</h3>
                  <p>Traditional classroom style with desks facing the front</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Teaching Equipment</h3>
                <ul className="space-y-1.5">
                  {room.facilities &&
                    room.facilities
                      .filter((f: any) => {
                        const name = f.facility.toLowerCase()
                        return (
                          name.includes('projector') ||
                          name.includes('whiteboard') ||
                          name.includes('screen') ||
                          name.includes('podium')
                        )
                      })
                      .map((facility: any, i: number) => (
                        <li key={i} className="flex items-center">
                          {getFacilityIcon(facility.facility) && (
                            <span className="mr-2 text-muted-foreground">
                              {getFacilityIcon(facility.facility)}
                            </span>
                          )}
                          {facility.facility}
                        </li>
                      ))}
                </ul>
              </div>

              {room.availableTimes && room.availableTimes.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Available Class Times</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {room.availableTimes.map((timeSlot: any, i: number) => {
                      const date = new Date(timeSlot.time)
                      return (
                        <div
                          key={i}
                          className="flex items-center p-2 rounded-md bg-secondary text-sm"
                        >
                          <Clock className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                          <span>{format(date, 'h:mm a')}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </>
        )

      default:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Room Details</h2>
            <div className="space-y-4">
              <p>This room is equipped with various amenities to meet your needs.</p>

              {room.availableTimes && room.availableTimes.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Available Time Slots</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {room.availableTimes.map((timeSlot: any, i: number) => {
                      const date = new Date(timeSlot.time)
                      return (
                        <div
                          key={i}
                          className="flex items-center p-2 rounded-md bg-secondary text-sm"
                        >
                          <Clock className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                          <span>{format(date, 'h:mm a')}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </>
        )
    }
  }

  return <Card className="p-6">{renderRoomTypeContent()}</Card>
}

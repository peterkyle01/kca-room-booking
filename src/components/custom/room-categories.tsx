import Link from 'next/link'
import { Video, BookOpen, Music, Presentation } from 'lucide-react'

interface RoomCategoriesProps {
  roomTypes: string[]
  rooms: any[]
}

export function RoomCategories({ roomTypes, rooms }: RoomCategoriesProps) {
  // Get icon and description for each room type
  const getRoomTypeDetails = (type: string) => {
    switch (type) {
      case 'Conference Room':
        return {
          icon: <Video className="h-8 w-8" />,
          description: 'Professional spaces for meetings and presentations',
          color: 'bg-blue-50 text-blue-700',
        }
      case 'Study Room':
        return {
          icon: <BookOpen className="h-8 w-8" />,
          description: 'Quiet spaces for focused work and study sessions',
          color: 'bg-green-50 text-green-700',
        }
      case 'Event Hall':
        return {
          icon: <Music className="h-8 w-8" />,
          description: 'Large spaces for events, gatherings and celebrations',
          color: 'bg-purple-50 text-purple-700',
        }
      case 'Classroom':
        return {
          icon: <Presentation className="h-8 w-8" />,
          description: 'Educational spaces for teaching and learning',
          color: 'bg-amber-50 text-amber-700',
        }
      default:
        return {
          icon: <Video className="h-8 w-8" />,
          description: 'Versatile spaces for various needs',
          color: 'bg-slate-50 text-slate-700',
        }
    }
  }

  // Count rooms of each type
  const getRoomCount = (type: string) => {
    return rooms.filter((room) => room['room type'] === type).length
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {roomTypes.map((type) => {
        const { icon, description, color } = getRoomTypeDetails(type)
        const count = getRoomCount(type)

        return (
          <Link key={type} href={`/rooms?type=${encodeURIComponent(type)}`} className="group">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-transparent transition-all hover:border-primary/20 hover:shadow-md h-full flex flex-col">
              <div
                className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 ${color}`}
              >
                {icon}
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {type}
              </h3>

              <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

              <div className="text-sm font-medium">
                {count} {count === 1 ? 'room' : 'rooms'} available
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

'use client'

import { useState, useMemo, useEffect } from 'react'
import { RoomCard } from '@/components/custom/room-card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Search, Users } from 'lucide-react'

interface RoomsDisplayProps {
  initialRooms: any[]
  initialFilters?: {
    search?: string
    type?: string
    capacity?: string
  }
}

export function RoomsDisplay({ initialRooms, initialFilters }: RoomsDisplayProps) {
  const [searchQuery, setSearchQuery] = useState(initialFilters?.search || '')
  const [roomType, setRoomType] = useState<string>(initialFilters?.type || 'all')
  const [status, setStatus] = useState<string>('all')
  const [capacity, setCapacity] = useState<number>(0)

  // Parse capacity from URL params if provided
  useEffect(() => {
    if (initialFilters?.capacity) {
      const capacityParam = initialFilters.capacity
      if (capacityParam === '1-4') setCapacity(1)
      else if (capacityParam === '5-10') setCapacity(5)
      else if (capacityParam === '11-20') setCapacity(11)
      else if (capacityParam === '21+') setCapacity(21)
    }
  }, [initialFilters?.capacity])

  // Get the maximum capacity from all rooms for the slider
  const maxCapacity = useMemo(() => {
    if (!initialRooms || initialRooms.length === 0) return 20
    return Math.max(...initialRooms.map((room) => room.capacity || 0))
  }, [initialRooms])

  // Filter rooms based on search and filter criteria
  const filteredRooms = useMemo(() => {
    if (!initialRooms) return []

    return initialRooms.filter((room) => {
      // Search by name or location
      const matchesSearch =
        room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.location.toLowerCase().includes(searchQuery.toLowerCase())

      // Filter by room type
      const matchesType = roomType === 'all' || room['room type'] === roomType

      // Filter by status
      const matchesStatus = status === 'all' || room.status === status

      // Filter by capacity
      const matchesCapacity = room.capacity >= capacity

      return matchesSearch && matchesType && matchesStatus && matchesCapacity
    })
  }, [initialRooms, searchQuery, roomType, status, capacity])

  // Get unique room types for the filter
  const roomTypes = useMemo(() => {
    if (!initialRooms) return []
    const types = new Set(initialRooms.map((room) => room['room type']))
    return Array.from(types).filter(Boolean)
  }, [initialRooms])

  return (
    <div className="space-y-8">
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Search input */}
          <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Search by name or location..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Room type filter */}
          <div className="space-y-2">
            <Label htmlFor="room-type">Room Type</Label>
            <Select value={roomType} onValueChange={setRoomType}>
              <SelectTrigger id="room-type">
                <SelectValue placeholder="All room types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All room types</SelectItem>
                {roomTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Status filter */}
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger id="status">
                <SelectValue placeholder="All statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="Available">Available</SelectItem>
                <SelectItem value="Booked">Booked</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Capacity filter */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="capacity">Min Capacity</Label>
              <div className="flex items-center text-sm">
                <Users className="h-3 w-3 mr-1" />
                <span>{capacity}</span>
              </div>
            </div>
            <Slider
              id="capacity"
              min={0}
              max={maxCapacity}
              step={1}
              value={[capacity]}
              onValueChange={(values) => setCapacity(values[0])}
            />
          </div>
        </div>
      </div>

      {filteredRooms.length === 0 ? (
        <div className="text-center py-20 bg-muted/30 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">No rooms found</h2>
          <p className="text-muted-foreground">
            Try adjusting your filters to find what you're looking for.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      )}

      <div className="text-sm text-muted-foreground text-center">
        Showing {filteredRooms.length} of {initialRooms?.length || 0} rooms
      </div>
    </div>
  )
}

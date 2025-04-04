'use client'

import { useState, useMemo, useEffect } from 'react'
import { RoomCard } from '@/components/custom/rooms-new-card'
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
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import {
  Search,
  Users,
  Grid,
  List,
  SlidersHorizontal,
  X,
  ArrowUpDown,
  Building2,
  Calendar,
  MapPin,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(true)
  const [sortBy, setSortBy] = useState<string>('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [isLoading, setIsLoading] = useState(false)

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

    const filtered = initialRooms.filter((room) => {
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

    // Sort the filtered rooms
    return filtered.sort((a, b) => {
      let valueA = a[sortBy]
      let valueB = b[sortBy]

      // Handle string comparison
      if (typeof valueA === 'string') {
        valueA = valueA.toLowerCase()
        valueB = valueB.toLowerCase()
      }

      // Sort based on order
      if (sortOrder === 'asc') {
        return valueA > valueB ? 1 : -1
      } else {
        return valueA < valueB ? 1 : -1
      }
    })
  }, [initialRooms, searchQuery, roomType, status, capacity, sortBy, sortOrder])

  // Get unique room types for the filter
  const roomTypes = useMemo(() => {
    if (!initialRooms) return []
    const types = new Set(initialRooms.map((room) => room['room type']))
    return Array.from(types).filter(Boolean)
  }, [initialRooms])

  // Check if any filters are active
  const hasActiveFilters = searchQuery || roomType !== 'all' || status !== 'all' || capacity > 0

  // Function to clear all filters
  const clearFilters = () => {
    setSearchQuery('')
    setRoomType('all')
    setStatus('all')
    setCapacity(0)
  }

  // Function to toggle sort order
  const handleSort = (value: string) => {
    if (sortBy === value) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(value)
      setSortOrder('asc')
    }
  }

  // Simulate loading when filters change
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [searchQuery, roomType, status, capacity, sortBy, sortOrder])

  return (
    <div className="space-y-6">
      {/* Filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Filters</CardTitle>
                    <CardDescription>Refine your search with these filters</CardDescription>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                        >
                          {viewMode === 'grid' ? (
                            <List className="h-4 w-4" />
                          ) : (
                            <Grid className="h-4 w-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        {viewMode === 'grid' ? 'List view' : 'Grid view'}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="h-8 gap-1 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-3.5 w-3.5" />
                      Clear all
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Search input */}
                  <div className="space-y-2">
                    <Label htmlFor="search" className="flex items-center gap-2">
                      <Search className="h-3.5 w-3.5 text-muted-foreground" />
                      Search
                    </Label>
                    <Input
                      id="search"
                      placeholder="Name or location..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="transition-all"
                    />
                  </div>

                  {/* Room type filter */}
                  <div className="space-y-2">
                    <Label htmlFor="room-type" className="flex items-center gap-2">
                      <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                      Room Type
                    </Label>
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
                    <Label htmlFor="status" className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                      Status
                    </Label>
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
                      <Label htmlFor="capacity" className="flex items-center gap-2">
                        <Users className="h-3.5 w-3.5 text-muted-foreground" />
                        Min Capacity
                      </Label>
                      <div className="flex items-center text-sm font-medium bg-muted px-2 py-0.5 rounded-md">
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
                      className="py-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {searchQuery && (
            <Badge variant="secondary" className="gap-1 px-3 py-1.5">
              Search: {searchQuery}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchQuery('')}
                className="h-4 w-4 p-0 ml-1 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove search filter</span>
              </Button>
            </Badge>
          )}
          {roomType !== 'all' && (
            <Badge variant="secondary" className="gap-1 px-3 py-1.5">
              Type: {roomType}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setRoomType('all')}
                className="h-4 w-4 p-0 ml-1 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove type filter</span>
              </Button>
            </Badge>
          )}
          {status !== 'all' && (
            <Badge variant="secondary" className="gap-1 px-3 py-1.5">
              Status: {status}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setStatus('all')}
                className="h-4 w-4 p-0 ml-1 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove status filter</span>
              </Button>
            </Badge>
          )}
          {capacity > 0 && (
            <Badge variant="secondary" className="gap-1 px-3 py-1.5">
              Min Capacity: {capacity}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCapacity(0)}
                className="h-4 w-4 p-0 ml-1 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove capacity filter</span>
              </Button>
            </Badge>
          )}
        </div>
      )}

      {/* Sort options */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{filteredRooms.length}</span> of{' '}
          <span className="font-medium text-foreground">{initialRooms?.length || 0}</span> rooms
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Tabs value={sortBy} onValueChange={handleSort} className="h-8">
            <TabsList className="h-8 bg-muted/50">
              <TabsTrigger value="name" className="h-7 px-3 text-xs">
                Name{' '}
                {sortBy === 'name' && (
                  <ArrowUpDown
                    className={cn('ml-1 h-3 w-3', sortOrder === 'desc' && 'rotate-180')}
                  />
                )}
              </TabsTrigger>
              <TabsTrigger value="capacity" className="h-7 px-3 text-xs">
                Capacity{' '}
                {sortBy === 'capacity' && (
                  <ArrowUpDown
                    className={cn('ml-1 h-3 w-3', sortOrder === 'desc' && 'rotate-180')}
                  />
                )}
              </TabsTrigger>
              <TabsTrigger value="location" className="h-7 px-3 text-xs">
                Location{' '}
                {sortBy === 'location' && (
                  <ArrowUpDown
                    className={cn('ml-1 h-3 w-3', sortOrder === 'desc' && 'rotate-180')}
                  />
                )}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Results */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-muted animate-pulse" />
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="h-6 w-3/4 bg-muted animate-pulse rounded" />
                    <div className="h-4 bg-muted animate-pulse rounded" />
                    <div className="h-4 w-1/2 bg-muted animate-pulse rounded" />
                    <div className="flex gap-2 pt-2">
                      <div className="h-8 w-20 bg-muted animate-pulse rounded-full" />
                      <div className="h-8 w-20 bg-muted animate-pulse rounded-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        ) : filteredRooms.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20 bg-muted/30 rounded-lg border border-dashed"
          >
            <div className="flex flex-col items-center max-w-md mx-auto px-4">
              <MapPin className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
              <h2 className="text-2xl font-semibold mb-2">No rooms found</h2>
              <p className="text-muted-foreground mb-6">
                We couldnt find any rooms matching your current filters. Try adjusting your search
                criteria or clear the filters to see all available rooms.
              </p>
              {hasActiveFilters && <Button onClick={clearFilters}>Clear all filters</Button>}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'flex flex-col gap-4',
            )}
          >
            {filteredRooms.map((room) => (
              <motion.div
                key={room.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <RoomCard room={room} viewMode={viewMode} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

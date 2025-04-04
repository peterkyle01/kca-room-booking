'use client'

import type React from 'react'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search } from 'lucide-react'

interface HeroSearchProps {
  roomTypes: string[]
}

export function HeroSearch({ roomTypes }: HeroSearchProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [capacity, setCapacity] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()

    if (searchQuery) {
      params.append('search', searchQuery)
    }

    if (selectedType) {
      params.append('type', selectedType)
    }

    if (capacity) {
      params.append('capacity', capacity)
    }

    router.push(`/rooms?${params.toString()}`)
  }

  return (
    <Card className="shadow-lg border-0">
      <CardContent className="p-0">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
          <div className="space-y-2">
            <label htmlFor="search" className="text-sm font-medium">
              Search
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Room name or location..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="room-type" className="text-sm font-medium">
              Room Type
            </label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger id="room-type">
                <SelectValue placeholder="Any type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any type</SelectItem>
                {roomTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="capacity" className="text-sm font-medium">
              Capacity
            </label>
            <Select value={capacity} onValueChange={setCapacity}>
              <SelectTrigger id="capacity">
                <SelectValue placeholder="Any size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any size</SelectItem>
                <SelectItem value="1-4">1-4 people</SelectItem>
                <SelectItem value="5-10">5-10 people</SelectItem>
                <SelectItem value="11-20">11-20 people</SelectItem>
                <SelectItem value="21+">21+ people</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button type="submit" className="w-full">
              Search Rooms
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

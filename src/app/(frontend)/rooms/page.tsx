import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  CalendarIcon,
  ChevronDown,
  Filter,
  Grid3X3,
  LayoutList,
  MapPin,
  Search,
  Star,
  Users,
  Wifi,
  Tv,
  Coffee,
  Projector,
} from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function RoomsPage() {
  return (
    <section className="bg-muted/40 py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Rooms</h1>
            <p className="text-muted-foreground">Find and book the perfect room for your needs</p>
          </div>

          <div className="grid gap-4 md:grid-cols-[280px_1fr]">
            {/* Mobile Filter Toggle */}
            <div className="md:hidden">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <span>Filters</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[calc(100vw-2rem)] p-0" align="start">
                  <div className="p-4 space-y-4">
                    {/* Mobile Filters Content */}
                    <div className="space-y-2">
                      <h3 className="font-medium">Room Type</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="conference-mobile" />
                          <label htmlFor="conference-mobile" className="text-sm">
                            Conference Room
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="study-mobile" />
                          <label htmlFor="study-mobile" className="text-sm">
                            Study Room
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="event-mobile" />
                          <label htmlFor="event-mobile" className="text-sm">
                            Event Hall
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="classroom-mobile" />
                          <label htmlFor="classroom-mobile" className="text-sm">
                            Classroom
                          </label>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h3 className="font-medium">Capacity</h3>
                      <div className="pt-2">
                        <Slider defaultValue={[20]} max={100} step={1} />
                        <div className="flex justify-between mt-2">
                          <span className="text-xs text-muted-foreground">1 person</span>
                          <span className="text-xs text-muted-foreground">100 people</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h3 className="font-medium">Amenities</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="wifi-mobile" />
                          <label htmlFor="wifi-mobile" className="text-sm">
                            WiFi
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="projector-mobile" />
                          <label htmlFor="projector-mobile" className="text-sm">
                            Projector
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="tv-mobile" />
                          <label htmlFor="tv-mobile" className="text-sm">
                            TV/Monitor
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="refreshments-mobile" />
                          <label htmlFor="refreshments-mobile" className="text-sm">
                            Refreshments
                          </label>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h3 className="font-medium">Availability</h3>
                      <div className="space-y-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>Pick a date</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button variant="outline" className="flex-1">
                        Reset
                      </Button>
                      <Button className="flex-1">Apply Filters</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Desktop Filters Sidebar */}
            <div className="hidden md:block space-y-6 bg-background p-6 rounded-lg border">
              <div>
                <h3 className="font-medium mb-3">Search</h3>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search rooms..." className="pl-8" />
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Room Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="conference" />
                    <label htmlFor="conference" className="text-sm">
                      Conference Room
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="study" />
                    <label htmlFor="study" className="text-sm">
                      Study Room
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="event" />
                    <label htmlFor="event" className="text-sm">
                      Event Hall
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="classroom" />
                    <label htmlFor="classroom" className="text-sm">
                      Classroom
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Capacity</h3>
                <div className="pt-2">
                  <Slider defaultValue={[20]} max={100} step={1} />
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-muted-foreground">1 person</span>
                    <span className="text-xs text-muted-foreground">100 people</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Amenities</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="wifi" />
                    <label htmlFor="wifi" className="text-sm">
                      WiFi
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="projector" />
                    <label htmlFor="projector" className="text-sm">
                      Projector
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="tv" />
                    <label htmlFor="tv" className="text-sm">
                      TV/Monitor
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="refreshments" />
                    <label htmlFor="refreshments" className="text-sm">
                      Refreshments
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Availability</h3>
                <div className="space-y-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Pick a date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Location</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="main">Main Campus</SelectItem>
                    <SelectItem value="north">North Building</SelectItem>
                    <SelectItem value="south">South Building</SelectItem>
                    <SelectItem value="library">Library</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>

            {/* Rooms List */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-muted-foreground">Showing 24 rooms</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <p className="text-sm whitespace-nowrap">Sort by:</p>
                    <Select defaultValue="recommended">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recommended">Recommended</SelectItem>
                        <SelectItem value="capacity-asc">Capacity: Low to High</SelectItem>
                        <SelectItem value="capacity-desc">Capacity: High to Low</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="hidden sm:flex border rounded-md">
                    <Button variant="ghost" size="icon" className="rounded-none rounded-l-md">
                      <Grid3X3 className="h-4 w-4" />
                      <span className="sr-only">Grid view</span>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button variant="ghost" size="icon" className="rounded-none rounded-r-md">
                      <LayoutList className="h-4 w-4" />
                      <span className="sr-only">List view</span>
                    </Button>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full sm:w-auto grid grid-cols-4 sm:inline-flex">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="conference">Conference</TabsTrigger>
                  <TabsTrigger value="study">Study</TabsTrigger>
                  <TabsTrigger value="event">Event</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Room Card 1 */}
                    <Card className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          width={400}
                          height={300}
                          alt="Conference Room A"
                          className="object-cover w-full h-48"
                        />
                        <Badge className="absolute top-2 right-2">Available Now</Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">Conference Room A</h3>
                          <Badge variant="outline">Conference</Badge>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            Main Building, Floor 2
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          Spacious conference room with modern AV equipment and comfortable seating.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Wifi className="h-3 w-3" />
                            <span className="text-xs">WiFi</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Projector className="h-3 w-3" />
                            <span className="text-xs">Projector</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Coffee className="h-3 w-3" />
                            <span className="text-xs">Refreshments</span>
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">Up to 20 people</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-medium">4.8</span>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium">$25</span>
                            <span className="text-xs text-muted-foreground"> / hour</span>
                          </div>
                          <Button>Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Room Card 2 */}
                    <Card className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          width={400}
                          height={300}
                          alt="Study Room B"
                          className="object-cover w-full h-48"
                        />
                        <Badge className="absolute top-2 right-2">Available Now</Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">Study Room B</h3>
                          <Badge variant="outline">Study</Badge>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Library, Floor 1</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          Quiet study room perfect for individual or small group study sessions.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Wifi className="h-3 w-3" />
                            <span className="text-xs">WiFi</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Tv className="h-3 w-3" />
                            <span className="text-xs">Monitor</span>
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">Up to 4 people</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-medium">4.9</span>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium">$10</span>
                            <span className="text-xs text-muted-foreground"> / hour</span>
                          </div>
                          <Button>Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Room Card 3 */}
                    <Card className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          width={400}
                          height={300}
                          alt="Event Hall C"
                          className="object-cover w-full h-48"
                        />
                        <Badge variant="secondary" className="absolute top-2 right-2">
                          Booked Today
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">Event Hall C</h3>
                          <Badge variant="outline">Event</Badge>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            South Building, Ground Floor
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          Large event hall suitable for conferences, seminars, and large gatherings.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Wifi className="h-3 w-3" />
                            <span className="text-xs">WiFi</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Projector className="h-3 w-3" />
                            <span className="text-xs">Projector</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Coffee className="h-3 w-3" />
                            <span className="text-xs">Refreshments</span>
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">Up to 100 people</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-medium">4.7</span>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium">$100</span>
                            <span className="text-xs text-muted-foreground"> / hour</span>
                          </div>
                          <Button variant="outline">Check Availability</Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Room Card 4 */}
                    <Card className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          width={400}
                          height={300}
                          alt="Classroom D"
                          className="object-cover w-full h-48"
                        />
                        <Badge className="absolute top-2 right-2">Available Now</Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">Classroom D</h3>
                          <Badge variant="outline">Classroom</Badge>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            North Building, Floor 3
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          Standard classroom with whiteboard and flexible seating arrangements.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Wifi className="h-3 w-3" />
                            <span className="text-xs">WiFi</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Projector className="h-3 w-3" />
                            <span className="text-xs">Projector</span>
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">Up to 30 people</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-medium">4.5</span>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium">$20</span>
                            <span className="text-xs text-muted-foreground"> / hour</span>
                          </div>
                          <Button>Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Room Card 5 */}
                    <Card className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          width={400}
                          height={300}
                          alt="Conference Room E"
                          className="object-cover w-full h-48"
                        />
                        <Badge className="absolute top-2 right-2">Available Now</Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">Conference Room E</h3>
                          <Badge variant="outline">Conference</Badge>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            Main Building, Floor 4
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          Executive conference room with premium furnishings and state-of-the-art
                          technology.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Wifi className="h-3 w-3" />
                            <span className="text-xs">WiFi</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Projector className="h-3 w-3" />
                            <span className="text-xs">Projector</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Coffee className="h-3 w-3" />
                            <span className="text-xs">Refreshments</span>
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">Up to 15 people</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-medium">4.9</span>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium">$30</span>
                            <span className="text-xs text-muted-foreground"> / hour</span>
                          </div>
                          <Button>Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Room Card 6 */}
                    <Card className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          width={400}
                          height={300}
                          alt="Study Room F"
                          className="object-cover w-full h-48"
                        />
                        <Badge variant="secondary" className="absolute top-2 right-2">
                          Booked Today
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">Study Room F</h3>
                          <Badge variant="outline">Study</Badge>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Library, Floor 2</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          Private study room with soundproofing and ergonomic furniture.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Wifi className="h-3 w-3" />
                            <span className="text-xs">WiFi</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Tv className="h-3 w-3" />
                            <span className="text-xs">Monitor</span>
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">Up to 2 people</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-medium">4.8</span>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium">$8</span>
                            <span className="text-xs text-muted-foreground"> / hour</span>
                          </div>
                          <Button variant="outline">Check Availability</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="conference" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Conference Room Cards would go here */}
                    <Card className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          width={400}
                          height={300}
                          alt="Conference Room A"
                          className="object-cover w-full h-48"
                        />
                        <Badge className="absolute top-2 right-2">Available Now</Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">Conference Room A</h3>
                          <Badge variant="outline">Conference</Badge>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            Main Building, Floor 2
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          Spacious conference room with modern AV equipment and comfortable seating.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Wifi className="h-3 w-3" />
                            <span className="text-xs">WiFi</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Projector className="h-3 w-3" />
                            <span className="text-xs">Projector</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Coffee className="h-3 w-3" />
                            <span className="text-xs">Refreshments</span>
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">Up to 20 people</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-medium">4.8</span>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium">$25</span>
                            <span className="text-xs text-muted-foreground"> / hour</span>
                          </div>
                          <Button>Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          width={400}
                          height={300}
                          alt="Conference Room E"
                          className="object-cover w-full h-48"
                        />
                        <Badge className="absolute top-2 right-2">Available Now</Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">Conference Room E</h3>
                          <Badge variant="outline">Conference</Badge>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            Main Building, Floor 4
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          Executive conference room with premium furnishings and state-of-the-art
                          technology.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Wifi className="h-3 w-3" />
                            <span className="text-xs">WiFi</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Projector className="h-3 w-3" />
                            <span className="text-xs">Projector</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Coffee className="h-3 w-3" />
                            <span className="text-xs">Refreshments</span>
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">Up to 15 people</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-medium">4.9</span>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium">$30</span>
                            <span className="text-xs text-muted-foreground"> / hour</span>
                          </div>
                          <Button>Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="study" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Study Room Cards would go here */}
                    <Card className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          width={400}
                          height={300}
                          alt="Study Room B"
                          className="object-cover w-full h-48"
                        />
                        <Badge className="absolute top-2 right-2">Available Now</Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">Study Room B</h3>
                          <Badge variant="outline">Study</Badge>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Library, Floor 1</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          Quiet study room perfect for individual or small group study sessions.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Wifi className="h-3 w-3" />
                            <span className="text-xs">WiFi</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Tv className="h-3 w-3" />
                            <span className="text-xs">Monitor</span>
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">Up to 4 people</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-medium">4.9</span>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium">$10</span>
                            <span className="text-xs text-muted-foreground"> / hour</span>
                          </div>
                          <Button>Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          width={400}
                          height={300}
                          alt="Study Room F"
                          className="object-cover w-full h-48"
                        />
                        <Badge variant="secondary" className="absolute top-2 right-2">
                          Booked Today
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">Study Room F</h3>
                          <Badge variant="outline">Study</Badge>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Library, Floor 2</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          Private study room with soundproofing and ergonomic furniture.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Wifi className="h-3 w-3" />
                            <span className="text-xs">WiFi</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Tv className="h-3 w-3" />
                            <span className="text-xs">Monitor</span>
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">Up to 2 people</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-medium">4.8</span>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium">$8</span>
                            <span className="text-xs text-muted-foreground"> / hour</span>
                          </div>
                          <Button variant="outline">Check Availability</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="event" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Event Hall Cards would go here */}
                    <Card className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          width={400}
                          height={300}
                          alt="Event Hall C"
                          className="object-cover w-full h-48"
                        />
                        <Badge variant="secondary" className="absolute top-2 right-2">
                          Booked Today
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">Event Hall C</h3>
                          <Badge variant="outline">Event</Badge>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            South Building, Ground Floor
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          Large event hall suitable for conferences, seminars, and large gatherings.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Wifi className="h-3 w-3" />
                            <span className="text-xs">WiFi</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Projector className="h-3 w-3" />
                            <span className="text-xs">Projector</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Coffee className="h-3 w-3" />
                            <span className="text-xs">Refreshments</span>
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">Up to 100 people</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-medium">4.7</span>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium">$100</span>
                            <span className="text-xs text-muted-foreground"> / hour</span>
                          </div>
                          <Button variant="outline">Check Availability</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

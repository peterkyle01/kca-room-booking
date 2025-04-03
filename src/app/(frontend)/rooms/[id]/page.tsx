import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar } from '@/components/ui/calendar'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  ArrowLeft,
  CalendarIcon,
  Check,
  Clock,
  Coffee,
  ExternalLink,
  Heart,
  Info,
  MapPin,
  Projector,
  Share,
  Star,
  Tv,
  Users,
  Wifi,
  X,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export default function RoomDetailPage() {
  return (
    <div className="container px-4 py-6 md:px-6 md:py-8">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="sm" asChild className="gap-1">
          <Link href="/rooms">
            <ArrowLeft className="h-4 w-4" />
            Back to Rooms
          </Link>
        </Button>
      </div>

      {/* Room Gallery */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Conference Room A - Main View"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Conference Room A - Side View"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Conference Room A - Equipment"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Conference Room A - Seating"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Button
                variant="secondary"
                className="absolute inset-0 w-full h-full bg-black/50 hover:bg-black/60 text-white rounded-lg"
              >
                +8 more photos
              </Button>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Conference Room A - Additional"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Room Header */}
          <section className="mb-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge>Conference Room</Badge>
                  <Badge variant="outline" className="bg-green-50">
                    Available Now
                  </Badge>
                </div>
                <h1 className="text-3xl font-bold">Conference Room A</h1>
                <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Main Building, Floor 2</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Save</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <span className="font-medium">4.8</span>
                <span className="text-muted-foreground">(124 reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-5 w-5" />
                <span>Up to 20 people</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-5 w-5" />
                <span>Available 8:00 AM - 10:00 PM</span>
              </div>
            </div>
          </section>

          {/* Room Description */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">About this room</h2>
            <div className="prose max-w-none">
              <p>
                This spacious conference room is perfect for meetings, presentations, and
                collaborative sessions. Equipped with modern audiovisual equipment and comfortable
                seating, Conference Room A provides an ideal environment for productive discussions
                and impactful presentations.
              </p>
              <p>
                The room features a large conference table with ergonomic chairs, a high-definition
                projector, a sound system, and high-speed WiFi. The space is designed to accommodate
                up to 20 people comfortably, with flexible seating arrangements available upon
                request.
              </p>
              <p>
                Located on the second floor of the Main Building, this room offers a professional
                atmosphere with natural lighting and climate control for your comfort. Refreshments
                can be arranged with advance notice.
              </p>
            </div>
          </section>

          {/* Room Amenities */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-primary" />
                <span>High-speed WiFi</span>
              </div>
              <div className="flex items-center gap-2">
                <Projector className="h-5 w-5 text-primary" />
                <span>HD Projector</span>
              </div>
              <div className="flex items-center gap-2">
                <Tv className="h-5 w-5 text-primary" />
                <span>75 Display</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="h-5 w-5 text-primary" />
                <span>Refreshments</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Seating for 20</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Climate Control</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Whiteboard</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Video Conferencing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Accessible</span>
              </div>
            </div>
          </section>

          {/* Availability Calendar */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Availability</h2>
            <Tabs defaultValue="calendar" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="calendar">Calendar</TabsTrigger>
                <TabsTrigger value="timetable">Timetable</TabsTrigger>
              </TabsList>
              <TabsContent value="calendar" className="mt-4">
                <div className="border rounded-lg p-4">
                  <Calendar
                    mode="single"
                    className="mx-auto"
                    classNames={{
                      day_today: 'bg-primary/10 text-primary font-bold',
                      day_selected: 'bg-primary text-primary-foreground',
                      day_disabled: 'text-muted-foreground opacity-50 line-through',
                    }}
                    disabled={[new Date(2025, 3, 5), new Date(2025, 3, 8), new Date(2025, 3, 12)]}
                  />
                  <div className="flex items-center justify-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="text-sm">Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-muted line-through"></div>
                      <span className="text-sm">Booked</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary/10"></div>
                      <span className="text-sm">Today</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="timetable" className="mt-4">
                <div className="border rounded-lg p-4 overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Time</TableHead>
                        <TableHead>Monday</TableHead>
                        <TableHead>Tuesday</TableHead>
                        <TableHead>Wednesday</TableHead>
                        <TableHead>Thursday</TableHead>
                        <TableHead>Friday</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">8:00 - 10:00</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-red-600">Booked</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">10:00 - 12:00</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-red-600">Booked</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-red-600">Booked</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">12:00 - 14:00</TableCell>
                        <TableCell className="text-red-600">Booked</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-red-600">Booked</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">14:00 - 16:00</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">16:00 - 18:00</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-red-600">Booked</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-green-600">Available</TableCell>
                        <TableCell className="text-red-600">Booked</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Location */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <div className="border rounded-lg overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">Map preview</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Main Building, Floor 2</h3>
                <p className="text-muted-foreground">123 Campus Drive, University City</p>
                <div className="mt-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <ExternalLink className="h-4 w-4" />
                    View on Map
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Reviews</h2>
              <Button variant="outline" size="sm">
                Write a Review
              </Button>
            </div>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="@user" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">John Doe</h3>
                    <span className="text-xs text-muted-foreground">2 weeks ago</span>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn('h-4 w-4', i < 5 ? 'fill-primary text-primary' : '')}
                      />
                    ))}
                  </div>
                  <p className="text-sm">
                    Excellent room for our team meeting. The projector and sound system worked
                    perfectly, and the space was clean and comfortable. Would definitely book again.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="@user" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">Alice Smith</h3>
                    <span className="text-xs text-muted-foreground">1 month ago</span>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn('h-4 w-4', i < 4 ? 'fill-primary text-primary' : '')}
                      />
                    ))}
                  </div>
                  <p className="text-sm">
                    Great space for our presentation. The only issue was that the WiFi was a bit
                    slow at times, but overall a good experience. The staff was very helpful.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="@user" />
                  <AvatarFallback>RJ</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">Robert Johnson</h3>
                    <span className="text-xs text-muted-foreground">2 months ago</span>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn('h-4 w-4', i < 5 ? 'fill-primary text-primary' : '')}
                      />
                    ))}
                  </div>
                  <p className="text-sm">
                    Perfect venue for our department meeting. The room was spacious, well-equipped,
                    and the refreshments were a nice touch. Highly recommend for any professional
                    gathering.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button variant="outline">View All 124 Reviews</Button>
              </div>
            </div>
          </section>

          {/* Similar Rooms */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Similar Rooms</h2>
            <div className="grid sm:grid-cols-2 gap-4">
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
                    <span className="text-xs text-muted-foreground">Main Building, Floor 4</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">Up to 15 people</span>
                    </div>
                    <Button size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Conference Room B"
                    className="object-cover w-full h-48"
                  />
                  <Badge className="absolute top-2 right-2">Available Now</Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Conference Room B</h3>
                    <Badge variant="outline">Conference</Badge>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">North Building, Floor 1</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">Up to 25 people</span>
                    </div>
                    <Button size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Booking Sidebar */}
        <div>
          <div className="sticky top-24">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-baseline justify-between">
                    <div className="text-2xl font-bold">$25</div>
                    <div className="text-muted-foreground">per hour</div>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">4.8</span>
                    <span className="text-muted-foreground">(124 reviews)</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date</label>
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

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Start Time</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8:00">8:00 AM</SelectItem>
                          <SelectItem value="9:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="13:00">1:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">End Time</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="13:00">1:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                          <SelectItem value="18:00">6:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Number of Attendees</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 people</SelectItem>
                        <SelectItem value="6-10">6-10 people</SelectItem>
                        <SelectItem value="11-15">11-15 people</SelectItem>
                        <SelectItem value="16-20">16-20 people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Additional Requirements</label>
                    <Textarea placeholder="Any special requests or requirements?" />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>$25 x 2 hours</span>
                      <span>$50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cleaning fee</span>
                      <span>$10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>$5</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>$65</span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Book Now
                  </Button>
                </form>

                <div className="mt-4 text-center text-sm text-muted-foreground">
                  You wont be charged yet
                </div>

                <Accordion type="single" collapsible className="mt-4">
                  <AccordionItem value="cancellation">
                    <AccordionTrigger className="text-sm">Cancellation policy</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Free cancellation up to 24 hours before your reservation. Cancellations made
                        less than 24 hours in advance are subject to a 50% fee.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="rules">
                    <AccordionTrigger className="text-sm">Room rules</AccordionTrigger>
                    <AccordionContent>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-0.5 text-green-500" />
                          <span>No food or drinks near equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-0.5 text-green-500" />
                          <span>Leave the room as you found it</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 mt-0.5 text-red-500" />
                          <span>No smoking or vaping</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  <Info className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Report this listing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

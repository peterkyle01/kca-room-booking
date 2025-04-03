import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon, CheckCircle, Clock, MapPin, Search, Star, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Your Perfect Room in Seconds
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    KCA Room Booking makes it easy to find and book the perfect room for your needs,
                    whether its for a meeting, event, or study session.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#">Get Started</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2 bg-background p-4 rounded-xl shadow-lg">
                <div className="text-center font-semibold text-lg mb-4">Quick Search</div>
                <div className="space-y-4">
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      htmlFor="location"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="location" placeholder="Campus or building" className="pl-8" />
                    </div>
                  </div>
                  <div className="grid w-full gap-1.5">
                    <label htmlFor="date" className="text-sm font-medium leading-none">
                      Date
                    </label>
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
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      htmlFor="capacity"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Capacity
                    </label>
                    <div className="relative">
                      <Users className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="capacity"
                        type="number"
                        placeholder="Number of people"
                        className="pl-8"
                      />
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    <Search className="mr-2 h-4 w-4" /> Search Rooms
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a comprehensive set of features to make room booking simple
                  and efficient.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Easy Search</h3>
                <p className="text-muted-foreground">
                  Find the perfect room with our powerful search filters and intuitive interface.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Real-time Availability</h3>
                <p className="text-muted-foreground">
                  See room availability in real-time and book instantly without waiting for
                  confirmation.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Instant Confirmation</h3>
                <p className="text-muted-foreground">
                  Receive immediate booking confirmations and reminders for your upcoming
                  reservations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="rooms" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Rooms</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Popular Room Types
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our selection of rooms designed to meet your specific needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Conference Room"
                  className="object-cover w-full h-48"
                />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Conference Room</h3>
                    <Badge>Popular</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Perfect for meetings and presentations with full AV equipment.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">Up to 20 people</span>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Study Room"
                  className="object-cover w-full h-48"
                />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Study Room</h3>
                    <Badge variant="outline">Quiet Zone</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Quiet space for individual or small group study sessions.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">1-4 people</span>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Event Hall"
                  className="object-cover w-full h-48"
                />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Event Hall</h3>
                    <Badge variant="secondary">Spacious</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Large space for events, seminars, and large gatherings.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">Up to 100 people</span>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button size="lg" variant="outline">
                View All Rooms
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  What Our Users Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dont just take our word for it. Heres what people are saying about KCA Room
                  Booking.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed">
                      KCA Room Booking made it so easy to find and book a study room for my group
                      project. The interface is intuitive and the confirmation was instant.
                    </p>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-xs text-muted-foreground">Student</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed">
                      As a faculty member, I appreciate how simple it is to reserve rooms for
                      classes and meetings. The calendar view makes it easy to see availability at a
                      glance.
                    </p>
                    <div className="font-semibold">Dr. Michael Chen</div>
                    <div className="text-xs text-muted-foreground">Professor</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? 'fill-primary text-primary' : ''}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed">
                      We used KCA Room Booking to reserve the event hall for our clubs annual
                      showcase. The process was seamless and the space was exactly as described.
                    </p>
                    <div className="font-semibold">Alex Rodriguez</div>
                    <div className="text-xs text-muted-foreground">Student Club President</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

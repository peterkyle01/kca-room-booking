import Link from 'next/link'
import { getRooms } from '@/app/server-actions/booking'
import { Button } from '@/components/ui/button'
import { FeaturedRooms } from '@/components/custom/featured-rooms'
import { RoomCategories } from '@/components/custom/room-categories'
import { HeroSearch } from '@/components/custom/hero-search'
import { BookingStats } from '@/components/custom/booking-stats'
import { ArrowRight, CalendarCheck, Clock, Users } from 'lucide-react'

export default async function Home() {
  const rooms = await getRooms()

  // Get featured rooms (available rooms with images)
  const featuredRooms = rooms
    ? rooms
        .filter((room) => room.status === 'Available' && room.images && room.images.length > 0)
        .slice(0, 3)
    : []

  // Get room types for categories
  const roomTypes = rooms ? Array.from(new Set(rooms.map((room) => room['room type']))) : []

  // Mock stats for demonstration
  const mockStats = {
    totalBookings: 120,
    pendingBookings: 15,
    approvedBookings: 95,
    rejectedBookings: 10,
    upcomingBookings: 25,
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Find the perfect space for your next meeting
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Book conference rooms, study spaces, and event halls with just a few clicks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/rooms">Browse All Rooms</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/bookings">My Bookings</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Search Component */}
        <div className="container mx-auto px-4 -mt-6 md:-mt-10 relative z-10">
          {/* @ts-expect-error no-type */}
          <HeroSearch roomTypes={roomTypes} />
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Spaces</h2>
              <p className="text-muted-foreground">Discover our most popular rooms</p>
            </div>
            <Link
              href="/rooms"
              className="group flex items-center text-primary font-medium mt-4 md:mt-0"
            >
              View all rooms
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <FeaturedRooms rooms={featuredRooms} />
        </div>
      </section>

      {/* Room Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-2">Find Rooms by Type</h2>
          <p className="text-muted-foreground text-center mb-12">
            Choose the perfect space for your specific needs
          </p>
          {/* @ts-expect-error no-type */}
          <RoomCategories roomTypes={roomTypes} rooms={rooms || []} />
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-2">
            Why Choose Our Platform
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Simple, efficient, and reliable room booking
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Booking</h3>
              <p className="text-muted-foreground">
                Reserve your room in seconds with our streamlined booking process. No complicated
                forms or waiting.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diverse Spaces</h3>
              <p className="text-muted-foreground">
                From intimate study rooms to large event halls, find the perfect space for any
                occasion or group size.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CalendarCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Availability</h3>
              <p className="text-muted-foreground">
                See up-to-date availability for all rooms and get instant confirmation for your
                bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-2">
            Our Platform in Numbers
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Join hundreds of satisfied users who trust our booking system
          </p>

          <div className="max-w-4xl mx-auto">
            <BookingStats stats={mockStats} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to book your first room?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get started today and experience the easiest way to book and manage room reservations.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/rooms">Browse Available Rooms</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

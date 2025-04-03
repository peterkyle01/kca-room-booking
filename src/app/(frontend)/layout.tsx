import React from 'react'
import '@/styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import LogoutBtn from '@/components/custom/logout-btn'
import { getUser } from '../server-actions/user'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import { Toaster } from 'sonner'

export const metadata = {
  description: 'A convenient room booking system for KCA University',
  title: 'KCA Room Booking ',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const user = await getUser()
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-5">
          <div className="container flex h-16 items-center justify-between px-4 ">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-xl font-bold">
                <Image
                  src="/kca_room_booking.png"
                  width={100}
                  height={50}
                  alt="kca-room-booking"
                  className="invert"
                />
              </Link>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/rooms"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Rooms
              </Link>
              {user && (
                <>
                  <Link
                    href="/bookings"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    Bookings
                  </Link>
                  <Link
                    href="/profile"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    Profile
                  </Link>
                </>
              )}
              <Link
                href="/contact-us"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </nav>

            {user ? (
              <LogoutBtn {...user} />
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/sign-in" className="text-sm font-medium">
                  Sign In
                </Link>
              </div>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <AlignJustify className="md:hidden" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 px-4">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/rooms"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      Rooms
                    </Link>
                  </SheetClose>
                  {user && (
                    <>
                      <SheetClose asChild>
                        <Link
                          href="/bookings"
                          className="text-sm font-medium text-muted-foreground hover:text-foreground"
                        >
                          Bookings
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/profile"
                          className="text-sm font-medium text-muted-foreground hover:text-foreground"
                        >
                          Profile
                        </Link>
                      </SheetClose>
                    </>
                  )}
                  <SheetClose asChild>
                    <Link
                      href="/contact-us"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      Contact
                    </Link>
                  </SheetClose>
                </div>
                <SheetFooter className="w-full border-t py-6 md:py-0 px-4">
                  <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <div className="flex  items-center gap-2">
                      <Image
                        src="/kca_room_booking.png"
                        width={100}
                        height={50}
                        alt="kca-room-booking"
                        className="invert"
                      />
                    </div>
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                      © {new Date().getFullYear()} KCA Room Booking. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                      <Link
                        href="#"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        Terms
                      </Link>
                      <Link
                        href="#"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        Privacy
                      </Link>
                      <Link
                        href="#"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </header>
        <main className="container mx-auto">{children}</main>
        <footer className="w-full border-t py-6 md:py-0 px-4">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <div className="flex  items-center gap-2">
              <Image
                src="/kca_room_booking.png"
                width={100}
                height={50}
                alt="kca-room-booking"
                className="invert"
              />
            </div>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} KCA Room Booking. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  )
}

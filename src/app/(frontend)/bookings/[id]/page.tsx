import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import {
  ArrowLeft,
  CalendarIcon,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Download,
  Edit,
  FileText,
  HelpCircle,
  Info,
  MapPin,
  MessageSquare,
  Printer,
  QrCode,
  Share2,
  Timer,
  Users,
  X,
} from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

export default function BookingDetailsPage() {
  // This would normally come from a database or API
  const booking = {
    id: 'BK-2025041201',
    status: 'confirmed', // confirmed, pending, cancelled, completed
    room: {
      name: 'Conference Room A',
      type: 'Conference Room',
      location: 'Main Building, Floor 2',
      image: '/placeholder.svg?height=300&width=400',
      capacity: 20,
    },
    date: 'April 12, 2025',
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    duration: '2 hours',
    attendees: 15,
    purpose: 'Team Planning Meeting',
    bookedBy: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      avatar: '/placeholder.svg',
    },
    createdAt: 'March 15, 2025',
    pricing: {
      hourlyRate: 25,
      hours: 2,
      subtotal: 50,
      cleaningFee: 10,
      serviceFee: 5,
      total: 65,
    },
    amenities: ['WiFi', 'Projector', 'Whiteboard', 'Refreshments'],
    timeline: [
      { time: 'March 15, 2025 - 10:23 AM', event: 'Booking created', status: 'complete' },
      { time: 'March 15, 2025 - 10:24 AM', event: 'Payment processed', status: 'complete' },
      { time: 'March 15, 2025 - 10:25 AM', event: 'Booking confirmed', status: 'complete' },
      { time: 'April 12, 2025 - 10:00 AM', event: 'Check-in', status: 'upcoming' },
      { time: 'April 12, 2025 - 12:00 PM', event: 'Check-out', status: 'upcoming' },
    ],
  }

  return (
    <main className="flex-1 py-8">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <Link href="/bookings">
              <ArrowLeft className="h-4 w-4" />
              Back to Bookings
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content - 2/3 width on large screens */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge>{booking.room.type}</Badge>
                  {booking.status === 'confirmed' && (
                    <Badge variant="outline" className="bg-green-50">
                      Confirmed
                    </Badge>
                  )}
                  {booking.status === 'pending' && (
                    <Badge
                      variant="outline"
                      className="bg-yellow-50 border-yellow-200 text-yellow-800"
                    >
                      Pending
                    </Badge>
                  )}
                  {booking.status === 'cancelled' && (
                    <Badge variant="outline" className="bg-red-50 border-red-200 text-red-800">
                      Cancelled
                    </Badge>
                  )}
                  {booking.status === 'completed' && (
                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-800">
                      Completed
                    </Badge>
                  )}
                </div>
                <h1 className="text-2xl font-bold">{booking.room.name}</h1>
                <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{booking.room.location}</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Printer className="h-4 w-4" />
                  <span>Print</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </Button>
              </div>
            </div>

            {/* Room Image and Details */}
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={booking.room.image || '/placeholder.svg'}
                    alt={booking.room.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Date</div>
                      <div className="font-medium flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        {booking.date}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Time</div>
                      <div className="font-medium flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {booking.startTime} - {booking.endTime} ({booking.duration})
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Attendees</div>
                      <div className="font-medium flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {booking.attendees} people (max capacity: {booking.room.capacity})
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Purpose</div>
                      <div className="font-medium">{booking.purpose}</div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Amenities Included</div>
                    <div className="flex flex-wrap gap-2">
                      {booking.amenities.map((amenity) => (
                        <Badge
                          key={amenity}
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          <Check className="h-3 w-3" />
                          <span>{amenity}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Booking Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="relative border-l border-muted">
                  {booking.timeline.map((item, index) => (
                    <li key={index} className="mb-6 ml-6 last:mb-0">
                      <span
                        className={cn(
                          'absolute flex items-center justify-center w-6 h-6 rounded-full -left-3',
                          item.status === 'complete'
                            ? 'bg-green-100 ring-white'
                            : 'bg-muted ring-background',
                        )}
                      >
                        {item.status === 'complete' ? (
                          <CheckCircle2 className="w-3 h-3 text-green-600" />
                        ) : (
                          <Timer className="w-3 h-3 text-muted-foreground" />
                        )}
                      </span>
                      <h3 className="font-medium">{item.event}</h3>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Tabs for Additional Information */}
            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-4 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Booking Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Booking ID</TableCell>
                          <TableCell className="flex items-center gap-2">
                            {booking.id}
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Copy className="h-3 w-3" />
                              <span className="sr-only">Copy booking ID</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Booking Date</TableCell>
                          <TableCell>{booking.createdAt}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Booked By</TableCell>
                          <TableCell>{booking.bookedBy.name}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Contact Email</TableCell>
                          <TableCell>{booking.bookedBy.email}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Contact Phone</TableCell>
                          <TableCell>{booking.bookedBy.phone}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Cancellation Policy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Free cancellation up to 24 hours before your reservation. Cancellations made
                      less than 24 hours in advance are subject to a 50% fee.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Info className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Cancellation deadline: April 11, 2025, 10:00 AM
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="mt-4 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Booking Documents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="bg-muted p-2 rounded">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Booking Confirmation</div>
                            <div className="text-sm text-muted-foreground">PDF • 245 KB</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="bg-muted p-2 rounded">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Receipt</div>
                            <div className="text-sm text-muted-foreground">PDF • 198 KB</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="bg-muted p-2 rounded">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Terms and Conditions</div>
                            <div className="text-sm text-muted-foreground">PDF • 320 KB</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes" className="mt-4 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Booking Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={booking.bookedBy.avatar}
                              alt={booking.bookedBy.name}
                            />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{booking.bookedBy.name}</div>
                            <div className="text-xs text-muted-foreground">
                              March 15, 2025 - 10:30 AM
                            </div>
                          </div>
                        </div>
                        <p className="text-sm">
                          Please ensure the projector is set up before our arrival. Well need HDMI
                          connectivity for presentations.
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg" alt="Admin" />
                            <AvatarFallback>AD</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Admin</div>
                            <div className="text-xs text-muted-foreground">
                              March 16, 2025 - 9:15 AM
                            </div>
                          </div>
                        </div>
                        <p className="text-sm">
                          Confirmed. The room will be prepared with the projector and HDMI
                          connection ready for your meeting.
                        </p>
                      </div>

                      <div className="mt-4">
                        <Textarea placeholder="Add a note..." className="mb-2" />
                        <Button size="sm">Add Note</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - 1/3 width on large screens */}
          <div className="space-y-6">
            {/* Booking Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Booking Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full gap-1">
                      <Edit className="h-4 w-4" />
                      Modify Booking
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Modify Booking</DialogTitle>
                      <DialogDescription>
                        Make changes to your booking. Changes may affect pricing.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <label className="text-sm font-medium">Date</label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>{booking.date}</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <label className="text-sm font-medium">Start Time</label>
                          <Select defaultValue="10:00">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="9:00">9:00 AM</SelectItem>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                              <SelectItem value="12:00">12:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <label className="text-sm font-medium">End Time</label>
                          <Select defaultValue="12:00">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                              <SelectItem value="12:00">12:00 PM</SelectItem>
                              <SelectItem value="13:00">1:00 PM</SelectItem>
                              <SelectItem value="14:00">2:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <label className="text-sm font-medium">Number of Attendees</label>
                        <Input type="number" defaultValue={booking.attendees} />
                      </div>
                      <div className="grid gap-2">
                        <label className="text-sm font-medium">Purpose</label>
                        <Input defaultValue={booking.purpose} />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" className="w-full gap-1">
                      <X className="h-4 w-4" />
                      Cancel Booking
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Cancel Booking</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to cancel this booking? This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Keep Booking</AlertDialogCancel>
                      <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        Yes, Cancel Booking
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <Button variant="outline" className="w-full gap-1">
                  <MessageSquare className="h-4 w-4" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            {/* QR Code for Check-in */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Check-in</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg mb-4">
                  <QrCode className="h-32 w-32 text-primary" />
                </div>
                <p className="text-sm text-center text-muted-foreground mb-4">
                  Scan this QR code at the venue for quick check-in on the day of your booking.
                </p>
                <Button variant="outline" size="sm" className="gap-1">
                  <Download className="h-4 w-4" />
                  Download QR Code
                </Button>
              </CardContent>
            </Card>

            {/* Pricing Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pricing Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      ${booking.pricing.hourlyRate} × {booking.pricing.hours} hours
                    </span>
                    <span>${booking.pricing.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cleaning fee</span>
                    <span>${booking.pricing.cleaningFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service fee</span>
                    <span>${booking.pricing.serviceFee}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${booking.pricing.total}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pt-0">
                <Button variant="outline" size="sm" className="gap-1">
                  <FileText className="h-4 w-4" />
                  View Receipt
                </Button>
              </CardFooter>
            </Card>

            {/* Need Help */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-sm">
                      How do I modify my booking?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      You can modify your booking by clicking the Modify Booking button above.
                      Changes to date, time, or number of attendees may affect pricing.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-sm">
                      Whats the cancellation policy?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      Free cancellation up to 24 hours before your reservation. Cancellations made
                      less than 24 hours in advance are subject to a 50% fee.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-sm">How do I check in?</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      On the day of your booking, you can use the QR code provided to check in at
                      the venue. Alternatively, you can show your booking ID to the staff.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-4 flex items-center justify-center">
                  <Button variant="link" className="gap-1 text-sm">
                    <HelpCircle className="h-4 w-4" />
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

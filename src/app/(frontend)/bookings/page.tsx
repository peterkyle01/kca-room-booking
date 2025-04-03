import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
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
  Calendar,
  CalendarIcon,
  Check,
  Clock,
  Download,
  Edit,
  Eye,
  Filter,
  Grid,
  List,
  MapPin,
  Plus,
  Printer,
  Search,
  Star,
  Users,
  X,
} from 'lucide-react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export default function BookingsPage() {
  return (
    <div className="container px-4 py-6 md:px-6 md:py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Bookings</h1>
          <p className="text-muted-foreground">Manage your room reservations</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            New Booking
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
                <span className="sr-only">Export</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Export Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Download className="h-4 w-4 mr-2" />
                Export as CSV
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Printer className="h-4 w-4 mr-2" />
                Print Bookings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Grid className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>View Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <List className="h-4 w-4 mr-2" />
                List View
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Grid className="h-4 w-4 mr-2" />
                Grid View
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Calendar className="h-4 w-4 mr-2" />
                Calendar View
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search bookings..." className="pl-8" />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-1">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Date Range</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>From</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" />
                      </PopoverContent>
                    </Popover>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>To</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Room Type</h4>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="conference">Conference Room</SelectItem>
                      <SelectItem value="study">Study Room</SelectItem>
                      <SelectItem value="event">Event Hall</SelectItem>
                      <SelectItem value="classroom">Classroom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Location</h4>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="main">Main Building</SelectItem>
                      <SelectItem value="north">North Building</SelectItem>
                      <SelectItem value="south">South Building</SelectItem>
                      <SelectItem value="library">Library</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Apply Filters</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="upcoming">Upcoming First</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="w-full sm:w-auto grid grid-cols-3 sm:inline-flex">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-6">
          <div className="grid gap-4">
            {/* Booking Card 1 */}
            <Card>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[1fr_auto] lg:grid-cols-[120px_1fr_auto]">
                  <div className="hidden lg:block p-4 border-r">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="text-3xl font-bold">12</div>
                      <div className="text-sm font-medium">Apr</div>
                      <div className="text-xs text-muted-foreground">2025</div>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge>Conference Room</Badge>
                      <Badge variant="outline" className="bg-green-50">
                        Confirmed
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold">Conference Room A</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>Main Building, Floor 2</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>10:00 AM - 12:00 PM</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        <span>15 attendees</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <div className="text-sm font-medium">
                        Booking ID:{' '}
                        <span className="font-normal text-muted-foreground">BK-2025041201</span>
                      </div>
                      <div className="text-sm font-medium ml-auto">
                        Total: <span className="font-semibold">$50</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-end p-4 border-t md:border-t-0 md:border-l">
                    <div className="flex md:flex-col gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        <span>Details</span>
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Edit className="h-3.5 w-3.5" />
                            <span>Modify</span>
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
                                    <span>April 12, 2025</span>
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
                              <Select defaultValue="11-15">
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1-5">1-5 people</SelectItem>
                                  <SelectItem value="6-10">6-10 people</SelectItem>
                                  <SelectItem value="11-15">11-15 people</SelectItem>
                                  <SelectItem value="16-20">16-20 people</SelectItem>
                                </SelectContent>
                              </Select>
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
                          <Button variant="outline" size="sm" className="gap-1">
                            <X className="h-3.5 w-3.5" />
                            <span>Cancel</span>
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Cancel Booking</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to cancel this booking? This action cannot be
                              undone.
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
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Card 2 */}
            <Card>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[1fr_auto] lg:grid-cols-[120px_1fr_auto]">
                  <div className="hidden lg:block p-4 border-r">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="text-3xl font-bold">15</div>
                      <div className="text-sm font-medium">Apr</div>
                      <div className="text-xs text-muted-foreground">2025</div>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge>Study Room</Badge>
                      <Badge variant="outline" className="bg-green-50">
                        Confirmed
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold">Study Room B</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>Library, Floor 1</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>2:00 PM - 4:00 PM</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        <span>4 attendees</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <div className="text-sm font-medium">
                        Booking ID:{' '}
                        <span className="font-normal text-muted-foreground">BK-2025041502</span>
                      </div>
                      <div className="text-sm font-medium ml-auto">
                        Total: <span className="font-semibold">$20</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-end p-4 border-t md:border-t-0 md:border-l">
                    <div className="flex md:flex-col gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        <span>Details</span>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Edit className="h-3.5 w-3.5" />
                        <span>Modify</span>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <X className="h-3.5 w-3.5" />
                        <span>Cancel</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Card 3 */}
            <Card>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[1fr_auto] lg:grid-cols-[120px_1fr_auto]">
                  <div className="hidden lg:block p-4 border-r">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="text-3xl font-bold">20</div>
                      <div className="text-sm font-medium">Apr</div>
                      <div className="text-xs text-muted-foreground">2025</div>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge>Event Hall</Badge>
                      <Badge
                        variant="outline"
                        className="bg-yellow-50 border-yellow-200 text-yellow-800"
                      >
                        Pending
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold">Event Hall C</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>South Building, Ground Floor</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        <span>75 attendees</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <div className="text-sm font-medium">
                        Booking ID:{' '}
                        <span className="font-normal text-muted-foreground">BK-2025042003</span>
                      </div>
                      <div className="text-sm font-medium ml-auto">
                        Total: <span className="font-semibold">$800</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-end p-4 border-t md:border-t-0 md:border-l">
                    <div className="flex md:flex-col gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        <span>Details</span>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Edit className="h-3.5 w-3.5" />
                        <span>Modify</span>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <X className="h-3.5 w-3.5" />
                        <span>Cancel</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Pagination className="mt-6">
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
        </TabsContent>

        <TabsContent value="past" className="mt-6">
          <div className="grid gap-4">
            {/* Past Booking Card 1 */}
            <Card>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[1fr_auto] lg:grid-cols-[120px_1fr_auto]">
                  <div className="hidden lg:block p-4 border-r">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="text-3xl font-bold">28</div>
                      <div className="text-sm font-medium">Mar</div>
                      <div className="text-xs text-muted-foreground">2025</div>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge>Conference Room</Badge>
                      <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-800">
                        Completed
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold">Conference Room A</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>Main Building, Floor 2</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>1:00 PM - 3:00 PM</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        <span>12 attendees</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <div className="text-sm font-medium">
                        Booking ID:{' '}
                        <span className="font-normal text-muted-foreground">BK-2025032804</span>
                      </div>
                      <div className="text-sm font-medium ml-auto">
                        Total: <span className="font-semibold">$50</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-end p-4 border-t md:border-t-0 md:border-l">
                    <div className="flex md:flex-col gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        <span>Details</span>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Star className="h-3.5 w-3.5" />
                        <span>Review</span>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Plus className="h-3.5 w-3.5" />
                        <span>Book Again</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Past Booking Card 2 */}
            <Card>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[1fr_auto] lg:grid-cols-[120px_1fr_auto]">
                  <div className="hidden lg:block p-4 border-r">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="text-3xl font-bold">15</div>
                      <div className="text-sm font-medium">Mar</div>
                      <div className="text-xs text-muted-foreground">2025</div>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge>Study Room</Badge>
                      <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-800">
                        Completed
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold">Study Room F</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>Library, Floor 2</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>9:00 AM - 11:00 AM</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        <span>2 attendees</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <div className="text-sm font-medium">
                        Booking ID:{' '}
                        <span className="font-normal text-muted-foreground">BK-2025031505</span>
                      </div>
                      <div className="text-sm font-medium ml-auto">
                        Total: <span className="font-semibold">$16</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-end p-4 border-t md:border-t-0 md:border-l">
                    <div className="flex md:flex-col gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        <span>Details</span>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Star className="h-3.5 w-3.5" />
                        <span>Review</span>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Plus className="h-3.5 w-3.5" />
                        <span>Book Again</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Pagination className="mt-6">
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
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </TabsContent>

        <TabsContent value="cancelled" className="mt-6">
          <div className="grid gap-4">
            {/* Cancelled Booking Card */}
            <Card>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[1fr_auto] lg:grid-cols-[120px_1fr_auto]">
                  <div className="hidden lg:block p-4 border-r">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="text-3xl font-bold">05</div>
                      <div className="text-sm font-medium">Mar</div>
                      <div className="text-xs text-muted-foreground">2025</div>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge>Conference Room</Badge>
                      <Badge variant="outline" className="bg-red-50 border-red-200 text-red-800">
                        Cancelled
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold">Conference Room E</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>Main Building, Floor 4</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>2:00 PM - 4:00 PM</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        <span>10 attendees</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <div className="text-sm font-medium">
                        Booking ID:{' '}
                        <span className="font-normal text-muted-foreground">BK-2025030506</span>
                      </div>
                      <div className="text-sm font-medium ml-auto">
                        Refund: <span className="font-semibold">$60</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-end p-4 border-t md:border-t-0 md:border-l">
                    <div className="flex md:flex-col gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        <span>Details</span>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Plus className="h-3.5 w-3.5" />
                        <span>Book Again</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Empty State for Cancelled Tab */}
            <div className="text-center py-12">
              <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No more cancelled bookings</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                You dont have any other cancelled bookings. Your booking history looks good!
              </p>
              <Button variant="outline">View All Bookings</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

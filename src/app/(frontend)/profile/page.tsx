import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  AlertCircle,
  Bell,
  CreditCard,
  Edit,
  Eye,
  EyeOff,
  Globe,
  Key,
  LifeBuoy,
  Lock,
  LogOut,
  Mail,
  Plus,
  Save,
  Settings,
  Star,
  Trash,
  Upload,
  User,
  UserCog,
  Download,
} from 'lucide-react'
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

export default function ProfilePage() {
  return (
    <div className="container px-4 py-6 md:px-6 md:py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-64 space-y-6">
          <div className="flex flex-col items-center text-center p-6 bg-muted/40 rounded-lg">
            <div className="relative mb-4 group">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" alt="John Doe" />
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="sm" variant="secondary" className="gap-1">
                  <Upload className="h-4 w-4" />
                  <span>Change</span>
                </Button>
              </div>
            </div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-sm text-muted-foreground">john.doe@example.com</p>
            <Badge className="mt-2">Premium Member</Badge>
          </div>

          <div className="bg-muted/40 rounded-lg overflow-hidden">
            <nav className="grid">
              <Link
                href="#personal-info"
                className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-muted transition-colors border-l-2 border-primary"
              >
                <User className="h-4 w-4" />
                <span>Personal Information</span>
              </Link>
              <Link
                href="#preferences"
                className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-muted transition-colors border-l-2 border-transparent"
              >
                <Settings className="h-4 w-4" />
                <span>Preferences</span>
              </Link>
              <Link
                href="#notifications"
                className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-muted transition-colors border-l-2 border-transparent"
              >
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </Link>
              <Link
                href="#security"
                className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-muted transition-colors border-l-2 border-transparent"
              >
                <Lock className="h-4 w-4" />
                <span>Security</span>
              </Link>
              <Link
                href="#payment"
                className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-muted transition-colors border-l-2 border-transparent"
              >
                <CreditCard className="h-4 w-4" />
                <span>Payment Methods</span>
              </Link>
              <Link
                href="#help"
                className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-muted transition-colors border-l-2 border-transparent"
              >
                <LifeBuoy className="h-4 w-4" />
                <span>Help & Support</span>
              </Link>
            </nav>
          </div>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Account Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Member Since</span>
                <span>Jan 15, 2023</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Bookings</span>
                <span>24</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Upcoming Bookings</span>
                <span>3</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Membership</span>
                <span className="text-primary font-medium">Premium</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full gap-1">
                <Star className="h-4 w-4" />
                <span>Upgrade Plan</span>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <Button variant="outline" className="gap-1">
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </Button>
          </div>

          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
            </TabsList>

            {/* Personal Information Tab */}
            <TabsContent value="personal" className="space-y-6 pt-6">
              <Card id="personal-info">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your personal details</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Edit className="h-4 w-4" />
                      <span>Edit</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      defaultValue="123 University Ave, Campus Area, City, State, 12345"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="University City" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" defaultValue="California" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input id="zipCode" defaultValue="12345" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/Department</Label>
                    <Input id="organization" defaultValue="Computer Science Department" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button className="gap-1">
                    <Save className="h-4 w-4" />
                    <span>Save Changes</span>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Profile Picture</CardTitle>
                      <CardDescription>Update your profile image</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-6 items-center">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg" alt="John Doe" />
                      <AvatarFallback className="text-2xl">JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-4 flex-1">
                      <div className="space-y-2">
                        <Label>Upload a new photo</Label>
                        <div className="flex items-center gap-2">
                          <Input id="picture" type="file" className="max-w-sm" />
                          <Button variant="outline" size="sm">
                            Upload
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Recommended: Square image, at least 300x300px. Max file size: 2MB.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Trash className="h-4 w-4" />
                          <span>Remove</span>
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1">
                          <User className="h-4 w-4" />
                          <span>Use Default</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="space-y-6 pt-6">
              <Card id="preferences">
                <CardHeader>
                  <CardTitle>Booking Preferences</CardTitle>
                  <CardDescription>Customize your room booking experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Default Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="defaultLocation">Preferred Location</Label>
                        <Select defaultValue="main">
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="main">Main Building</SelectItem>
                            <SelectItem value="north">North Building</SelectItem>
                            <SelectItem value="south">South Building</SelectItem>
                            <SelectItem value="library">Library</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="defaultRoomType">Preferred Room Type</Label>
                        <Select defaultValue="conference">
                          <SelectTrigger>
                            <SelectValue placeholder="Select room type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="conference">Conference Room</SelectItem>
                            <SelectItem value="study">Study Room</SelectItem>
                            <SelectItem value="event">Event Hall</SelectItem>
                            <SelectItem value="classroom">Classroom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="defaultCapacity">Default Capacity</Label>
                        <Select defaultValue="5-10">
                          <SelectTrigger>
                            <SelectValue placeholder="Select capacity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-4">1-4 people</SelectItem>
                            <SelectItem value="5-10">5-10 people</SelectItem>
                            <SelectItem value="11-20">11-20 people</SelectItem>
                            <SelectItem value="21-50">21-50 people</SelectItem>
                            <SelectItem value="50+">50+ people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="defaultDuration">Default Duration</Label>
                        <Select defaultValue="60">
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="60">1 hour</SelectItem>
                            <SelectItem value="90">1.5 hours</SelectItem>
                            <SelectItem value="120">2 hours</SelectItem>
                            <SelectItem value="180">3 hours</SelectItem>
                            <SelectItem value="240">4 hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Required Amenities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="wifi" defaultChecked />
                        <Label htmlFor="wifi">WiFi</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="projector" defaultChecked />
                        <Label htmlFor="projector">Projector</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="whiteboard" />
                        <Label htmlFor="whiteboard">Whiteboard</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="videoConference" defaultChecked />
                        <Label htmlFor="videoConference">Video Conferencing</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="refreshments" />
                        <Label htmlFor="refreshments">Refreshments</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="accessibility" defaultChecked />
                        <Label htmlFor="accessibility">Accessibility Features</Label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Display Settings</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="darkMode" />
                        <Label htmlFor="darkMode">Dark Mode</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="compactView" />
                        <Label htmlFor="compactView">Compact View</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="showPrices" defaultChecked />
                        <Label htmlFor="showPrices">Show Prices</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="showRatings" defaultChecked />
                        <Label htmlFor="showRatings">Show Ratings</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6 pt-6">
              <Card id="notifications">
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="emailBookingConfirmation">Booking Confirmations</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive emails when your booking is confirmed
                          </p>
                        </div>
                        <Switch id="emailBookingConfirmation" defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="emailReminders">Booking Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive reminder emails before your scheduled bookings
                          </p>
                        </div>
                        <Switch id="emailReminders" defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="emailCancellations">Cancellations & Changes</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive emails about booking cancellations or changes
                          </p>
                        </div>
                        <Switch id="emailCancellations" defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="emailMarketing">Marketing & Promotions</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive emails about special offers and promotions
                          </p>
                        </div>
                        <Switch id="emailMarketing" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Push Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="pushBookingConfirmation">Booking Confirmations</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive push notifications when your booking is confirmed
                          </p>
                        </div>
                        <Switch id="pushBookingConfirmation" defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="pushReminders">Booking Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive push notifications before your scheduled bookings
                          </p>
                        </div>
                        <Switch id="pushReminders" defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="pushAvailability">Room Availability</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications when preferred rooms become available
                          </p>
                        </div>
                        <Switch id="pushAvailability" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notification Timing</h3>
                    <div className="space-y-2">
                      <Label htmlFor="reminderTime">Reminder Time</Label>
                      <Select defaultValue="24">
                        <SelectTrigger>
                          <SelectValue placeholder="Select timing" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 hour before</SelectItem>
                          <SelectItem value="3">3 hours before</SelectItem>
                          <SelectItem value="12">12 hours before</SelectItem>
                          <SelectItem value="24">24 hours before</SelectItem>
                          <SelectItem value="48">48 hours before</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">Save Notification Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6 pt-6">
              <Card id="security">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Change Password</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <div className="relative">
                          <Input id="currentPassword" type="password" />
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          >
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">Show password</span>
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <div className="relative">
                          <Input id="newPassword" type="password" />
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          >
                            <EyeOff className="h-4 w-4" />
                            <span className="sr-only">Hide password</span>
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <div className="text-sm space-y-1 text-muted-foreground">
                        <p>Password must:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Be at least 8 characters long</li>
                          <li>Include at least one uppercase letter</li>
                          <li>Include at least one number</li>
                          <li>Include at least one special character</li>
                        </ul>
                      </div>
                      <Button className="gap-1">
                        <Key className="h-4 w-4" />
                        <span>Update Password</span>
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="twoFactor">Enable Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Switch id="twoFactor" />
                    </div>
                    <Button variant="outline" className="gap-1" disabled>
                      <UserCog className="h-4 w-4" />
                      <span>Set Up Two-Factor Authentication</span>
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Login Sessions</h3>
                    <div className="space-y-4">
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="font-medium">Current Session</p>
                            <div className="text-sm text-muted-foreground">
                              <p>Chrome on Windows • IP: 192.168.1.1</p>
                              <p>Last active: Just now</p>
                            </div>
                          </div>
                          <Badge>Current</Badge>
                        </div>
                      </div>
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="font-medium">Other Session</p>
                            <div className="text-sm text-muted-foreground">
                              <p>Safari on iPhone • IP: 192.168.1.2</p>
                              <p>Last active: 2 days ago</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            <LogOut className="h-4 w-4" />
                            <span>Log Out</span>
                          </Button>
                        </div>
                      </div>
                      <Button variant="outline" className="gap-1">
                        <LogOut className="h-4 w-4" />
                        <span>Log Out of All Other Sessions</span>
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-destructive">Danger Zone</h3>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" className="gap-1">
                          <Trash className="h-4 w-4" />
                          <span>Delete Account</span>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove all your data from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                            Yes, delete my account
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payment Tab */}
            <TabsContent value="payment" className="space-y-6 pt-6">
              <Card id="payment">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Payment Methods</CardTitle>
                      <CardDescription>Manage your payment options</CardDescription>
                    </div>
                    <Button className="gap-1">
                      <Plus className="h-4 w-4" />
                      <span>Add Payment Method</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Saved Payment Methods</h3>
                    <div className="space-y-4">
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="bg-muted p-2 rounded-md">
                              <CreditCard className="h-6 w-6" />
                            </div>
                            <div>
                              <p className="font-medium">Visa ending in 4242</p>
                              <p className="text-sm text-muted-foreground">Expires 04/2025</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge>Default</Badge>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="bg-muted p-2 rounded-md">
                              <CreditCard className="h-6 w-6" />
                            </div>
                            <div>
                              <p className="font-medium">Mastercard ending in 5678</p>
                              <p className="text-sm text-muted-foreground">Expires 08/2026</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              Set as Default
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Billing Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="billingName">Name on Card</Label>
                        <Input id="billingName" defaultValue="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billingEmail">Billing Email</Label>
                        <Input id="billingEmail" type="email" defaultValue="john.doe@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billingAddress">Billing Address</Label>
                      <Textarea
                        id="billingAddress"
                        defaultValue="123 University Ave, Campus Area, City, State, 12345"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="billingCity">City</Label>
                        <Input id="billingCity" defaultValue="University City" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billingState">State</Label>
                        <Input id="billingState" defaultValue="California" />
                      </div>
                      <div className="space-y-2">
                        <div className="space-y-2">
                          <Label htmlFor="billingState">State</Label>
                          <Input id="billingState" defaultValue="California" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billingZipCode">Zip Code</Label>
                          <Input id="billingZipCode" defaultValue="12345" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billingCountry">Country</Label>
                        <Select defaultValue="us">
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Billing History</h3>
                      <div className="rounded-md border">
                        <div className="py-3 px-4 text-sm font-medium grid grid-cols-5 bg-muted/50">
                          <div>Date</div>
                          <div>Description</div>
                          <div>Amount</div>
                          <div>Status</div>
                          <div className="text-right">Receipt</div>
                        </div>
                        <div className="divide-y">
                          <div className="py-3 px-4 text-sm grid grid-cols-5">
                            <div>Apr 1, 2025</div>
                            <div>Premium Membership</div>
                            <div>$19.99</div>
                            <div>
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200"
                              >
                                Paid
                              </Badge>
                            </div>
                            <div className="text-right">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="py-3 px-4 text-sm grid grid-cols-5">
                            <div>Mar 1, 2025</div>
                            <div>Premium Membership</div>
                            <div>$19.99</div>
                            <div>
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200"
                              >
                                Paid
                              </Badge>
                            </div>
                            <div className="text-right">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="py-3 px-4 text-sm grid grid-cols-5">
                            <div>Feb 1, 2025</div>
                            <div>Premium Membership</div>
                            <div>$19.99</div>
                            <div>
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200"
                              >
                                Paid
                              </Badge>
                            </div>
                            <div className="text-right">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">
                          View All Transactions
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card id="help">
            <CardHeader>
              <CardTitle>Help & Support</CardTitle>
              <CardDescription>Get assistance with your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-1">Contact Support</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Have a question or need help? Our support team is here for you.
                  </p>
                  <Button variant="outline" className="mt-auto">
                    Email Support
                  </Button>
                </div>
                <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-3">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-1">Knowledge Base</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Browse our help articles and tutorials to find quick answers.
                  </p>
                  <Button variant="outline" className="mt-auto">
                    Visit Knowledge Base
                  </Button>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <h3 className="font-medium">Report an Issue</h3>
                </div>
                <div className="space-y-3">
                  <Textarea
                    placeholder="Describe the issue you're experiencing..."
                    className="min-h-[100px]"
                  />
                  <div className="flex justify-end">
                    <Button>Submit Report</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

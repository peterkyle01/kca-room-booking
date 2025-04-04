import {
  getCurrentUser,
  getUserProfile,
  getUserBookingStats,
  getBookings,
} from '@/app/server-actions/booking'
import { redirect } from 'next/navigation'
import { ProfileHeader } from '@/components/custom/profile-header'
import { ProfileForm } from '@/components/custom/profile-form'
import { BookingStats } from '@/components/custom/booking-stats'
import { RecentBookings } from '@/components/custom/recent-bookings'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default async function ProfilePage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect('/login')
  }

  const userProfile = await getUserProfile(currentUser.id)
  const bookingStats = await getUserBookingStats(currentUser.id)
  const bookings = await getBookings(currentUser.id)

  // Get the 3 most recent bookings
  const recentBookings = bookings
    ? [...bookings]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 3)
    : []

  return (
    <div className="container mx-auto py-10 px-4">
      <ProfileHeader user={userProfile} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="md:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="edit-profile">Edit Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <BookingStats stats={bookingStats} />

              <Card>
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>Your most recent room booking activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentBookings bookings={recentBookings} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="edit-profile" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProfileForm user={userProfile} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                <p className="text-sm">{userProfile?.email}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Role</h3>
                <p className="text-sm capitalize">{userProfile?.role?.toLowerCase()}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Member Since</h3>
                <p className="text-sm">
                  {userProfile?.createdAt
                    ? new Date(userProfile.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : 'N/A'}
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Quick Links</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/bookings" className="text-sm text-primary hover:underline">
                      View All Bookings
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm text-primary hover:underline">
                      Browse Rooms
                    </Link>
                  </li>
                  {userProfile?.role === 'ADMIN' && (
                    <li>
                      <Link href="/admin" className="text-sm text-primary hover:underline">
                        Admin Dashboard
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

import { getUsers } from '@/app/server-actions/user'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, UserPlus, UserRound, UserX } from 'lucide-react'

export default async function UserStats() {
  const users = await getUsers()
  const totalUsers = users.length
  const adminUsers = users.filter((user) => user.role === 'ADMIN').length
  const regularUsers = users.filter((user) => user.role === 'USER').length

  // Example: Users created in the last 7 days (can be adjusted)
  const recentUsersThreshold = new Date()
  recentUsersThreshold.setDate(recentUsersThreshold.getDate() - 7)
  const newlyRegisteredUsers = users.filter(
    (user) => new Date(user.createdAt) > recentUsersThreshold,
  ).length

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
            <p className="text-xs text-muted-foreground">All registered users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admin Users</CardTitle>
            <UserRound className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{adminUsers}</div>
            <p className="text-xs text-muted-foreground">Users with admin roles</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Regular Users</CardTitle>
            <UserX className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{regularUsers}</div>
            <p className="text-xs text-muted-foreground">Users with standard roles</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Users</CardTitle>
            <UserPlus className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newlyRegisteredUsers}</div>
            <p className="text-xs text-muted-foreground">Registered in the last 7 days</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

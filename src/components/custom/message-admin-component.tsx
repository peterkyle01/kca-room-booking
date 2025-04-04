import { getMessages } from '@/app/server-actions/room'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Hourglass, CheckCircle, Mail, MailOpen } from 'lucide-react'

export default async function MessageStats() {
  const messages = await getMessages()
  const totalMessages = messages.length
  const pendingMessages = messages.filter((msg) => msg.status === 'pending').length
  const resolvedMessages = messages.filter((msg) => msg.status === 'resolved').length

  // Example: Messages received in the last 24 hours
  const recentMessagesThreshold = new Date()
  recentMessagesThreshold.setDate(recentMessagesThreshold.getDate() - 1) // Subtract 1 day
  const recentMessages = messages.filter(
    (msg) => new Date(msg.createdAt) > recentMessagesThreshold,
  ).length

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalMessages}</div>
            <p className="text-xs text-muted-foreground">All received inquiries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Hourglass className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingMessages}</div>
            <p className="text-xs text-muted-foreground">Messages awaiting action</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resolvedMessages}</div>
            <p className="text-xs text-muted-foreground">Inquiries that have been addressed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Messages</CardTitle>
            <MailOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentMessages}</div>
            <p className="text-xs text-muted-foreground">Received in the last 24 hours</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

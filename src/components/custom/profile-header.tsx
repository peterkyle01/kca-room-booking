import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Cog, LogOut } from 'lucide-react'
import Link from 'next/link'

interface ProfileHeaderProps {
  user: any
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  if (!user) {
    return <div className="h-24 bg-muted animate-pulse rounded-lg" />
  }

  // Get initials for avatar fallback
  const getInitials = () => {
    if (user.firstname && user.lastname) {
      return `${user.firstname.charAt(0)}${user.lastname.charAt(0)}`.toUpperCase()
    }
    if (user.email) {
      return user.email.charAt(0).toUpperCase()
    }
    return 'U'
  }

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-card p-6 rounded-lg shadow-sm">
      <Avatar className="h-24 w-24">
        <AvatarImage src={user.avatar?.url} alt={`${user.firstname} ${user.lastname}`} />
        <AvatarFallback className="text-2xl">{getInitials()}</AvatarFallback>
      </Avatar>

      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl font-bold">
          {user.firstname} {user.lastname}
        </h1>
        <p className="text-muted-foreground">{user.email}</p>

        {user.role === 'ADMIN' && (
          <div className="mt-2">
            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Administrator
            </span>
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-4 md:mt-0">
        <Link href="/settings">
          <Button variant="outline" size="sm">
            <Cog className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </Link>
        <Button variant="outline" size="sm">
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}

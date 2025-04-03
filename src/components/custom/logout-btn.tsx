'use client'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { signOutUser } from '@/app/server-actions/user'
import { User } from '@/payload-types'

export default function LogoutBtn(user: User) {
  const router = useRouter()
  const onLogOut = async () => {
    await signOutUser()
    router.refresh()
  }
  return (
    <>
      {user.firstname ? (
        <div className="rounded-full bg-gray-200 p-2 border ">
          <span className="text-sm font-bold">
            {user.firstname.charAt(0).toUpperCase() + '.' + user.lastname.charAt(0).toUpperCase()}
          </span>
        </div>
      ) : (
        <p className="text-xs md:text-base font-bold">ADMIN</p>
      )}
      <Button size={'sm'} onClick={onLogOut}>
        Log Out
      </Button>
    </>
  )
}

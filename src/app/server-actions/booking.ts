'use server'

import config from '@/payload.config'
import { getPayload } from 'payload'
import { headers as getHeaders } from 'next/headers'

export async function getRooms() {
  const payload = await getPayload({ config })
  const { docs: rooms } = await payload.find({
    collection: 'rooms',
  })
  return rooms || null
}

export async function getOneRoom(roomId: number) {
  const payload = await getPayload({ config })
  const room = await payload.findByID({
    collection: 'rooms',
    id: roomId,
  })
  return room || null
}

// Fixed to query the bookings collection
export async function getBookings(userId: string) {
  const payload = await getPayload({ config })
  const { docs: bookings } = await payload.find({
    collection: 'bookings',
    where: {
      user: {
        equals: userId,
      },
    },
    depth: 2, // To populate the room relationship
  })
  return bookings || null
}

export async function getAllBookings() {
  const payload = await getPayload({ config })
  const { docs: bookings } = await payload.find({
    collection: 'bookings',
    depth: 2, // To populate the room relationship
  })
  return bookings || null
}

// Fixed to query the bookings collection
export async function getOneBooking(bookingId: string) {
  const payload = await getPayload({ config })
  const booking = await payload.findByID({
    collection: 'bookings',
    id: bookingId,
    depth: 2, // To populate the room and user relationships
  })
  return booking || null
}

// New action to create a booking
export async function createBooking(data: {
  userId: string
  roomId: string
  startTime: string
  endTime: string
}) {
  const payload = await getPayload({ config })

  try {
    const [booking, _] = await Promise.all([
      payload.create({
        collection: 'bookings',
        data: {
          user: Number(data.userId),
          room: Number(data.roomId),
          startTime: data.startTime,
          endTime: data.endTime,
          status: 'pending',
        },
      }),
      payload.update({
        collection: 'rooms',
        where: {
          id: {
            equals: Number(data.roomId),
          },
        },
        data: {
          status: 'Booked',
        },
      }),
    ])
    return { success: true, booking }
  } catch (error) {
    console.error('Error creating booking:', error)
    return { success: false, error: 'Failed to create booking' }
  }
}

// New action to check room availability
export async function checkRoomAvailability(roomId: string, date: string) {
  const payload = await getPayload({ config })

  // Get the room to check available times
  const room = await payload.findByID({
    collection: 'rooms',
    id: roomId,
  })

  // Get existing bookings for this room on the selected date
  const startOfDay = new Date(date)
  startOfDay.setHours(0, 0, 0, 0)

  const endOfDay = new Date(date)
  endOfDay.setHours(23, 59, 59, 999)

  const { docs: existingBookings } = await payload.find({
    collection: 'bookings',
    where: {
      and: [
        {
          room: {
            equals: roomId,
          },
        },
        {
          startTime: {
            greater_than_equal: startOfDay.toISOString(),
          },
        },
        {
          startTime: {
            less_than_equal: endOfDay.toISOString(),
          },
        },
        {
          status: {
            not_equals: 'rejected',
          },
        },
      ],
    },
  })

  // Return the room's available times and existing bookings
  return {
    availableTimes: room.availableTimes || [],
    existingBookings: existingBookings || [],
  }
}

export async function cancelBooking(bookingId: string) {
  const payload = await getPayload({ config })

  try {
    const booking = await payload.findByID({
      collection: 'bookings',
      id: bookingId,
    })

    const roomId = booking.room?.id
    if (!roomId) {
      throw new Error('No room ID found in booking')
    }

    await Promise.all([
      payload.update({
        collection: 'rooms',
        id: roomId,
        data: {
          status: 'Available',
        },
      }),
      payload.delete({
        collection: 'bookings',
        id: bookingId,
      }),
    ])

    return { success: true }
  } catch (error) {
    console.error('Error canceling booking:', error)
    return { success: false, error: 'Failed to cancel booking' }
  }
}

// New action to get user profile
export async function getUserProfile(userId: string) {
  const payload = await getPayload({ config })

  try {
    const user = await payload.findByID({
      collection: 'users',
      id: userId,
    })

    return user
  } catch (error) {
    console.error('Error fetching user profile:', error)
    return null
  }
}

// New action to update user profile
export async function updateUserProfile(
  userId: string,
  data: {
    firstname?: string
    lastname?: string
  },
) {
  const payload = await getPayload({ config })

  try {
    const updatedUser = await payload.update({
      collection: 'users',
      id: userId,
      data,
    })

    return { success: true, user: updatedUser }
  } catch (error) {
    console.error('Error updating user profile:', error)
    return { success: false, error: 'Failed to update profile' }
  }
}

// New action to get booking statistics for a user
export async function getUserBookingStats(userId: string) {
  const payload = await getPayload({ config })

  try {
    // Get all bookings for the user
    const { docs: bookings } = await payload.find({
      collection: 'bookings',
      where: {
        user: {
          equals: userId,
        },
      },
    })

    // Calculate statistics
    const totalBookings = bookings.length
    const pendingBookings = bookings.filter((booking) => booking.status === 'pending').length
    const approvedBookings = bookings.filter((booking) => booking.status === 'approved').length
    const rejectedBookings = bookings.filter((booking) => booking.status === 'rejected').length

    // Get upcoming bookings (approved bookings with start time in the future)
    const now = new Date()
    const upcomingBookings = bookings.filter((booking) => {
      return booking.status === 'approved' && new Date(booking.startTime) > now
    }).length

    return {
      totalBookings,
      pendingBookings,
      approvedBookings,
      rejectedBookings,
      upcomingBookings,
    }
  } catch (error) {
    console.error('Error fetching user booking stats:', error)
    return {
      totalBookings: 0,
      pendingBookings: 0,
      approvedBookings: 0,
      rejectedBookings: 0,
      upcomingBookings: 0,
    }
  }
}

export async function getCurrentUser() {
  const payload = await getPayload({ config })
  const headers = await getHeaders()
  const res = await payload.auth({ headers })
  // @ts-expect-error type
  const { user }: { user: User } = res

  return user
}

export async function getAllBookingStats() {
  const payload = await getPayload({ config })

  try {
    // Get all bookings for the user
    const { docs: bookings } = await payload.find({
      collection: 'bookings',
    })

    // Calculate statistics
    const totalBookings = bookings.length
    const pendingBookings = bookings.filter((booking) => booking.status === 'pending').length
    const approvedBookings = bookings.filter((booking) => booking.status === 'approved').length
    const rejectedBookings = bookings.filter((booking) => booking.status === 'rejected').length

    // Get upcoming bookings (approved bookings with start time in the future)
    const now = new Date()
    const upcomingBookings = bookings.filter((booking) => {
      return booking.status === 'approved' && new Date(booking.startTime) > now
    }).length

    return {
      totalBookings,
      pendingBookings,
      approvedBookings,
      rejectedBookings,
      upcomingBookings,
    }
  } catch (error) {
    console.error('Error fetching user booking stats:', error)
    return {
      totalBookings: 0,
      pendingBookings: 0,
      approvedBookings: 0,
      rejectedBookings: 0,
      upcomingBookings: 0,
    }
  }
}

'use server'

import config from '@/payload.config'
import { getPayload } from 'payload'

export async function getRooms() {
  const payload = await getPayload({ config })
  const { docs: rooms } = await payload.find({
    collection: 'rooms',
  })
  return rooms || null
}

export async function getOneRoom(roomId: string) {
  const payload = await getPayload({ config })
  const room = await payload.findByID({
    collection: 'rooms',
    id: Number(roomId),
  })
  return room || null
}

import { CollectionConfig } from 'payload'

export const Bookings: CollectionConfig = {
  slug: 'bookings',
  admin: {
    useAsTitle: 'id',
    components: {
      beforeList: ['/components/custom/booking-admin-component'],
    },
  },
  fields: [
    { name: 'user', type: 'relationship', relationTo: 'users', required: true },
    { name: 'room', type: 'relationship', relationTo: 'rooms', required: true },
    { name: 'startTime', type: 'date', required: true },
    { name: 'endTime', type: 'date', required: true },
    {
      name: 'status',
      type: 'select',
      options: ['pending', 'approved', 'rejected'],
      required: true,
    },
  ],
}

import type { CollectionConfig } from 'payload'

export const Rooms: CollectionConfig = {
  slug: 'rooms',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'capacity', type: 'number', required: true },
    { name: 'location', type: 'text', required: true },
    { name: 'availableTimes', type: 'array', fields: [{ name: 'time', type: 'text' }] },
    { name: 'status', type: 'select', options: ['available', 'booked'], required: true },
    { name: 'facilities', type: 'array', fields: [{ name: 'facility', type: 'text' }] },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}

import type { CollectionConfig } from 'payload'

export const Rooms: CollectionConfig = {
  slug: 'rooms',
  admin: {
    useAsTitle: 'name',
    components: {
      beforeList: ['/components/custom/room-admin-component'],
    },
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'capacity', type: 'number', required: true },
    { name: 'location', type: 'text', required: true },
    {
      name: 'availableTimes',
      type: 'array',
      fields: [
        {
          name: 'time',
          type: 'date',
          admin: { date: { pickerAppearance: 'timeOnly', displayFormat: 'h:mm:ss a' } },
        },
      ],
    },
    {
      name: 'room type',
      type: 'select',
      options: ['Conference Room', 'Study Room', 'Event Hall', 'Classroom'],
    },
    {
      name: 'status',
      type: 'select',
      options: ['Available', 'Booked', 'Maintainance'],
      required: true,
    },
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

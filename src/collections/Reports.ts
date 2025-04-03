import { CollectionConfig } from 'payload'

export const Reports: CollectionConfig = {
  slug: 'reports',
  fields: [
    {
      name: 'reportType',
      type: 'select',
      options: ['User Activity', 'Room Usage', 'Booking Trends'],
      required: true,
    },
    { name: 'generatedAt', type: 'date', required: true },
    { name: 'data', type: 'json' },
  ],
}

import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    admin: ({ req: { user } }) => {
      return user?.role === 'ADMIN'
    },
  },
  fields: [
    { name: 'firstname', type: 'text', required: true },
    { name: 'lastname', type: 'text', required: true },
    {
      name: 'role',
      type: 'select',
      options: ['ADMIN', 'USER'],
      required: true,
    },
  ],
}

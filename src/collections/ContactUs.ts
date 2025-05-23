import { CollectionConfig } from 'payload'

export const ContactUs: CollectionConfig = {
  slug: 'contact-us',
  labels: {
    singular: 'Message',
    plural: 'Messages',
  },
  admin: {
    useAsTitle: 'email',
    hideAPIURL: true,
    components: {
      beforeList: ['/components/custom/message-admin-component'],
    },
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => false,
  },
  fields: [
    {
      name: 'fullname',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Resolved', value: 'resolved' },
      ],
      defaultValue: 'pending',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}

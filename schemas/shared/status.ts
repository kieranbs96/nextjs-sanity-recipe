import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'status',
  title: 'Status',
  type: 'document',
  fields: [
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
    }),
  ],
});

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'tags',
  title: 'Tags',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
});

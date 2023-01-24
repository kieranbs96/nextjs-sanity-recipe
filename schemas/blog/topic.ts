import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'topic',
  title: 'Topic',
  type: 'document',
  groups: [
    {
      name: 'blog',
      title: 'Blog',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});

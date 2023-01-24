import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'topics',
  title: 'Topics',
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

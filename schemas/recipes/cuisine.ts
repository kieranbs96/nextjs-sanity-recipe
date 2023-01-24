import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cuisine',
  title: 'Cuisine',
  type: 'document',
  groups: [
    {
      name: 'recipe',
      title: 'Recipe',
    },
  ],
  fields: [
    defineField({
      name: 'cuisine',
      title: 'Cuisine',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});

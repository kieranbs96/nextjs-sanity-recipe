import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ingredients',
  title: 'Ingredients',
  type: 'document',
  groups: [
    {
      name: 'recipe',
      title: 'Recipe',
    },
  ],
  fields: [
    defineField({
      name: 'ingredient',
      title: 'Ingredient',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
  ],
});

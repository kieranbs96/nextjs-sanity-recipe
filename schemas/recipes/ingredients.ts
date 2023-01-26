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
      name: 'name',
      title: 'Name',
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
    defineField({
      name: 'filterable',
      title: 'Filterable',
      type: 'boolean',
    }),
  ],
});

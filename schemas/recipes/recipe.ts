import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  groups: [
    {
      name: 'recipe',
      title: 'Recipe',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'cuisine',
      title: 'Cuisine',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'cuisine' } }],
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Ingredient',
              name: 'ingredient',
              type: 'reference',
              to: [{ type: 'ingredients' }],
            },
            {
              name: 'wholeNumber',
              title: 'Whole Numbers',
              type: 'number',
            },
            {
              name: 'fraction',
              title: 'Fraction Amount',
              type: 'string',
              options: {
                list: ['1/2', '1/3', '1/4', '3/4', '2/3'],
              },
            },
            {
              name: 'unit',
              title: 'Unit',
              type: 'string',
              options: {
                list: ['cup(s)', 'grams', 'milliliters', 'tablespoon(s)', 'teaspoon(s)'],
              },
            },
          ],
          preview: {
            select: {
              title: 'ingredient.name',
              name: 'ingredient.name',
              media: 'ingredient.image',
              wholeNumber: 'wholeNumber',
              fraction: 'fraction',
              unit: 'unit',
            },
            prepare({ title, subtitle, media, wholeNumber = '', fraction = '', unit = '' }) {
              return {
                title,
                subtitle: `${wholeNumber} ${fraction} ${unit}`,
                media,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});

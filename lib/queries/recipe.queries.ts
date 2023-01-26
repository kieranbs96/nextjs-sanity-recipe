import { groq } from 'next-sanity';

const genericFields = groq`
  _id,
  _createdAt,
  _updatedAt,
`;

const recipeFields = groq`
  title,
  "slug": slug.current,
  "author": author->,
  mainImage,
  "cuisine": cuisine[]->,
  "ingredients": ingredients[] {
    unit,
    fraction,
    wholeNumber,
    "name": ingredient->.name,
    "icon": ingredient->.icon,
    "filterable": ingredient->.filterable
  },
  body
`;

export const allRecipesQuery = groq`
*[_type == "recipe"] | order(_createdAt ) {
  ${genericFields}
  ${recipeFields}
}`;

export const recipeBySlugQuery = groq`
*[_type == "recipe" && slug.current == $slug][0] {
  ${genericFields}
  ${recipeFields}
}`;

export const allCuisinesQuery = groq`
*[_type == "cuisine"] | order(_createdAt ) {
    ${genericFields}
    cuisine,
}`;

export const allIngredientsQuery = groq`
*[_type == "ingredients"] | order(_createdAt ) {
    ${genericFields}
    name,
    filterable
}`;

import { groq } from 'next-sanity';

const genericFields = groq`
  _id,
  _createdAt,
  _updatedAt,
`;

const postFields = groq`
  title,
  description,
  mainImage,
  "slug": slug.current,
  "author": author->,
  "topics": topics[]->,
`;

const recipeFields = groq`
  title,
  "slug": slug.current,
  "author": author->,
  mainImage,
  "cuisine": cuisine[]->,
  "ingredients": ingredients[]->,
  body
`;

export const allPostsQuery = groq`
*[_type == "post"] | order(_createdAt ) {
  ${genericFields}
  ${postFields}
}`;

export const allRecipesQuery = groq`
*[_type == "recipe"] | order(_createdAt ) {
  ${genericFields}
  ${recipeFields}
}`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${genericFields}
  ${postFields}
}`;

export const recipeBySlugQuery = groq`
*[_type == "recipe" && slug.current == $slug][0] {
  ${genericFields}
  ${recipeFields}
}`;

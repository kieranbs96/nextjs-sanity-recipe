import { groq } from 'next-sanity';

const postFields = groq`
  _id,
  _createdAt,
  _updatedAt,
  title,
  description,
  mainImage,
  "slug": slug.current,
  "author": author->,
  "topics": topics[]->,
`;

export const allPostsQuery = groq`
*[_type == "post"] | order(_createdAt ) {
  ${postFields}
}`;
export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

export const recipeBySlugQuery = groq`
*[_type == "recipe" && slug.current == $slug][0] {
  ${postFields}
}
`;

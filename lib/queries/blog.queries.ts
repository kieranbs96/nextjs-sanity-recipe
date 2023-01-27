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
  body
`;

export const allPostsQuery = groq`
*[_type == "post"] | order(_createdAt ) {
  ${genericFields}
  ${postFields}
}`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${genericFields}
  ${postFields}
}`;

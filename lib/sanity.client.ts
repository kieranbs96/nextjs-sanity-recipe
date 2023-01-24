import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from 'lib/sanity.api';
import { allPostsQuery, postBySlugQuery, recipeBySlugQuery } from 'lib/sanity.queries';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(allPostsQuery)) || [];
  }
  return [];
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

export async function getRecipeBySlug(slug: string) {
  if (client) {
    return (await client.fetch(recipeBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

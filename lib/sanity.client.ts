import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from 'lib/sanity.api';
import { allPostsQuery, postBySlugQuery } from 'lib/queries/blog.queries';
import {
  allCuisinesQuery,
  allIngredientsQuery,
  allRecipesQuery,
  recipeBySlugQuery,
} from './queries/recipe.queries';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

/* Blog */
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

/* Recipes */
export async function getAllRecipes(): Promise<Recipe[]> {
  if (client) {
    return (await client.fetch(allRecipesQuery)) || [];
  }
  return [];
}

export async function getRecipeBySlug(slug: string): Promise<Recipe> {
  if (client) {
    return (await client.fetch(recipeBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

export async function getAllCuisines(): Promise<Cuisine[]> {
  if (client) {
    return (await client.fetch(allCuisinesQuery)) || [];
  }
  return [];
}

export async function getAllIngredients(): Promise<Ingredient[]> {
  if (client) {
    return (await client.fetch(allIngredientsQuery)) || [];
  }
  return [];
}

import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from 'lib/sanity.api';
import {
  allCuisinesQuery,
  allIngredientsQuery,
  allRecipesQuery,
  allTagsQuery,
  recipeBySlugQuery,
} from './queries/recipe.queries';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

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

export async function getAllTags(): Promise<Tag[]> {
  if (client) {
    return (await client.fetch(allTagsQuery)) || [];
  }
  return [];
}

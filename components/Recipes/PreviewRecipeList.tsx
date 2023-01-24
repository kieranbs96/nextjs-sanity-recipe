'use client';

import { allRecipesQuery } from 'lib/queries/recipe.queries';
import { usePreview } from 'lib/sanity.preview';
import RecipeList from './RecipeList';

export default function PreviewRecipeList() {
  const recipes = usePreview(null, allRecipesQuery);
  console.log('Loading recipes...', recipes);
  return <RecipeList recipes={recipes} />;
}

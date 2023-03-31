import { previewData } from 'next/headers';
import { getAllRecipes, getAllIngredients, getAllCuisines, getAllTags } from 'lib/sanity.client';
import Banner from 'components/Banner';
import PreviewSuspense from 'components/PreviewSuspense';
import RecipeFilters from 'components/Recipes/RecipeFilters';
import PreviewRecipeList from 'components/Recipes/PreviewRecipeList';

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
              Loading preview data...
            </p>
          </div>
        }
      >
        <PreviewRecipeList />
      </PreviewSuspense>
    );
  }

  const recipes = await getAllRecipes();
  const ingredients = await getAllIngredients();
  const cuisines = await getAllCuisines();
  const tags = await getAllTags();

  return (
    <div className="flex flex-col w-full">
      <Banner title="Recipes" />
      <RecipeFilters ingredients={ingredients} cuisines={cuisines} recipes={recipes} tags={tags} />
    </div>
  );
}

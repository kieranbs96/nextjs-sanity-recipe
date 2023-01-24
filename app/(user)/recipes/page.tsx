import { previewData } from 'next/headers';
import { getAllRecipes } from 'lib/sanity.client';
import PreviewSuspense from 'components/PreviewSuspense';
import RecipeList from 'components/Recipes/RecipeList';
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

  return (
    <div className="flex flex-col w-full">
      <div>Filters</div>
      <RecipeList recipes={recipes} />
    </div>
  );
}

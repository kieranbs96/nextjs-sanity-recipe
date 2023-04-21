import { previewData } from 'next/headers';
import { getRecipeBySlug } from 'lib/sanity.client';
import PreviewSuspense from 'components/PreviewSuspense';
import { PortableText } from '@portabletext/react';
import { RichText } from 'components/PortableText/components';
import Banner from 'components/Banner';
import IngredientsList from 'components/Recipes/IngredientsList';
import Image from 'next/image';
import { urlForImage } from 'lib/sanity.image';
import RecipeInfo from 'components/Recipes/RecipeInfo';
import Link from 'next/link';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import RecipeContextProvider from 'context/RecipeContextProvider';

export default async function Recipe({ params }: PageProps) {
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
        ...
      </PreviewSuspense>
    );
  }

  const recipe = await getRecipeBySlug(params.slug);

  return (
    <RecipeContextProvider>
      <Banner title={recipe.title} subtitle={recipe.description} />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 ">
        <div className="col-span-1 flex flex-col p-2 bg-green-100 dark:bg-yellow-100 rounded items-center">
          {recipe && recipe.mainImage && (
            <Image
              className="object-center w-full"
              src={urlForImage(recipe.mainImage).url()}
              alt={recipe.title}
              width={500}
              height={500}
            />
          )}
          <RecipeInfo recipe={recipe} />
        </div>

        <div className="col-span-2">
          <IngredientsList ingredients={recipe.ingredients} />
          <hr className="border-0 bg-green-400 dark:bg-yellow-400 rounded w-full h-1 mb-4" />
          <div>
            <h2 className="text-2xl mb-4 font-bold">Directions</h2>
            <PortableText value={recipe.body} components={RichText} />
          </div>
        </div>
      </div>
    </RecipeContextProvider>
  );
}

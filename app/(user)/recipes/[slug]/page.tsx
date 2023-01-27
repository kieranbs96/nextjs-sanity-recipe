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

export default async function BlogPost({ params }: PageProps) {
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
    <div className="py-4">
      <Link
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-yellow-100 border border-yellow-600 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-600"
        href="/recipes/"
      >
        <ArrowLongLeftIcon className="w-6 h-6 mr-2" />
        <span className="relative">Back to Recipes</span>
      </Link>
      <Banner title={recipe.title} subtitle={recipe.description} />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 flex flex-col">
          <Image
            className="object-center w-full"
            src={urlForImage(recipe.mainImage).url()}
            alt={recipe.title}
            width={500}
            height={500}
          />
          <RecipeInfo recipe={recipe} />
        </div>

        <div className="col-span-2">
          <IngredientsList ingredients={recipe.ingredients} />
          <div>
            <h2 className="text-2xl mb-4 font-bold">Directions</h2>
            <PortableText value={recipe.body} components={RichText} />
          </div>
        </div>
      </div>
    </div>
  );
}

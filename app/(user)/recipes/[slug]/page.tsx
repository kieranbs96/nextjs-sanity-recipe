import { previewData } from 'next/headers';
import { getRecipeBySlug } from 'lib/sanity.client';
import PreviewSuspense from 'components/PreviewSuspense';
import { PortableText } from '@portabletext/react';
import { RichText } from 'components/PortableText/components';

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

  console.log(recipe);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p></p>
      <PortableText value={recipe.body} components={RichText} />
    </div>
  );
}

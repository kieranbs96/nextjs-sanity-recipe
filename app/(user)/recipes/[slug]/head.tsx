import { getRecipeBySlug } from 'lib/sanity.client';

export default async function Head({ params }: PageProps) {
  const recipe = await getRecipeBySlug(params.slug);
  return (
    <>
      <title>{recipe.title}</title>
    </>
  );
}

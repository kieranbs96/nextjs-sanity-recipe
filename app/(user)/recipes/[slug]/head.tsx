import { DefaultTags } from 'components/DefaultTags';
import { getRecipeBySlug } from 'lib/sanity.client';

export default async function Head({ params }: PageProps) {
  const recipe = await getRecipeBySlug(params.slug);
  return (
    <>
      <DefaultTags />
      <title>{recipe.title}</title>
      <meta name="description" content="Recipes" />
    </>
  );
}

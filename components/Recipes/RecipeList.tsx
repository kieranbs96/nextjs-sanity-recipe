import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '~/components/ui/badge';

interface Props {
  recipes: Recipe[];
}

function RecipeList({ recipes }: Props) {
  if (!recipes || !recipes.length) return <div>No recipes were found..</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {recipes.map((recipe) => {
        return (
          <div key={recipe._id} className=" drop-shadow-lg group rounded-lg relative">
            <Link href={`/recipes/${recipe.slug}`} className="cursor-pointer">
              {recipe.mainImage && (
                <div className="w-full">
                  <Image
                    className="h-auto w-auto object-cover transition-all aspect-[3/4]"
                    src={urlForImage(recipe.mainImage).url()}
                    alt={recipe.author.name}
                    width={500}
                    height={500}
                  />
                </div>
              )}
              <div className="absolute top-1 right-1">
                {recipe?.cuisine &&
                  recipe.cuisine.map((cuisine: Cuisine) => (
                    <Badge className="bg-green-400 dark:bg-yellow-400" key={cuisine._id}>
                      {cuisine.cuisine}
                    </Badge>
                  ))}
              </div>

              <div className="w-full mt-4">
                <div>
                  <p className="font-bold">{recipe.title}</p>
                  {recipe && recipe.tags && (
                    <ul className="flex mt-2 gap-2">
                      {recipe?.tags?.map((tag: Tag) => (
                        <Badge
                          key={tag._id}
                          className=" dark:text-slate-800 bg-green-400 dark:bg-yellow-400"
                        >
                          {tag.name}
                        </Badge>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeList;

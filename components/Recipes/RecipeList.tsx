import Pill from 'components/Pill';
import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  recipes: Recipe[];
}

function RecipeList({ recipes }: Props) {
  if (!recipes || !recipes.length) return <div>No recipes were found..</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {recipes.map((recipe) => {
        return (
          <div
            key={recipe._id}
            className="bg-slate-200 dark:bg-slate-800 drop-shadow-lg group rounded-lg relative"
          >
            <Link href={`/recipes/${recipe.slug}`} className="cursor-pointer">
              {recipe.mainImage && (
                <div className="w-full">
                  <Image
                    className="object-center"
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
                    <Pill key={cuisine._id}>
                      <p>{cuisine.cuisine}</p>
                    </Pill>
                  ))}
              </div>

              <div className="w-full p-5">
                <div>
                  <p className="font-bold">{recipe.title}</p>
                  {recipe && recipe.tags && (
                    <ul className="flex mt-2 gap-2">
                      {recipe?.tags?.map((tag: Tag) => (
                        <li
                          key={tag._id}
                          className="py-1 px-3 rounded dark:text-slate-800 bg-green-400 dark:bg-yellow-400"
                        >
                          {tag.name}
                        </li>
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

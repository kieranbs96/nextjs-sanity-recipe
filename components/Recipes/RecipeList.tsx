import Pill from 'components/Pill';
import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  recipes: Recipe[];
}

function RecipeList({ recipes }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
      {recipes.map((recipe) => {
        return (
          <div
            key={recipe._id}
            className="bg-opacity-20 bg-black drop-shadow-xl group  rounded relative"
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
                        <li key={tag._id} className="py-1 px-3 rounded-full bg-green-700">
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

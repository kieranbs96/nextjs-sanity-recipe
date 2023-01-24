import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  recipes: Recipe[];
}

function RecipeList({ recipes }: Props) {
  return (
    <div className="flex gap-4 w-full">
      {recipes.map((recipe) => (
        <div key={recipe._id} className="relative w-1/3 h-80 drop-shadow-xl group cursor-pointer">
          <Link
            href={`/blog/${recipe.slug}`}
            className="group-hover:scale-105 transition-transform duration-200 ease-out rounded"
          >
            {recipe.mainImage && (
              <div className="w-full bg-opacity-20 bg-black flex justify-between">
                <Image
                  className="object-center"
                  src={urlForImage(recipe.mainImage).url()}
                  alt={recipe.author.name}
                  width={500}
                  height={500}
                />
              </div>
            )}
            <div className="w-full bg-opacity-20 bg-black  drop-shadow-lg p-5 flex justify-between">
              <div>
                <p className="font-bold">{recipe.title}</p>
                <ul>
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient._id}>{ingredient.ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2">
                {recipe?.cuisine &&
                  recipe.cuisine.map((cuisine: Cuisine) => (
                    <div
                      key={cuisine._id}
                      className="bg-yellow-400 text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      <p>{cuisine.cuisine}</p>
                    </div>
                  ))}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;

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
      {recipes.map((recipe) => (
        <div key={recipe._id} className="drop-shadow-xl group cursor-pointer">
          <Link
            href={`/recipes/${recipe.slug}`}
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
                {recipe?.cuisine &&
                  recipe.cuisine.map((cuisine: Cuisine) => (
                    <Pill key={cuisine._id}>
                      <p>{cuisine.cuisine}</p>
                    </Pill>
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

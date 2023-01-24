import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  recipes: Recipe[];
}

function RecipeList({ recipes }: Props) {
  console.log(recipes.length);
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipePreview key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
}

interface RecipePreview {
  recipe: Recipe;
}

function RecipePreview({ recipe }: RecipePreview) {
  return (
    <div className="flex flex-col group cursor-pointer">
      <Link
        href={`/recipes/${recipe.slug}`}
        className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out"
      >
        <h1>{recipe.title}</h1>
      </Link>
    </div>
  );
}

export default RecipeList;

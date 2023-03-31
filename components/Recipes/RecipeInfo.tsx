'use client';
import { useRecipeContext } from 'context/RecipeContext';

function RecipeInfo({ recipe }: { recipe: Recipe }) {
  const { scale } = useRecipeContext();

  return (
    <div className="grid grid-cols-2 w-full justify-between lg:grid-cols-3 gap-3 mt-4 mb-2 text-slate-900">
      {recipe?.cookTime && (
        <p className="flex flex-col items-center">
          <span className="font-bold">Cook Time</span>
          <span>{recipe.cookTime}</span>
        </p>
      )}
      {recipe?.servings && (
        <p className="flex flex-col items-center">
          <span className="font-bold">Servings</span>
          <span>{recipe.servings * scale}</span>
        </p>
      )}
      {recipe?.calories && (
        <p className="flex flex-col items-center">
          <span className="font-bold">Calories</span>
          <span>{recipe.calories}</span>
        </p>
      )}
    </div>
  );
}

export default RecipeInfo;

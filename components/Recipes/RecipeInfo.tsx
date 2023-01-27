function RecipeInfo({ recipe }: { recipe: Recipe }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-4 p-3 bg-amber-200 rounded text-slate-900">
      {recipe?.cookTime && (
        <p className="flex flex-col">
          <span className="font-bold">Cook Time</span>
          <span>{recipe.cookTime}</span>
        </p>
      )}
      {recipe?.servings && (
        <p className="flex flex-col">
          <span className="font-bold">Servings</span>
          <span>{recipe.servings}</span>
        </p>
      )}
      {recipe?.calories && (
        <p className="flex flex-col">
          <span className="font-bold">Calories</span>
          <span>{recipe.calories}</span>
        </p>
      )}
    </div>
  );
}

export default RecipeInfo;

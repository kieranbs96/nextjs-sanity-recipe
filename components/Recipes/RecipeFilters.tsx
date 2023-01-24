'use client';

import ClickablePill from 'components/ClickablePill';
import { useState } from 'react';
import RecipeList from './RecipeList';

function RecipeFilters({
  ingredients,
  cuisines,
  recipes,
}: {
  ingredients: Ingredient[];
  cuisines: Cuisine[];
  recipes: Recipe[];
}) {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const manageFilters = (type: string, value: string) => {
    if (type === 'cuisine') {
      if (selectedCuisines.includes(value)) {
        setSelectedCuisines([...selectedCuisines.filter((x) => x !== value)]);
      } else {
        setSelectedCuisines([...selectedCuisines, value]);
      }
    } else if (type === 'ingredients') {
      if (selectedIngredients.includes(value)) {
        setSelectedIngredients([...selectedIngredients.filter((x) => x !== value)]);
      } else {
        setSelectedIngredients([...selectedIngredients, value]);
      }
    }
  };

  const filteredRecipes = recipes.filter((recipe) => {
    if (!selectedCuisines.length && !selectedIngredients.length) {
      return true;
    }

    const matchesCriteria = {
      cuisine: false,
      ingredients: false,
    };

    for (const ingredient of recipe.ingredients) {
      if (selectedIngredients.includes(ingredient.ingredient)) {
        console.log('passed', recipe.title);
        matchesCriteria.ingredients = true;
      }
    }

    for (const cuisine of recipe.cuisine) {
      if (selectedCuisines.includes(cuisine.cuisine)) {
        console.log('passed', recipe.title);
        matchesCriteria.cuisine = true;
      }
    }

    if (matchesCriteria.cuisine && matchesCriteria.ingredients) {
      return true;
    } else if (
      (matchesCriteria.cuisine && !selectedIngredients.length) ||
      (matchesCriteria.ingredients && !selectedCuisines.length)
    ) {
      return true;
    } else return false;
  });

  console.log(filteredRecipes);

  return (
    <>
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <h3 className="w-full">Ingredients</h3>
          {ingredients.map((ingredient) => (
            <ClickablePill
              key={ingredient._id}
              isActive={selectedIngredients.includes(ingredient.ingredient)}
              onToggle={() => manageFilters('ingredients', ingredient.ingredient)}
            >
              {ingredient.ingredient}
            </ClickablePill>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <h3 className="w-full">Cuisines</h3>
          {cuisines.map((cuisine) => (
            <ClickablePill
              key={cuisine._id}
              isActive={selectedCuisines.includes(cuisine.cuisine)}
              onToggle={() => manageFilters('cuisine', cuisine.cuisine)}
            >
              {cuisine.cuisine}
            </ClickablePill>
          ))}
        </div>
      </div>
      <RecipeList recipes={filteredRecipes} />
    </>
  );
}

export default RecipeFilters;

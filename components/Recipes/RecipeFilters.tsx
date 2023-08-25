'use client';

import ClickablePill from 'components/ClickablePill';

import { useState } from 'react';
import { Dropdown } from '../Dropdown';
import { DropdownMenuCheckboxItem } from '../ui/dropdown-menu';
import FilterOption from './FilterOption';
import RecipeList from './RecipeList';

function RecipeFilters({
  ingredients,
  cuisines,
  recipes,
  tags,
}: {
  ingredients: Ingredient[];
  cuisines: Cuisine[];
  recipes: Recipe[];
  tags: Tag[];
}) {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const clearFilters = () => {
    setSelectedCuisines([]);
    setSelectedIngredients([]);
    setSelectedTags([]);
  };

  const manageFilters = (type: string, value: string) => {
    if (type === 'cuisine') {
      // If selectedCuisines includes the value, then remove that value from selectedCuisines. Otherwise, add it.
      if (selectedCuisines.includes(value)) {
        setSelectedCuisines([...selectedCuisines.filter((x) => x !== value)]);
      } else {
        setSelectedCuisines([...selectedCuisines, value]);
      }
    } else if (type === 'ingredients') {
      // If selectedIngredients includes the value, then remove that value from selectedIngredients. Otherwise, add it.
      if (selectedIngredients.includes(value)) {
        setSelectedIngredients([...selectedIngredients.filter((x) => x !== value)]);
      } else {
        setSelectedIngredients([...selectedIngredients, value]);
      }
    } else if (type === 'tags') {
      // If selectedTags includes the value, then remove that value from selectedTags. Otherwise, add it.
      if (selectedTags.includes(value)) {
        setSelectedTags([...selectedTags.filter((x) => x !== value)]);
      } else {
        setSelectedTags([...selectedTags, value]);
      }
    }
  };

  const filteredRecipes = recipes.filter((recipe) => {
    if (!selectedCuisines.length && !selectedIngredients.length && !selectedTags.length) {
      return true;
    }

    const matchesCriteria = {
      cuisine: false,
      ingredients: false,
      tags: false,
    };

    for (const ingredient of recipe.ingredients) {
      if (selectedIngredients.includes(ingredient.name) && ingredient.filterable) {
        matchesCriteria.ingredients = true;
      }
    }

    for (const cuisine of recipe.cuisine) {
      if (selectedCuisines.includes(cuisine.cuisine)) {
        matchesCriteria.cuisine = true;
      }
    }

    if (recipe.tags) {
      for (const tag of recipe.tags) {
        if (selectedTags.includes(tag.name)) {
          matchesCriteria.tags = true;
        }
      }
    }

    return (
      (matchesCriteria.cuisine && matchesCriteria.ingredients && matchesCriteria.tags) ||
      (matchesCriteria.cuisine && !selectedIngredients.length && !selectedTags.length) ||
      (matchesCriteria.cuisine && matchesCriteria.ingredients && !selectedTags.length) ||
      (matchesCriteria.cuisine && !selectedIngredients.length && matchesCriteria.tags) ||
      (matchesCriteria.ingredients && !selectedCuisines.length && !selectedTags.length) ||
      (matchesCriteria.ingredients && matchesCriteria.cuisine && !selectedTags.length) ||
      (matchesCriteria.ingredients && !selectedCuisines.length && matchesCriteria.tags) ||
      (matchesCriteria.tags && !selectedCuisines.length && !selectedIngredients.length) ||
      (matchesCriteria.tags && matchesCriteria.cuisine && !selectedIngredients.length) ||
      (matchesCriteria.tags && !selectedCuisines.length && matchesCriteria.ingredients)
    );
  });

  return (
    <>
      <div className="flex gap-3 mb-4">
        <Dropdown title="Ingredients">
          {ingredients &&
            ingredients.map((ingredient) => {
              return (
                ingredient.filterable && (
                  <DropdownMenuCheckboxItem
                    key={ingredient._id}
                    checked={selectedIngredients.includes(ingredient.name)}
                    onCheckedChange={() => manageFilters('ingredients', ingredient.name)}
                  >
                    {ingredient.name}
                  </DropdownMenuCheckboxItem>
                )
              );
            })}
        </Dropdown>
        <Dropdown title="Cuisines">
          {cuisines &&
            cuisines.map((cuisine) => (
              <DropdownMenuCheckboxItem
                key={cuisine._id}
                checked={selectedCuisines.includes(cuisine.cuisine)}
                onCheckedChange={() => manageFilters('cuisine', cuisine.cuisine)}
              >
                {cuisine.cuisine}
              </DropdownMenuCheckboxItem>
            ))}
        </Dropdown>
        <Dropdown title="Tags">
          {tags &&
            tags.map((tag) => (
              <DropdownMenuCheckboxItem
                key={tag._id}
                checked={selectedTags.includes(tag.name)}
                onCheckedChange={() => manageFilters('tags', tag.name)}
              >
                {tag.name}
              </DropdownMenuCheckboxItem>
            ))}
        </Dropdown>
      </div>
      {/* <button
        className="mb-4 w-40 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={clearFilters}
      >
        Clear filters
      </button> */}

      <RecipeList recipes={filteredRecipes} />
    </>
  );
}

export default RecipeFilters;

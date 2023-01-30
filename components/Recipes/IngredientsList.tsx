'use client';
import { useRecipeContext } from 'context/RecipeContext';
import { unitMap } from 'lib/helpers';
import Link from 'next/link';
import { useState } from 'react';

function IngredientsList({ ingredients }: { ingredients: Ingredient[] }) {
  const [ingredientsChecklist, setIngredientsChecklist] = useState<string[]>([]);
  const { scale } = useRecipeContext();

  const addToChecklist = (ingredient: string) => {
    if (!ingredientsChecklist.includes(ingredient)) {
      setIngredientsChecklist((prev) => [...prev, ingredient]);
    } else {
      setIngredientsChecklist((prev) => prev.filter((item) => item !== ingredient));
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-4">Ingredients</h2>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
        {ingredients &&
          ingredients.map((ingredient) => {
            const { wholeNumber, fraction, unit, name, _id } = ingredient;
            let trimmedUnit: string = unit?.replace('(s)', '') || '';
            let shortenedUnit = unitMap.get(trimmedUnit) || trimmedUnit;
            let formatQuantity = `${wholeNumber && wholeNumber * scale} ${
              fraction ? fraction + ' ' : ''
            }${shortenedUnit}`;
            // combine the whole number, fraction, and unit to form the formatted quantity

            if (wholeNumber && !fraction) {
              formatQuantity = `${wholeNumber * scale} ${shortenedUnit ? shortenedUnit : ''}`;
            }
            // if there is no fraction, but there is a whole number, don't add the extra space

            return (
              <li
                key={_id}
                className={`${ingredientsChecklist.includes(name) && 'line-through'}`}
                onClick={() => addToChecklist(name)}
              >
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-600 checked:border-yellow-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer mr-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault3"
                  checked={ingredientsChecklist.includes(name)}
                />
                <span className="mr-1">{formatQuantity}</span>
                <span>
                  {ingredient.reference ? (
                    <Link
                      className="underline decoration-yellow-400 hover:decoration-black"
                      href={ingredient.reference}
                      target="_blank"
                    >
                      {name}
                    </Link>
                  ) : (
                    name
                  )}
                </span>
                {ingredient.instruction && <span className="ml-1">({ingredient.instruction})</span>}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default IngredientsList;

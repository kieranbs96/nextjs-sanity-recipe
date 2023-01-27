import { unitMap } from 'lib/helpers';
import Link from 'next/link';

function IngredientsList({ ingredients }: { ingredients: Ingredient[] }) {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
      <ul className="flex flex-col flex-wrap gap-2">
        {ingredients &&
          ingredients.map((ingredient) => {
            const { wholeNumber, fraction, unit, name, _id } = ingredient;

            let trimmedUnit: string = unit?.replace('(s)', '') || '';
            let shortenedUnit = unitMap.get(trimmedUnit) || trimmedUnit;

            let formatQuantity = `${wholeNumber} ${fraction ? fraction + ' ' : ''}${shortenedUnit}`;
            if (wholeNumber && !fraction) {
              formatQuantity = `${wholeNumber} ${shortenedUnit ? shortenedUnit : ''}`;
            }

            return (
              <li key={_id} className="flex items-center">
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

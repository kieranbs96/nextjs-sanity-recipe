'use client';
import { useRecipeContext } from 'context/RecipeContext';

function Scale() {
  const { scale, setScale } = useRecipeContext();

  const scaleStyles = `border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500`;
  const selectedStyles = `border-green-500 bg-green-100 text-green-600 dark:border-yellow-500 dark:bg-yellow-100 dark:text-yellow-600`;

  const scaleOptions = [0.25, 0.5, 1, 2, 3];

  return (
    <div className="isolate inline-flex -space-x-px rounded-md shadow-sm mb-4">
      {scaleOptions.map((scaleOption, index) => {
        return (
          <button
            key={index}
            className={`${scaleStyles} ${scale === scaleOption ? selectedStyles : ''}`}
            onClick={() => setScale(scaleOption)}
          >
            {scaleOption}x
          </button>
        );
      })}
    </div>
  );
}

export default Scale;

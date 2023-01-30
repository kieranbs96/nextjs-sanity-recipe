'use client';
import { useRecipeContext } from 'context/RecipeContext';
import { useState } from 'react';

function Scale() {
  const { setScale } = useRecipeContext();

  const [currentScale, setCurrentScale] = useState(1);

  const scaleStyles = `border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500`;
  const selectedStyles = `border-yellow-500 bg-yellow-100 text-yellow-600`;

  const scaleOptions = [0.5, 1, 2];

  const handleScale = (scale: number) => {
    setScale(scale);
    setCurrentScale(scale);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Scale</h2>
      <div className="isolate inline-flex -space-x-px rounded-md shadow-sm mb-4">
        {scaleOptions.map((scale, index) => {
          return (
            <button
              key={index}
              className={`${scaleStyles} ${currentScale === scale ? selectedStyles : ''}`}
              onClick={() => handleScale(scale)}
            >
              {scale}x
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Scale;

import { createContext, useContext } from 'react';

createContext;
useContext;

interface RecipeContextType {
  scale: number;
  setScale: (scale: number) => void;
}

export const RecipeContext = createContext<RecipeContextType>({
  scale: 1,
  setScale: () => {},
});

export const useRecipeContext = () => useContext(RecipeContext);

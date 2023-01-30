'use client';

import React, { useState } from 'react';
import { RecipeContext } from './RecipeContext';

const RecipeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [scale, setScale] = useState(1);

  return <RecipeContext.Provider value={{ scale, setScale }}>{children}</RecipeContext.Provider>;
};

export default RecipeContextProvider;

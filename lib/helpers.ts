// If we're using hashes to scroll to it can be problematic if the id starts with a number
export function scrollableKey(key: string) {
  return `s-${key}`;
}

export const unitMap = new Map([
  ['teaspoon', 'tsp'],
  ['tablespoon', 'tbsp'],
  ['pound', 'lb'],
  ['ounce', 'oz'],
  ['quart', 'qt'],
  ['gallon', 'gal'],
  ['milliliters', 'ml'],
  ['liter', 'l'],
  ['milligram', 'mg'],
  ['grams', 'g'],
  ['kilogram', 'kg'],
  ['inch', 'in'],
]);

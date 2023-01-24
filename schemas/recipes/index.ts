import { SchemaTypeDefinition } from 'sanity';
import recipe from './recipe';
import cuisine from './cuisine';
import ingredients from './ingredients';

const recipesSchema: SchemaTypeDefinition[] = [recipe, cuisine, ingredients];

export default recipesSchema;

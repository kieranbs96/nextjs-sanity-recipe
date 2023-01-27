import { SchemaTypeDefinition } from 'sanity';
import recipe from './recipe';
import cuisine from './cuisine';
import ingredients from './ingredients';
import tags from './tags';

const recipesSchema: SchemaTypeDefinition[] = [recipe, cuisine, ingredients, tags];

export default recipesSchema;

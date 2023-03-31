import { SchemaTypeDefinition } from 'sanity';
import sharedSchema from './shared';
import recipesSchema from './recipes';

export const schemaTypes: SchemaTypeDefinition[] = [...sharedSchema, ...recipesSchema];

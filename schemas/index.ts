import { SchemaTypeDefinition } from 'sanity';
import sharedSchema from './shared';
import blogSchema from './blog';
import recipesSchema from './recipes';

export const schemaTypes: SchemaTypeDefinition[] = [
  ...sharedSchema,
  ...blogSchema,
  ...recipesSchema,
];

import { SchemaTypeDefinition } from 'sanity';
import author from './author';
import category from './category';
import products from './products';
import status from './status';
import blockContent from './blockContent';

const sharedSchema: SchemaTypeDefinition[] = [author, category, status, products, blockContent];

export default sharedSchema;

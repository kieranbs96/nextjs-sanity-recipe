import { SchemaTypeDefinition } from 'sanity';
import author from './author';
import products from './products';
import status from './status';
import blockContent from './blockContent';

const sharedSchema: SchemaTypeDefinition[] = [author, status, products, blockContent];

export default sharedSchema;

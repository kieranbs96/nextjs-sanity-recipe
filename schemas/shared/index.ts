import { SchemaTypeDefinition } from 'sanity';
import author from './author';
import status from './status';
import blockContent from './blockContent';

const sharedSchema: SchemaTypeDefinition[] = [author, status, blockContent];

export default sharedSchema;

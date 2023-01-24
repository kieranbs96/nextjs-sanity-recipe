import { SchemaTypeDefinition } from 'sanity';
import post from './post';
import topics from './topics';

const blogSchema: SchemaTypeDefinition[] = [post, topics];

export default blogSchema;

import { SchemaTypeDefinition } from 'sanity';
import post from './post';
import topic from './topic';

const blogSchema: SchemaTypeDefinition[] = [post, topic];

export default blogSchema;

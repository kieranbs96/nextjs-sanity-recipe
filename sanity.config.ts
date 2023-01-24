import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { theme } from 'theme';
import { myStructure } from 'schemas/structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'Kieran_Content_Studio',
  title: 'Content Studio',
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    ,
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  theme,
});
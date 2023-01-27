import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { theme } from 'lib/sanity.theme';
import { getDefaultDocumentNode, structure } from 'lib/sanity.structure';

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
      structure,
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  theme,
});

import { DefaultDocumentNodeResolver, StructureBuilder } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Recipes')
        .child(
          S.list()
            .title('Recipes')
            .items([
              S.listItem().title('Recipes').child(S.documentTypeList('recipe').title('Recipes')),
              S.listItem().title('Cuisines').child(S.documentTypeList('cuisine').title('Cuisines')),
              S.listItem()
                .title('Ingredients')
                .child(S.documentTypeList('ingredients').title('Ingredients')),
            ])
        ),
    ]);

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  if (schemaType === 'recipe') {
    const urlMapping = {
      recipe: 'recipes',
    };

    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc: {
            slug: {
              current: string;
            };
          }) => `/${urlMapping[schemaType]}/${doc?.slug?.current}`,
          defaultSize: 'desktop',
          reload: {
            button: true,
          },
        })
        .title('Preview'),
    ]);
  }
};

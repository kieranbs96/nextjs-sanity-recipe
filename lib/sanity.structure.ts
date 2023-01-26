import { DefaultDocumentNodeResolver, StructureBuilder } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';
import { SanityDocumentLike } from 'sanity';

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem().title('Posts').child(S.documentTypeList('post').title('Posts')),
              S.listItem().title('Authors').child(S.documentTypeList('author').title('Authors')),
              S.listItem().title('Topics').child(S.documentTypeList('topics').title('Topics')),
            ])
        ),
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
      S.listItem()
        .title('Products')
        .child(
          S.list()
            .title('Products')
            .items([
              S.listItem()
                .title('Products')
                .child(S.documentTypeList('products').title('Products')),
              S.listItem()
                .title('Categories')
                .child(S.documentTypeList('category').title('Product Categories')),
              S.listItem()
                .title('Status')
                .child(S.documentTypeList('status').title('Product Status')),
            ])
        ),
    ]);

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  if (schemaType === 'post' || schemaType === 'recipe') {
    const urlMapping = {
      post: 'blog',
      recipe: 'recipes',
    };

    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc: SanityDocumentLike) => `/${urlMapping[schemaType]}/${doc?.slug?.current}`,
          defaultSize: 'desktop',
          reload: {
            button: true,
          },
        })
        .title('Preview'),
    ]);
  }
};

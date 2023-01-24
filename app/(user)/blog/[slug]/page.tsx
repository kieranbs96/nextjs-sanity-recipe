import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client, getPostBySlug } from 'lib/sanity.client';
import PreviewSuspense from 'components/PreviewSuspense';

const query = groq`
    *[_slug == "post"] {
        ...,
        author->,
        topics[]->,
    }
`;

export default async function BlogPost({ params }) {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
              Loading preview data...
            </p>
          </div>
        }
      >
        ...
      </PreviewSuspense>
    );
  }

  const post = await getPostBySlug(params.slug);

  console.log(post);

  return <div>...</div>;
}

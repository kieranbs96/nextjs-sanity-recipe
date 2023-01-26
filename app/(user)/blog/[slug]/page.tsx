import { previewData } from 'next/headers';
import { getPostBySlug } from 'lib/sanity.client';
import PreviewSuspense from 'components/PreviewSuspense';

export default async function BlogPost({ params }: PageProps) {
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

  return <div>...</div>;
}

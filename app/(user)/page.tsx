import {previewData} from 'next/headers';
import {groq} from 'next-sanity';
import {client} from 'lib/sanity.client';
import PreviewSuspense from 'components/PreviewSuspense';

export default async function Home() {
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

  return <div>Home</div>;
}

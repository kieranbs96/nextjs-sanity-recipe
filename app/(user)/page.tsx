import { previewData } from 'next/headers';
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

  return (
    <div className="p-6">
      <h1 className="text-center">
        <span className="wave">👋</span> Hi, my name is Kieran!
      </h1>
    </div>
  );
}

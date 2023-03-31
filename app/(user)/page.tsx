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
      <header className="flex justify-center text-center text-3xl md:text-5xl">
        <span className="wave mr-6">👋</span>
        <h1 className="tracking-tighter text-yellow-400">Hello, my name is Kieran!</h1>
      </header>
      {/* <div className="intro -mx-4 grid grid-cols-1 gap-y-4 bg-yellow-400 p-4 font-mono text-white md:mx-0 md:p-8 md:text-lg">
        {`I'm a Web Developer @ Global.
        `}
      </div> */}
    </div>
  );
}

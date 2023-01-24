import { previewData } from 'next/headers';
import { getAllPosts } from 'lib/sanity.client';
import PreviewSuspense from 'components/PreviewSuspense';
import BlogList from 'components/Blog/BlogList';
import PreviewBlogList from 'components/Blog/PreviewBlogList';

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
        <PreviewBlogList />
      </PreviewSuspense>
    );
  }

  const posts = await getAllPosts();

  return <BlogList posts={posts} />;
}

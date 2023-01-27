import { previewData } from 'next/headers';
import { getPostBySlug } from 'lib/sanity.client';
import PreviewSuspense from 'components/PreviewSuspense';
import Banner from 'components/Banner';
import { RichText } from 'components/PortableText/components';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlForImage } from 'lib/sanity.image';

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
  return (
    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <header className="mb-4 lg:mb-6 not-format">
        <h1 className="mb-4 text-3xl font-extrabold text-center leading-tight lg:mb-6 lg:text-4xl">
          {post.title}
        </h1>
      </header>
      {post && post.mainImage && (
        <Image
          className="object-contain object-center mx-auto mb-4"
          src={urlForImage(post.mainImage).url()}
          alt={post.author.name}
          width={536}
          height={354}
        />
      )}
      <PortableText value={post.body} components={RichText} />
    </article>
  );
}

import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  posts: Post[];
}

function BlogList({ posts }: Props) {
  return (
    <div className="flex w-full">
      {posts.map((post) => (
        <PostPreview key={post._id} post={post} />
      ))}
    </div>
  );
}

interface PostPreview {
  post: Post;
}

function PostPreview({ post }: PostPreview) {
  return (
    <div className="relative w-full h-80 drop-shadow-xl group cursor-pointer">
      <Link
        href={`/blog/${post.slug}`}
        className="group-hover:scale-105 transition-transform duration-200 ease-out"
      >
        {post.mainImage && (
          <Image
            className="object-cover object-left lg:object-center"
            src={urlForImage(post.mainImage).url()}
            alt={post.author.name}
            fill
          />
        )}
        <div className="absolute bottom-0 w-full bg-opacity-20 bg-black rounded drop-shadow-lg p-5 flex justify-between">
          <div>
            <p className="font-bold">{post.title}</p>
            <p>
              {new Date(post._createdAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2">
            {post?.topics &&
              post.topics.map((topic) => (
                <div
                  key={topic._id}
                  className="bg-[#f7ab0a] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                >
                  <p>{topic.title}</p>
                </div>
              ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogList;

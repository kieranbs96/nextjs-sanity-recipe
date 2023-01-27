import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  posts: Post[];
}

function BlogList({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
    <div className="bg-white shadow-md rounded-lg max-w-sm mb-5 relative">
      <Link href={`/blog/${post.slug}`}>
        {post.mainImage && (
          <Image
            className="rounded-t-lg"
            src={urlForImage(post.mainImage).url()}
            alt={post.author.name}
            width={400}
            height={250}
          />
        )}
      </Link>
      <div className="absolute top-1 right-1 flex flex-col md:flex-row gap-y-2 md:gap-x-2">
        {post?.topics &&
          post.topics.map((topic) => (
            <div
              key={topic._id}
              className="bg-yellow-400 text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
            >
              <p>{topic.title}</p>
            </div>
          ))}
      </div>
      <div className="p-5">
        <div>
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{post.title}</h5>
          <p className="font-normal text-gray-700 mb-3">
            {new Date(post._createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

export default BlogList;

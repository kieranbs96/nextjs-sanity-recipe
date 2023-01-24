'use client';

import { allPostsQuery } from 'lib/sanity.queries';
import { usePreview } from '../lib/sanity.preview';
import BlogList from './RecipeList';

export default function PreviewBlogList() {
  const posts = usePreview(null, allPostsQuery);
  console.log('Loading posts...', posts);
  return <BlogList posts={posts} />;
}

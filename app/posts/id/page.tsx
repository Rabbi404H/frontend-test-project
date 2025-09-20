// app/posts/[id]/page.tsx
'use client';

import { useFetch } from '@/hooks/useFetch';
import { Post } from '@/types';
import { useParams } from 'next/navigation';
import ErrorMessage from '@/components/shared/ErrorMessage';
import LoadingSpinner from '@/components/shared/LodingSpinner';

const PostDetail = () => {
  const params = useParams();
  const postId = params.id;

  const { data: post, loading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={`Failed to load post: ${error}`} />;

  return (
    <div className="max-w-4xl mx-auto">
      <article className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post?.title}</h1>
        <div className="text-gray-600 mb-6">By User #{post?.userId}</div>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {post?.body}
        </p>
      </article>
    </div>
  );
};

export default PostDetail;
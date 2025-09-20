'use client';

import { useFetch } from '@/hooks/useFetch';
import { Post } from '@/types';
import Card from '@/components/shared/Card';
import ErrorMessage from '@/components/shared/ErrorMessage';
import LoadingSpinner from '@/components/shared/LodingSpinner';

const PostsPage = () => {
  const { data: posts, loading, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={`Failed to load posts: ${error}`} />;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">All Posts</h1>
      
      {/* Intentional Error Button */}
      <div className="mb-6">
        <button
          onClick={() => {
            // This will intentionally cause an error
            window.location.href = '/nonexistent-page';
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Test Error Handling
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts?.map((post, index) => (
          <Card
            key={post.id}
            href={`/posts/${post.id}`}
            animationDelay={index * 0.1}
          >
            <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
            <p className="text-gray-600 line-clamp-3">{post.body}</p>
            <div className="mt-4 text-sm text-blue-600">Read more →</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
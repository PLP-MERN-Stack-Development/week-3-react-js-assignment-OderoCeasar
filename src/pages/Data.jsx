import React, { useState, useEffect } from 'react';
import { fetchPosts, searchPosts } from '../utils/api';
import Card from '../components/Card';
import Button from '../components/Button';

const Data = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch posts on page change
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const data = await fetchPosts(page);
        setPosts(prev => page === 1 ? data : [...prev, ...data]);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, [page]);

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const results = await searchPosts(searchQuery);
      setPosts(results);
      setPage(1);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load more posts (infinite scroll simulation)
  const loadMore = () => setPage(prev => prev + 1);

  return (
    <div>
      <Card title="API Data">
        {/* Search form */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts..."
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
            <Button type="submit" variant="primary">Search</Button>
          </div>
        </form>

        {/* Error state */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Posts list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map(post => (
            <Card key={post.id} className="hover:scale-105 transition-transform">
              <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{post.body.slice(0, 100)}...</p>
            </Card>
          ))}
        </div>

        {/* Loading state */}
        {loading && <p className="text-center mt-4">Loading...</p>}

        {/* Load more button */}
        {!loading && posts.length > 0 && (
          <div className="text-center mt-6">
            <Button onClick={loadMore} variant="secondary">Load More</Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Data;
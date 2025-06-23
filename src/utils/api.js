export const fetchPosts = async (page = 1, limit = 10) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
};

export const searchPosts = async (query) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!response.ok) throw new Error('Failed to search posts');
  const posts = await response.json();
  return posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
};
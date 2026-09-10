const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetches all users from JSONPlaceholder.
 * @returns {Promise<Array>} The API response containing users.
 */
export const getUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) {
    throw new Error('Failed to load users.');
  }
  return await response.json();
};

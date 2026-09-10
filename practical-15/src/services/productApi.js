const API_BASE_URL = 'https://dummyjson.com';

/**
 * Fetches products with pagination support.
 * @param {number} limit - Number of products per page
 * @param {number} skip - Number of products to skip
 * @returns {Promise<Object>} The API response containing products
 */
export const getProducts = async (limit = 12, skip = 0) => {
  const response = await fetch(`${API_BASE_URL}/products?limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return await response.json();
};

/**
 * Searches for products based on a query string.
 * @param {string} query - The search term
 * @returns {Promise<Object>} The API response containing matching products
 */
export const searchProducts = async (query) => {
  const response = await fetch(`${API_BASE_URL}/products/search?q=${query}`);
  if (!response.ok) {
    throw new Error('Failed to search products');
  }
  return await response.json();
};

/**
 * Fetches a single product by its ID.
 * @param {number|string} id - The product ID
 * @returns {Promise<Object>} The API response containing the product details
 */
export const getProductById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with ID: ${id}`);
  }
  return await response.json();
};

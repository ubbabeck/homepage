/**
 * Data loading utilities
 * Handles fetching JSON data for posts and categories
 */

/**
 * Load posts from JSON file
 * @returns {Promise<Array>} Array of post objects
 */
export async function loadPosts() {
  try {
    const response = await fetch("./data/posts.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error loading posts:", error);
    return [];
  }
}

/**
 * Load categories from JSON file
 * @returns {Promise<Array>} Array of category objects
 */
export async function loadCategories() {
  try {
    const response = await fetch("./data/categories.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error("Error loading categories:", error);
    return [];
  }
}

/**
 * Filter posts by category
 * @param {Array} posts - Array of all posts
 * @param {string} category - Category name to filter by
 * @returns {Array} Filtered posts
 */
export function filterPostsByCategory(posts, category) {
  if (!category) {
    return posts;
  }

  return posts.filter((post) => {
    // Handle both string and array categories for backwards compatibility
    const categories = Array.isArray(post.category)
      ? post.category
      : [post.category];
    return categories.some(
      (cat) => cat.toLowerCase() === category.toLowerCase(),
    );
  });
}

/**
 * Format date string
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

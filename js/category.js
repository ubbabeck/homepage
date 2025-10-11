/**
 * Category page script
 * Handles filtering and displaying posts by category
 */

import { loadPosts, filterPostsByCategory } from "./data-loader.js";
import { renderPosts } from "./renderer.js";

/**
 * Get category from URL parameters
 * @returns {string|null} Category slug
 */
function getCategoryFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("cat");
}

/**
 * Initialize category page
 */
async function init() {
  try {
    const category = getCategoryFromURL();

    if (!category) {
      document.getElementById("category-title").textContent = "All Categories";
      document.getElementById("category-posts").innerHTML =
        '<p>No category selected. <a href="index.html">Go back to home</a></p>';
      return;
    }

    // Update page title
    const categoryTitle = category
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    document.getElementById("category-title").textContent = categoryTitle;
    document.title = `${categoryTitle} - Jane Nakamoto`;

    // Load and filter posts
    const allPosts = await loadPosts();
    const filteredPosts = filterPostsByCategory(allPosts, categoryTitle);

    // Render filtered posts
    const postsContainer = document.getElementById("category-posts");

    if (filteredPosts.length === 0) {
      postsContainer.innerHTML = `
                <p>No posts found in this category.</p>
                <p><a href="index.html">Back to home</a></p>
            `;
    } else {
      renderPosts(filteredPosts, postsContainer);
    }
  } catch (error) {
    console.error("Failed to initialize category page:", error);
    document.getElementById("category-posts").innerHTML =
      "<p>Error loading posts. Please try again later.</p>";
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

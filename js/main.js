/**
 * Main application script
 * Handles loading and rendering posts and categories on the homepage
 */

import { loadPosts, loadCategories } from "./data-loader.js";
import { renderPosts, renderCategories } from "./renderer.js";

/**
 * Initialize the application
 */
async function init() {
  try {
    // Load data
    const [posts, categories] = await Promise.all([
      loadPosts(),
      loadCategories(),
    ]);

    // Render posts
    const writingsList = document.getElementById("writings-list");
    if (writingsList) {
      renderPosts(posts, writingsList);
    }

    // Render categories
    const categoriesList = document.getElementById("categories-list");
    if (categoriesList) {
      renderCategories(categories, categoriesList);
    }
  } catch (error) {
    console.error("Failed to initialize application:", error);
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

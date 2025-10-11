/**
 * Category page script
 * Handles filtering and displaying posts by category
 */

import { loadPosts, filterPostsByCategory } from "./data-loader.js";
import { renderPosts } from "./renderer.js";

/**
 * Initialize theme toggle functionality
 */
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle?.querySelector(".theme-icon");

  if (!themeToggle || !themeIcon) return;

  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Apply saved theme or system preference
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark-mode");
    themeIcon.textContent = "🌙";
  } else {
    document.body.classList.remove("dark-mode");
    themeIcon.textContent = "☀️";
  }

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    themeIcon.textContent = isDark ? "🌙" : "☀️";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

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
  // Initialize theme toggle
  initThemeToggle();
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

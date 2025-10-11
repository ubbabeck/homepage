/**
 * Main application script
 * Handles loading and rendering posts and categories on the homepage
 */

import { loadPosts, loadCategories } from "./data-loader.js";
import { renderPosts, renderCategories } from "./renderer.js";

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
 * Initialize the application
 */
async function init() {
  try {
    // Initialize theme toggle
    initThemeToggle();

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

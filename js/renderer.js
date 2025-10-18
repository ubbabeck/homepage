/**
 * Rendering utilities
 * Handles rendering posts and categories to the DOM
 */

import { formatDate } from "./data-loader.js";

/**
 * Render posts to the DOM
 * @param {Array} posts - Array of post objects
 * @param {HTMLElement} container - Container element to render into
 */
export function renderPosts(posts, container) {
  if (!posts || posts.length === 0) {
    container.innerHTML = "<p>No posts available.</p>";
    return;
  }

  const postsHTML = posts
    .map((post) => {
      // Handle both string and array categories for backwards compatibility
      const categories = Array.isArray(post.category)
        ? post.category
        : [post.category];
      const categoriesHTML = categories
        .map((cat) => {
          const slug = cat.toLowerCase().replace(/\s+/g, "-");
          return `<a href="category.html?cat=${encodeURIComponent(slug)}" class="category-tag">${escapeHtml(cat)}</a>`;
        })
        .join(" ");

      return `
        <article class="post">
            <h3><a href="${post.content}">${escapeHtml(post.title)}</a></h3>
            <p class="date">${formatDate(post.date)}</p>
            <div class="categories">${categoriesHTML}</div>
            <p>${escapeHtml(post.excerpt)}</p>
        </article>
    `;
    })
    .join("");

  container.innerHTML = postsHTML;
}

/**
 * Render categories to the DOM
 * @param {Array} categories - Array of category objects
 * @param {HTMLElement} container - Container element to render into
 */
export function renderCategories(categories, container) {
  if (!categories || categories.length === 0) {
    container.innerHTML = "<p>No categories available.</p>";
    return;
  }

  const categoriesHTML = categories
    .map(
      (category) => `
        <li>
            <a href="category.html?cat=${encodeURIComponent(category.slug)}">
                ${escapeHtml(category.name)}
            </a>
        </li>
    `,
    )
    .join("");

  container.innerHTML = categoriesHTML;
}

/**
 * Escape HTML to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

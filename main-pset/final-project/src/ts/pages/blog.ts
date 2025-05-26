import "../../scss/style.scss";
import { BlogListRenderer } from "../components/blog-list";
import { blogItemData } from "../data/blog-data";

function init(): void {
  // Render blog list
  const blogListRenderer = new BlogListRenderer();
  const blogListElement = blogListRenderer.render(blogItemData);
  document.querySelector(".main-content")?.appendChild(blogListElement);
}

/**
 * Initiate app after DOM loaded
 */
document.addEventListener("DOMContentLoaded", (): void => {
  init();
});

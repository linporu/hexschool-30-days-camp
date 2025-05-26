import "../../scss/style.scss";
import { BlogListRenderer } from "../blog-list-renderer";
import { blogData } from "../data/blog-data";

function init(): void {
  const blogListRenderer = new BlogListRenderer();

  if (!blogListRenderer.isReady()) {
    return;
  }

  blogListRenderer.render(blogData);
}

/**
 * Initiate app after DOM loaded
 */
document.addEventListener("DOMContentLoaded", (): void => {
  init();
});

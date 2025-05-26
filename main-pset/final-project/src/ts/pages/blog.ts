import "../../scss/style.scss";
import { BlogListRenderer } from "../blog-list-renderer";
import { blogItemData } from "../data/blog-data";

function init(): void {
  const blogListRenderer = new BlogListRenderer();

  if (!blogListRenderer.isReady()) {
    return;
  }

  blogListRenderer.render(blogItemData);
}

/**
 * Initiate app after DOM loaded
 */
document.addEventListener("DOMContentLoaded", (): void => {
  init();
});

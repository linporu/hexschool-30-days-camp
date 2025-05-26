import "../../scss/style.scss";
import { BlogListRenderer } from "../components/blog-list";
import { blogItemData } from "../data/blog-data";

function init(): void {
  // Render blog list
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

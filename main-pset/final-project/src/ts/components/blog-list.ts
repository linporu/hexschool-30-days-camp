import type { BlogItem } from "../types.js";

/**
 * Blog List Renderer Class
 * Responsible for rendering blog data to the DOM
 */
export class BlogListRenderer {
  private blogList: HTMLUListElement | null;

  constructor(selector: string = ".blog-list") {
    this.blogList = document.querySelector(selector);
  }

  /**
   * Creates HTML string for tags
   */
  private createTagsHtml(tags: string[]): string {
    return tags.map((tag: string): string => `<a href="#">${tag}</a>`).join("");
  }

  /**
   * Creates HTML string for popular tag
   */
  private createPopularTagHtml(isPopular: boolean): string {
    return isPopular ? `<a href="#" class="popular-tag">人氣文章</a>` : "";
  }

  /**
   * Creates a single blog item element
   */
  private createBlogItemElement(blogItemData: BlogItem): HTMLLIElement {
    const tagsHtml = this.createTagsHtml(blogItemData.tags);
    const popularTagHtml = this.createPopularTagHtml(blogItemData.isPopular);

    const blogItem: HTMLLIElement = document.createElement("li");
    blogItem.className = "blog-item";

    blogItem.innerHTML = `
      <img src="${blogItemData.image}" alt="${blogItemData.title}" loading="lazy" />
      <p>${blogItemData.date}</p>
      <div class="tag">
        ${tagsHtml}
        ${popularTagHtml}
      </div>
      <h3>${blogItemData.title}</h3>
      <p class="excerpt">${blogItemData.excerpt}</p>
      <div class="btn"><a href="">閱讀更多</a></div>
    `;

    return blogItem;
  }

  /**
   * Renders the blog list
   */
  public render(blogItemData: BlogItem[]): void {
    if (!this.blogList) {
      console.error("blog-list element not found");
      return;
    }

    this.blogList.innerHTML = "";

    const fragment = document.createDocumentFragment();

    blogItemData.forEach((blog: BlogItem): void => {
      const blogItem = this.createBlogItemElement(blog);
      fragment.appendChild(blogItem);
    });

    this.blogList.appendChild(fragment);
  }

  /**
   * Checks if the target container is found
   */
  public isReady(): boolean {
    return this.blogList !== null;
  }
}

import type { BlogItem } from "../types.js";

/**
 * Blog List Renderer Class
 * Generates the complete blog list HTML elements
 */
export class BlogListRenderer {
  /**
   * Creates the HTML string for tags
   */
  private createTagsHtml(tags: string[]): string {
    return tags
      .map(
        (tag: string): string => `<a href="#" class="tag-hashtag">${tag}</a>`
      )
      .join("");
  }

  /**
   * Creates the HTML string for the popular tag
   */
  private createPopularTagHtml(isPopular: boolean): string {
    return isPopular ? `<a href="#" class="tag">人氣文章</a>` : "";
  }

  /**
   * Creates a single blog item element
   */
  private createBlogItemElement(blogItemData: BlogItem): HTMLLIElement {
    const tagsHtml = this.createTagsHtml(blogItemData.tags);
    const popularTagHtml = this.createPopularTagHtml(blogItemData.isPopular);

    const blogItem: HTMLLIElement = document.createElement("li");
    blogItem.className = "card";

    blogItem.innerHTML = `
      <img class="card-img" src="${blogItemData.image}" alt="${blogItemData.title}" loading="lazy" />
      <time>${blogItemData.date}</time>
      <div class="tag-container">
        ${tagsHtml}
        ${popularTagHtml}
      </div>
      <h3 class="card-title">${blogItemData.title}</h3>
      <p class="card-excerpt">${blogItemData.excerpt}</p>
      <a href="#" class="btn-read-more">閱讀更多</a>
    `;

    return blogItem;
  }

  /**
   * Renders the complete blog list and returns an HTMLUListElement
   */
  public render(blogItemData: BlogItem[]): HTMLUListElement {
    const blogList: HTMLUListElement = document.createElement("ul");
    blogList.className = "card-container";

    blogItemData.forEach((blog: BlogItem): void => {
      const blogItem = this.createBlogItemElement(blog);
      blogList.appendChild(blogItem);
    });

    return blogList;
  }
}

import type { BlogItem } from "../types.js";

/**
 * Blog List Renderer Class
 * 負責產生完整的部落格列表 HTML 元素
 */
export class BlogListRenderer {
  /**
   * 建立標籤的 HTML 字串
   */
  private createTagsHtml(tags: string[]): string {
    return tags
      .map((tag: string): string => `<a href="#" class="tag-hashtag">${tag}</a>`)
      .join("");
  }

  /**
   * 建立人氣標籤的 HTML 字串
   */
  private createPopularTagHtml(isPopular: boolean): string {
    return isPopular ? `<a href="#" class="tag">人氣文章</a>` : "";
  }

  /**
   * 建立單一部落格項目元素
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
   * 渲染完整的部落格列表，回傳 HTMLUListElement
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

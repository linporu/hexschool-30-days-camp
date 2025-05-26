import type { BlogItem } from './types.js'

/**
 * 部落格渲染器類別
 * 負責將部落格資料渲染到 DOM 中
 */
export class BlogListRenderer {
  private blogList: HTMLUListElement | null

  constructor() {
    this.blogList = document.querySelector('.blog-list')
  }

  /**
   * 建立標籤 HTML 字串
   */
  private createTagsHtml(tags: string[]): string {
    return tags
      .map((tag: string): string => `<a href="#">${tag}</a>`)
      .join('')
  }

  /**
   * 建立人氣標籤 HTML 字串
   */
  private createPopularTagHtml(isPopular: boolean): string {
    return isPopular 
      ? `<a href="#" class="popular-tag">人氣文章</a>` 
      : ''
  }

  /**
   * 建立單一部落格項目元素
   */
  private createBlogItemElement(blog: BlogItem): HTMLLIElement {
    const tagsHtml = this.createTagsHtml(blog.tags)
    const popularTagHtml = this.createPopularTagHtml(blog.isPopular)

    const blogItem: HTMLLIElement = document.createElement('li')
    blogItem.className = 'blog-item'

    blogItem.innerHTML = `
      <img src="${blog.image}" alt="${blog.title}" loading="lazy" />
      <p>${blog.date}</p>
      <div class="tag">
        ${tagsHtml}
        ${popularTagHtml}
      </div>
      <h3>${blog.title}</h3>
      <p class="excerpt">${blog.excerpt}</p>
      <div class="btn"><a href="">閱讀內文</a></div>
    `

    return blogItem
  }

  /**
   * 渲染部落格列表
   */
  public render(blogData: BlogItem[]): void {
    if (!this.blogList) {
      console.error('找不到 .blog-list 元素')
      return
    }

    // 清空現有內容
    this.blogList.innerHTML = ''

    // 使用 DocumentFragment 提升效能
    const fragment = document.createDocumentFragment()
    
    blogData.forEach((blog: BlogItem): void => {
      const blogItem = this.createBlogItemElement(blog)
      fragment.appendChild(blogItem)
    })

    this.blogList.appendChild(fragment)
  }

  /**
   * 檢查是否找到目標容器
   */
  public isReady(): boolean {
    return this.blogList !== null
  }
}

import "../scss/style.scss";
import { BlogRenderer } from "./blog-renderer";
import { blogData } from "./data/blog-data";

/**
 * 應用程式初始化函數
 */
function initApp(): void {
  console.log("正在初始化部落格應用程式...");

  // 建立部落格渲染器實例
  const blogRenderer = new BlogRenderer();

  // 檢查 DOM 元素是否準備就緒
  if (!blogRenderer.isReady()) {
    console.error("應用程式初始化失敗：找不到必要的 DOM 元素");
    return;
  }

  // 渲染部落格列表
  blogRenderer.render(blogData);

  console.log(`成功渲染 ${blogData.length} 篇部落格文章`);
}

/**
 * 等待 DOM 載入完成後啟動應用程式
 */
document.addEventListener("DOMContentLoaded", (): void => {
  initApp();
});

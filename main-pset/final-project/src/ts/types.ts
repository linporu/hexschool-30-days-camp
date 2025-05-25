// 部落格文章的型別定義
export interface BlogItem {
  image: string;
  date: string;
  tags: string[];
  isPopular: boolean;
  title: string;
  excerpt: string;
}

// DOM 元素型別
export interface BlogListElement extends HTMLUListElement {}

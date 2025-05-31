// Type definition for a blog post
export interface BlogItem {
  image: string;
  date: string;
  tags: string[];
  isPopular: boolean;
  title: string;
  excerpt: string;
}

// DOM element types
export interface BlogListElement extends HTMLUListElement {}

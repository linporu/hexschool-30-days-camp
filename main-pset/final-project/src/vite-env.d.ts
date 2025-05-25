/// <reference types="vite/client" />

// 環境變數的類型定義
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // 在這裡定義更多環境變數...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// 資源導入的類型定義
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}

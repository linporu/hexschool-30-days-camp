# 前端部落格網站 - Final Project

## 🔗 線上預覽
[https://linporu.github.io/hexschool-30-days-camp/](https://linporu.github.io/hexschool-30-days-camp/)

## 🛠️ 技術棧
- **Vite** + **TypeScript** + **SCSS**
- **GitHub Actions** 自動部署

## 📁 程式碼結構

### HTML 檔案（根目錄）
```
index.html          # 首頁
blog.html           # 部落格列表頁
blog-detail.html    # 文章詳情頁
```

### TypeScript 程式碼
```
src/ts/
├── pages/          # 各頁面的主要邏輯
│   ├── index.ts    # 首頁 JS
│   ├── blog.ts     # 部落格頁 JS（有動態渲染）
│   └── blog-detail.ts
├── components/     # 可重用組件
│   └── blog-list.ts    # 部落格列表渲染器（主要功能）
├── data/
│   └── blog-data.ts    # 部落格文章資料
└── types.ts        # TypeScript 型別定義
```

### SCSS 樣式
```
src/scss/
├── style.scss      # 主樣式檔案
├── _variables.scss # 設計變數（顏色、斷點等）
├── _layout.scss    # 版面佈局
├── _base.scss      # 基礎樣式
├── _mixin.scss     # 可重用樣式
└── components/     # 組件樣式
    ├── _nav.scss   # 導航列
    ├── _card.scss  # 文章卡片（響應式重點）
    ├── _footer.scss
    └── ...
```

## 🔍 重點檢視位置

### TypeScript 實作
- **主要邏輯**: `src/ts/components/blog-list.ts` - 動態渲染部落格列表
- **型別定義**: `src/ts/types.ts` - BlogItem 介面
- **資料結構**: `src/ts/data/blog-data.ts` - 部落格文章陣列

### 響應式設計
- **主要樣式**: `src/scss/components/_card.scss` - 3欄→2欄→1欄響應式
- **設計變數**: `src/scss/_variables.scss` - 斷點設定
- **Mixins**: `src/scss/_mixin.scss` - container 等工具

### 建置設定
- **Vite 設定**: `vite.config.ts` - 多頁面設定
- **TypeScript 設定**: `tsconfig.json`
- **自動部署**: `.github/workflows/deploy.yml`

## 🚀 本機開發
```bash
npm install
npm run dev
npm run build
```

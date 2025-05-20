const blogData = [
  {
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo4.png?raw=true",
    date: "2024/10/11",
    tags: ["#React", "#入門基礎"],
    title: "React 入門不再迷惘：三步驟帶你上手核心概念",
    excerpt:
      "你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我",
  },
  {
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo1.png?raw=true",
    date: "2024/09/07",
    tags: ["#作品集", "#求職攻略"],
    title: "前端作品集打造指南：讓你的專案成為履歷亮點",
    excerpt:
      "對正在求職的前端工程師而言，作品集往往是第一個「敲門磚」的利器。當面試官瀏覽你的網頁作品時，能夠快速了解",
  },
  {
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo2.png?raw=true",
    date: "2024/09/03",
    tags: ["#CSS設計", "#視覺體驗"],
    title: "CSS 魔法大揭密：排版與設計的三大關鍵技巧",
    excerpt:
      "在瀏覽器畫面上呈現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求時是習慣式設計時",
  },
  {
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo6.png?raw=true",
    date: "2024/07/09",
    tags: ["#轉職工程師", "#學習心法"],
    title: "前端轉職必讀：從自學者到工程師的心路歷程",
    excerpt:
      "能夠踏自學進入前端領域，聽起來令人憧憬，但實際過程中可能遇到的挫折與疑惑，卻常常令人猶豫。回想當初我",
  },
  {
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo3.png?raw=true",
    date: "2024/07/08",
    tags: ["#面試準備", "#工程師求職", "人氣文章"],
    title: "前端面試不再慌：破解常見提問的三大策略",
    excerpt:
      "面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是提營無法在短時間內展現實力。其實，許多面試",
  },
  {
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo5.png?raw=true",
    date: "2024/06/29",
    tags: ["#Vue3", "#框架學習"],
    title: "Vue 3 新手指南：快速掌握 Composition API 與關鍵特色",
    excerpt:
      "許多前端開發者對 Vue 一直情有獨鍾，因為它易上手又靈活。隨著 Vue3 上線，Composition API 的導入更是大",
  },
];

// 動態生成部落格卡片
document.addEventListener("DOMContentLoaded", function () {
  const blogList = document.querySelector(".blog-list");

  // 清空現有內容
  blogList.innerHTML = "";

  // 使用遍歷陣列方式生成所有卡片
  blogData.forEach((blog, index) => {
    // 創建標籤 HTML
    const tagsHtml = blog.tags.map((tag) => `<a href="#">${tag}</a>`).join("");

    // 創建一個新的 li 元素
    const blogItem = document.createElement("li");
    blogItem.className = "blog-item";

    // 添加動畫延遲以實現漸進式出現效果
    blogItem.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;

    // 設置卡片 HTML 內容
    blogItem.innerHTML = `
      <img src="${blog.image}" alt="${blog.title}" loading="lazy" />
      <p class="date">${blog.date}</p>
      <div class="tag">
        ${tagsHtml}
      </div>
      <h3>${blog.title}</h3>
      <p class="excerpt">${blog.excerpt}</p>
      <div class="blog-item-btn"><a href="">閱讀內文</a></div>
    `;

    // 將卡片添加到清單中
    blogList.appendChild(blogItem);
  });
});

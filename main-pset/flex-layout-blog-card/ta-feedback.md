Hi，RL：

你好，我是六角學院 助教 Barret

作業練習得很好唷～

有成功使用 flex 屬性完成排版

以下有些建議給同學參考：

- CSS
  - 字體無論是使用哪一種，建議都要補上 sans-serif（無襯線字體），確保所有裝置都能正確瀏覽。
  - 最外層的 .wrap 作為容器通用屬性的 class，通常只會有 width 與 margin 的設定。其他的 CSS 則建議拆出來另寫成一個 class 唷！
  - 這個練習當中使用 wrap 就不用再包一層 content
  - 如果希望區塊置中顯示，可以透過` margin: 0 auto `的方式設定
  - wrap 可以依照內容的寬度為 1296px 設定即可
  - 顏色設定上可以統一設定方式，例如統一使用十六進制的方式(#000000)
  - 避免使用標籤設定 CSS，盡可能使用 class 的方式設定
  - 文字尺寸預設是 16px，因此可以不用額外設定  `font-size: 16px`
  - 階層越少越好，以利後續維護與閱讀
- HTML
  - 用元件的名稱來命名 class，例如 .card .card-img .card-title 等等
  - 卡片日期可以使用[** <time> 標籤**](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Reference/Elements/time)

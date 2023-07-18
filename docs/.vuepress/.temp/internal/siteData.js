export const siteData = JSON.parse("{\"base\":\"/cola-designer-pro-doc/\",\"lang\":\"zh-CN\",\"title\":\"Cola Designer Pro\",\"description\":\"Cola Designer Pro使用说明书&开发手册\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/logo.ico\"}],[\"meta\",{\"name\":\"cola designer\",\"content\":\"cola designer cola-designer Cola-Designer\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

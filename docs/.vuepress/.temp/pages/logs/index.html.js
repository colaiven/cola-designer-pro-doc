export const data = JSON.parse("{\"key\":\"v-14e8f107\",\"path\":\"/logs/\",\"title\":\"更新日志\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1689585629000,\"contributors\":[{\"name\":\"chao\",\"email\":\"vchenghou@aliyun.com\",\"commits\":1}]},\"filePathRelative\":\"logs/readme.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

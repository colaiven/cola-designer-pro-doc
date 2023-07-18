export const themeData = JSON.parse("{\"logo\":\"/images/logo.svg\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"指南\",\"link\":\"/start/\"},{\"text\":\"自定义组件\",\"link\":\"/custom/\"},{\"text\":\"更新日志\",\"link\":\"/logs/\"},{\"text\":\"开源版\",\"link\":\"https://gitee.com/colaiven/cola-designer\"}],\"sidebar\":{\"/start/\":[\"/start/readme.md\",{\"text\":\"快速开始\",\"collapsible\":true,\"children\":[\"/start/devops/dev.md\",\"/start/devops/env.md\"]},{\"text\":\"使用说明\",\"collapsible\":true,\"children\":[\"/start/system.md\",\"/start/designer.md\",\"/start/datasource.md\"]}],\"/custom/\":[\"/custom/readme.md\",\"/custom/step.md\",\"/custom/options.md\"]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

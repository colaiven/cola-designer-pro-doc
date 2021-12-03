module.exports = {
  title: 'Cola-Designer',
  description: '基于VUE的拖拽式数据报表设计器',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '首页', link: '/' },
      {text: '指南', link: '/start/' },
      {text: '自定义组件', link: '/custom/' },
      {text: '更新日志', link: '/log/' },
      {text: 'Gitee', link: 'https://gitee.com/colaiven/cola-designer'},
      {text: 'GitHub', link: 'https://github.com/colaiven/cola-designer'}
    ],
    sidebar: {
      '/start/': [
        '',
        'Start',
      ],
      '/custom/': [
        '',
      ],
      '/log/': [
        '',
      ],
    }, // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};

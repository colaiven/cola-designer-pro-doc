module.exports = {
  title: 'Cola-Designer',
  description: '基于VUE的拖拽式数据报表设计器',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.ico' }],
  ],
  base: '/',
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[
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
        'Instructions',
        'Build',
        'Problem',
      ],
      '/custom/': [
        '',
      ],
      '/log/': [
        '',
      ],
    },
  }
};

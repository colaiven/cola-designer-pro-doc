import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Cola Designer Pro',
    description: 'Cola Designer Pro使用说明书&开发手册',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.ico' }],
        ['meta', { name: 'cola designer', content: 'cola designer cola-designer Cola-Designer'}]
    ],
    base: '/cola-designer-pro-doc/',
    markdown: {
        lineNumbers: true, // 代码块显示行号
        externalLinks: { target: '_blank', rel: 'nofollow noopener noreferrer' }
    },
    theme: defaultTheme({
        logo: '/images/logo.svg',
        navbar:[
            {text: '首页', link: '/' },
            {text: '指南', link: '/start/' },
            {text: '自定义组件', link: '/custom/' },
            {text: '更新日志', link: '/logs/' },
            {text: '开源版', link: 'https://gitee.com/colaiven/cola-designer' },
        ],
        sidebar:{
            '/start/':[
                '/start/readme.md',
                {
                    text: '使用说明',
                    collapsible: true,
                    children:[
                        '/start/system.md',
                        '/start/designer.md',
                    ]
                },
                {
                    text: '部署&运行',
                    collapsible: true,
                    children:[
                        '/start/devops/env.md',
                        '/start/devops/dev.md',
                    ]
                },
            ],
            '/custom/':[
                '/custom/readme.md',
                '/custom/step.md',
                '/custom/options.md'
            ]
        },
    }),
    plugins: [
        searchPlugin({
            // 配置项
        }),
    ],
})

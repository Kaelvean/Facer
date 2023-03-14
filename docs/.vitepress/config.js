module.exports = {
    base: "/Facer",
    title: 'Facer',
    lastUpdated: true,
    cleanUrls: true,
    head: [
        [
            'link', { rel: 'icon', href: '/images/logo.png' }
        ]
    ],
    themeConfig: {
        siteTitle: 'Facer',
        logo: '/images/logo.png',
        lastUpdatedText: '最近更新',
        outlineTitle: '页面目录',
        nav: [
            { text: '开发指南', link: '/guide/start' },
            { text: '组件使用', link: '/examples/button/' },
            { text: "Vue", link: "/articles/vue/index" },
            { text: "React", link: "/articles/react/index" },
            { text: "小程序", link: "/articles/mini/index" },
            { text: "Electron", link: "/articles/electron/index" },
            {
                text: "前端",
                items: [
                    { text: "基础", link: "/articles/basic/index" },
                    { text: "Vue", link: "/articles/vue/index" },
                    { text: "React", link: "/articles/react/index" },
                ],
            },

        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/Kaelvean' }],
        sidebar: {
            '/guide/': [
                {
                    text: "指引",    //标签名字
                    collapsible: true,    //动态展开
                    collapsed: true,      //默认展开
                    items: [
                        {
                            text: "index",        //标签名字
                            link: "/articles/other/vitepress/index",         //链接
                        },
                    ],
                },
            ],
        },
        footer: {
            message: '由尤恩开发，该项目遵循 MIT 许可证',
            copyright: 'Copyright © 2023 Ewing All Rights Reserved.'
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        editLink: {
            pattern: 'https://github.com/Kaelvean',
            text: 'Edit on Github'
        },
    }
};

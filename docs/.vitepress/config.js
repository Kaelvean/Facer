module.exports = {
    lang: 'zh-CN',
    base: "/facer",
    title: 'FACER',
    lastUpdated: true,
    cleanUrls: true,
    head: [
        [
            'link', { rel:'shortcut icon', href:'/facer/images/favicon.ico'}
        ]
    ],
    themeConfig: {
        siteTitle: 'Facer',
        logo: '/images/logo.png',
        lastUpdatedText: '上次修改',
        outlineTitle: '页面目录',
        nav: [
            { text: '首页', link: "/" },
            { text: '博客', link: '/blog/' },
            { text: '书籍', link: "/book/" },
            { text: '团队', link: "/page/" },
            { text: '关于', link: "/about/" },
            { text: '指南', link: 'https://vitepress.dev/' },
            {
                text: "选项",
                items: [
                    { text: "基础", link: "/blog/index" },
                    { text: "进阶", link: "/blog/article" }
                ],
            },

        ],

        sidebar: {
            // This sidebar gets displayed when user is under `blog` directory.
            '/blog/': [
                {
                    text: 'Guide',
                    collapsible: true,  //是否支持折叠展开
                    collapsed: false, //是否默认折叠
                    items: [
                        // This shows `/guide/index.md` page.
                        { text: 'Index', link: '/guide/' }, // /guide/index.md
                        { text: 'One', link: '/guide/one' }, // /guide/one.md
                        { text: 'Two', link: '/guide/two' } // /guide/two.md
                    ]
                }
            ],
            // This sidebar gets displayed when user is under `config` directory.
            '/book/': [
                {
                    text: '书籍',
                    collapsible: true,  //是否支持折叠展开
                    collapsed: false, //是否默认折叠
                    items: [
                        // This shows `/book/index.md` page.
                        { text: 'Index', link: '/book/' }, // /book/index.md
                        { text: 'like', link: '/book/like' }, // /book/like.md
                        { text: 'read', link: '/book/read' } // /book/read.md
                    ]
                }
            ]
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/Kaelvean' }],
        footer: {
            message: '由尤恩开发，该项目遵循 MIT 许可证',
            copyright: 'Copyright © 2023 Ewing All Rights Reserved.'
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        editLink: {
            pattern: 'https://github.com/Kaelvean/Facer/docs',
            text: '在Github上编辑此页'
        },
    }
};

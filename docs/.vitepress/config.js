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
        lastUpdatedText: '上次修改',
        outlineTitle: '页面目录',
        nav: [
            { text: "首页", link: "/" },
            { text: '博客', link: '/blog/' },
            { text: "书籍", link: "/book/" },
            { text: "Page", link: "/page/" },
            { text: "小程序", link: "/articles/mini/index" },
            { text: "关于", link: "/about/" },
            { text: '指南', link: 'https://vitepress.dev/' },
            {
                text: "开发",
                items: [
                    { text: "基础", link: "/blog/index" },
                    { text: "进阶", link: "/blog/page2" },
                    { text: "高级", link: "/articles/react/index" },
                ],
            },

        ],

        sidebar: {
            // This sidebar gets displayed when user is under `blog` directory.
            '/blog/': [
                {
                    text: 'Guide',
                    collapsible: true,  //是否至此展开 折叠
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
                    text: 'Config',
                    items: [
                        // This shows `/config/index.md` page.
                        { text: 'Index', link: '/config/' }, // /config/index.md
                        { text: 'Three', link: '/config/three' }, // /config/three.md
                        { text: 'Four', link: '/config/four' } // /config/four.md
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

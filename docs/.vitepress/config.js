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
        smoothScroll: true,     // 启动页面丝滑滚动
        nav: [
            { text: '首页', link: "/" },
            { text: '博客', link: '/blog/' },
            { text: '团队', link: "/page/" },
            { text: '引导', link: "/guide/" },
            { text: '书籍', link: "/book/" },
            { text: '文档', link: "/document/" },
            { text: '指南', link: 'https://vitepress.dev/' },
            { text: '隐私', link: "/privacy/" },
            { text: '关于', link: "/about/" },
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
            '/guide/': [
                {
                    text: 'Guide',
                    collapsible: true,  //是否支持折叠展开
                    collapsed: false, //是否默认折叠
                    items: [
                        // This shows `/guide/index.md` page.
                        { text: '引导', link: '/guide/' }, // /guide/index.md
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
                        { text: '索引', link: '/book/' }, // /book/index.md
                        { text: 'like', link: '/book/like' }, // /book/like.md
                        { text: 'read', link: '/book/read' } // /book/read.md
                    ]
                }
            ],
            '/document/':getSidebar()
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/yoea' }],
        footer: {
            message: 'F·A·C·E·R',
            copyright: 'Copyright © 2023 Ewing All Rights Reserved.'
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
    }
};

function getSidebar() {
    return [
        {
            text:'HTML',
            children: [
                { text: '基础', link: '/interview/HTML/' },
                { text: '进阶', link: '/interview/HTML/advanced' },
            ],
            sidebarDepth:3
        },
        {
            text:'CSS',
            children:[
                { text: '基础', link: '/CSS/' },
                { text: '进阶', link: '/CSS/advanced' },
            ]
        },
        {
          text:'Javascript',
          children:[
            { text: '基础', link: '/Javascript/' },
            { text: '进阶', link: '/Javascript/advanced' },
          ]
        },
        {
          text:'Vue',
          children:[
            { text: '基础', link: '/Vue/' },
            { text: '进阶', link: '/Vue/advanced' },
          ]
        },
        {
          text:'浏览器',
          children:[
            { text: '基础', link: '/Vue/' },
            { text: '进阶', link: '/Vue/advanced' },
          ]
        },
        {
          text:'网络',
          children:[
            { text: '基础', link: '/Network/' },
            { text: '进阶', link: '/Network/advanced' },
          ]
        },
        {
          text:'安全',
          children:[
            { text: '基础', link: '/Security/' },
            { text: '进阶', link: '/Security/advanced' },
          ]
        },
        {
          text:'面经',
          children:[
            { text: '基础', link: '/Experience/' },
            { text: '进阶', link: '/Experience/advanced' },
          ]
        },
    ]
}

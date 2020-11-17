module.exports = {
    title: 'TypeScript学习',  // 设置网站标题
    description : 'TypeScript 入门教程',
    themeConfig: {
        head: [
            ['link', { rel: 'icon', href: 'icon/favicon.png' }]
        ],
        logo: '/image/banner.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/chapterFirst/first' },
        ],
        sidebarDepth: 2,
        displayAllHeaders: true,
        editLinks: true,
        docsBranch: 'master',
        sidebar: [
            {
                title: '简介',   // 标题：必要的
                path: '/chapterFirst/first',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 展开侧边栏： 可选的, 默认值是 true,
                sidebarDepth: 2,    // 侧边栏深度：可选的, 默认值是 1
                children: [
                    '/chapterFirst/first.md',
                    '/chapterFirst/second.md',
                    '/chapterFirst/third.md',
                ]
            },
            {
                title: '基础',   // 标题：必要的
                path: '/chapterSecond/first',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 展开侧边栏： 可选的, 默认值是 true,
                sidebarDepth: 2,    // 侧边栏深度：可选的, 默认值是 1
                children: [
                    '/chapterSecond/first.md',
                    '/chapterSecond/second.md',
                    '/chapterSecond/third.md',
                    '/chapterSecond/fourth.md',
                    '/chapterSecond/fifth.md',
                    '/chapterSecond/sixth.md',
                    '/chapterSecond/seventh.md',
                    '/chapterSecond/eighth.md',
                ]
            }
        ]
    }
};

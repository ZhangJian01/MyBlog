module.exports = {
    title: "城里的乡下鱼",
    locales: {
        "/": {
            lang: "zh-CN"
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }]
    ],
    base: "/ZhangJian/",
    themeConfig: {
        lastUpdated: '上次更新',
        repo: 'ZhangJian01/MyBlog',
        nav: [
            { text: '技术文档', link: '/IT/' },
            {
                text: '个人点滴',
                link: '/Person/'
                    // items: [
                    //     { text: '云仓', link: '/Project/云仓/' },
                    //     { text: '云商', link: '/Project/云商/' },
                    //     { text: '铝供应链一体化平台', link: '/Project/铝供应链一体化平台/' }
                    // ]
            },
            { text: '美文摘录', link: '/Article/' },
        ],
        sidebarDepth: 3
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'public'
            }
        }
    }
}
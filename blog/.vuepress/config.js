const basePath = 'post'

module.exports = {
    // meta
    title: 'lagabu的个人笔记',
    description: '"lagabu"是"癞蛤蟆"的方言读法，用烟熏制并配以蘸料就做成了"熏拉丝"。肉质细腻、口味丰富，不仅鲜美还能延年益寿。(+1s)',
    // vuepress config
    dest: basePath,
    base: `/${basePath}/`,
    serviceWorker: true,
    evergreen: true,
    ga: 'UA-112738831-1',

    themeConfig: {
        sidebarDepth: 2,
        nav: [
            {text: '首页', link: '/'},
            {
                text: '面经和知识', items: [
                    {text: '计算机网络知识点', link: '/interview/netbase'},
                    {text: 'HTML/CSS知识', link: '/interview/cssbase'},
                    {text: 'js知识', link: '/interview/jsbase'},
                    {text: '算法和数据结构', link: '/interview/algbase'},
                    {text: 'Vue.js知识点', link: '/interview/vuebase'}

                ]
            },
            {text: '项目中遇到的问题', link: '/questions/'},
            {text: '个人琐事', link: '/trifles/'}
        ],
        // 假定 GitHub。也可以是一个完整的 GitLab 网址
        repo: 'zzh97228',
        sidebar: {
            '/interview/': [
                '',
                'netbase',
                'cssbase',
                'jsbase',
                'algbase',
                'vuebase'
            ],
            '/questions/': [
                ''
            ],
            '/trifles/': [
                ''
            ]
        }
    }
}

const basePath = 'post'

module.exports = {
    // meta
    title: 'lagabu的个人笔记',
    description: '记录点项目中遇到的难题和生活中的一点琐事',
    // vuepress config
    dest: basePath,
    base: `https://zzh97228.github.io/${basePath}/`,
    serviceWorker: true,
    evergreen: true,
    ga: 'UA-112738831-1'
}

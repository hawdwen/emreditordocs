module.exports = {
    title: 'EmrEditor  API 接口文档',  // 
    description: '接口文档',
    base: '/emreditor/',
    lastUpdated: 'Last Updated', // string | boolean
    themeConfig: {
        repo: 'hawdwen/emreditor',
        nav: [
            { text: '常见命令', link: '/zh/command' },
        ],
        sidebar: {
        },
        displayAllHeaders: true ,// 默认值：false,
        sidebarDepth: 2
    },
    markdown: {
        lineNumbers: true
      }
}
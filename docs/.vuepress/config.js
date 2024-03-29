const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "Hiper's blog",
  // description: 'web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。',
  description: '技术博客,专注摸鱼',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
    extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ] //修改提取出的标题级别
  },

  head,
  plugins,
  themeConfig: {
      repo: 'https://github.com/chenhaipeng', // Github仓库地址
      docsDir: 'docs', // .md文件放在了docs目录下
      editLinks: true, // 启用编辑链接
      editLinkText: '编辑',
  }
}

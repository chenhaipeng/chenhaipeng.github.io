// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '后端',
    link: '/backend/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '后端文章',
        items: [
          { text: 'Java', link: '/pages/7e9402/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '《Go》学习笔记', link: '/note/go/' },
        ],
      },
    ],
  },
  {
    text: '大数据',
    link: '/bigdata/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '大数据文章',
        items: [
          { text: 'Elasticsearch', link: '/pages/bcc526/' },
        ],
      },
    ],
  },
  {
    text: '云原生',
    link: '/cloud/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '云原生文章',
        items: [
          { text: 'docker', link: '/pages/2e4348/' },
        ],
      },
    ],
  },
  {
    text: '开源协同',
    link: '/opensource/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '项目',
        items: [
          { text: 'skywalking', link: '/note/skywalking/' },
        ],
      },
    ],
  },
  {
    text: '效率工具',
    link: '/tools/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '学习笔记',
        items: [
          { text: '《Git》学习笔记', link: '/note/git/' },
        ],
      },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },

]

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'zhengddzz文档',
  description: 'zhengddzz帮助文档',
  lang: 'zh-Hans',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    // 网站访问统计代码
    [
      'script',
      {
        defer: '',
        src: 'https://v.zdzz.top/script.js',
        'data-website-id': '44565281-c3bc-44e6-b8e1-194f0800e75f'
      }
    ]
  ],

  themeConfig: {
    logo: '/img/logo.png',

    nav: [
      { text: '主站', link: '/主站/' },
      { text: '竹节云帮助文档', link: '/idc/' },
      { text: 'MC服务器指南', link: '/MC/' },
      { text: '网站事件通知', link: '/blog/' }
    ],

    sidebar: {
      '/主站/': [
        {
          text: '主站',
          items: [
            { text: '开始', link: '/主站/' },
            { text: '使用条款', link: '/主站/使用条款' },
            { text: '隐私政策', link: '/主站/隐私政策' },
            { text: '网站更新日志&大事记', link: '/主站/c_log' },
            { text: '网站待办及规划', link: '/主站/todo' }
          ]
        }
      ],
      '/idc/': [
        {
          text: '竹节云帮助文档',
          items: [
            { text: '开始', link: '/idc/' },
            { text: '代理用户权益对比', link: '/idc/COPUR' }
          ]
        }
      ],
      '/MC/': [
        {
          text: 'MC服务器指南',
          items: [
            { text: '开始', link: '/MC/' },
            { text: '聊天群规', link: '/MC/群规' }
          ]
        },
        {
          text: '正式服',
          collapsed: false,
          items: [
            { text: '介绍', link: '/MC/正式服/介绍' },
            { text: '服务器规定', link: '/MC/正式服/服务器规定' },
            { text: '插件&指令', link: '/MC/正式服/插件&指令' },
            { text: '常见问题', link: '/MC/正式服/常见问题' },
            { text: '更新日志', link: '/MC/正式服/更新日志' }
          ]
        },
        {
          text: '测试服',
          collapsed: false,
          items: [
            { text: '介绍', link: '/MC/测试服/介绍' },
            { text: '服务器规定', link: '/MC/测试服/服务器规定' },
            { text: '插件&指令', link: '/MC/测试服/测试服插件&指令' },
            { text: '待办事项', link: '/MC/测试服/测试服待办事项' },
            { text: '更新日志', link: '/MC/测试服/更新日志' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/zhengddzz/help/' }],

    footer: {
      message: `版权所有 © ${new Date().getFullYear()} zhengddzz，基于 <a href="https://vitepress.dev" target="_blank">VitePress</a> 构建。`,
      copyright:
        '<a href="http://beian.miit.gov.cn" target="_blank">粤ICP备2025464402号-1</a> · <a href="https://beian.mps.gov.cn/#/query/webSearch?code=44060502004003" rel="noreferrer" target="_blank">粤公网安备44060502004003号</a>'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/zhengddzz/help/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdatedText: '最后更新于',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      label: '本页目录'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    notFound: {
      title: '页面未找到',
      quote: '看起来你访问了一个不存在的页面。',
      linkText: '返回首页'
    }
  }
})

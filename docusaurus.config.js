// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'zhengddzz文档',
  url: 'https://docs.zdzz.top', // 替换为你的实际域名
  baseUrl: '/',
  // 处理断链的策略：throw（报错终止）、warn（警告）、ignore（忽略）
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 国际化配置（默认语言为中文）
  i18n: {
    defaultLocale: 'zh-Hans', // 改为中文
    locales: ['zh-Hans'],
  },

  // 预设配置（集成文档、主题等核心功能）
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js', // 侧边栏配置文件路径
          // 编辑页面的链接（修改为你的仓库地址）
          editUrl: 'https://github.com/zhengddzz/help/blob/main/',
          routeBasePath: '/', // 文档根路径改为网站根目录
        },
        theme: {
          customCss: './src/css/custom.css', // 自定义CSS路径
        },
      }),
    ],
  ],

  // 主题配置
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 社交分享卡片图片
      image: 'img/1 (2).png',
      navbar: { // 导航栏配置
        title: 'zhengddzz文档',
        logo: {
          alt: '网站Logo',
          src: 'img/1 (2).png',
        },
        items: [ // 导航栏菜单
          {
            type: 'doc', // 指向单个文档
            docId: '主站', // 文档ID（对应docs/MC/index.mdx）
            position: 'left',
            label: '主站', // 导航项显示名称
          },
          {
            type: 'doc', // 指向单个文档
            docId: 'idc', // 文档ID（对应docs/MC/index.mdx）
            position: 'left',
            label: '竹节云帮助文档', // 导航项显示名称
          },
          {
            type: 'doc', // 指向单个文档
            docId: 'MC', // 文档ID（对应docs/MC/index.mdx）
            position: 'left',
            label: 'MC服务器指南', // 导航项显示名称
          },
          {
            to: 'blog', // 文档ID（对应docs/MC/index.mdx）
            position: 'right',
            label: '网站事件通知', // 导航项显示名称
          },
        ],
      },
      footer: { // 页脚配置
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'MC服务器指南',
                to: '/MC', // 页面路径（基于routeBasePath）
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'zdzz服务交流群（QQ群）',
                href: 'https://qm.qq.com/q/fVIB8Evxd',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/zhengddzz/help/',
              },
            ],
          },
        ],
        copyright: `<p>版权所有 © ${new Date().getFullYear()} zhengddzz，基于Docusaurus构建。</p><a href="http://beian.miit.gov.cn" target="_blank">粤ICP备2025464402号-1</a>
<a href="https://beian.mps.gov.cn/#/query/webSearch?code=44060502004003" rel="noreferrer" target="_blank">粤公网安备44060502004003号</a><div class="footer">
    本站由<a href="https://zhujieyun.com" target="_blank" rel="noopener noreferrer"><img src="https://docs.zdzz.top/img/IDC-logo.png" alt="竹节云"  style="height: 20px; vertical-align: middle;">
    </a>提供服务器与 CDN 加速支持</div>`
      },
      // 代码高亮主题
    }),
};

export default config;

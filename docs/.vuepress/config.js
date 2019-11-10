module.exports = {
  title: 'Vigour',
  description: 'Yet another UI Library based on Vue 2.X .',
  themeConfig: {
    navbar: true,
    nav: [
      { text: 'GitHub', link: 'https://github.com/mokunshao/vigour' },
    ],
    sidebar: [
      ['/', 'Get Started 入门'],
      {
        title: 'Components 组件',
        collapsable: false,
        children: [
          '/components/button',
        ]
      },
    ],
    collapsable: false
  }
}
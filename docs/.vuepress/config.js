const path = require('path');

module.exports = {
  base: '/vigour/',
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
  },
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .exclude.add(path.resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
}
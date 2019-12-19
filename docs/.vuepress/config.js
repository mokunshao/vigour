const path = require('path');

module.exports = {
  base: '/vigour/',
  title: 'Vigour',
  description: 'A UI components library that based on Vue 2.X .',
  themeConfig: {
    navbar: true,
    nav: [
      { text: 'GitHub', link: 'https://github.com/mokunshao/vigour' },
    ],
    sidebar: [
      ['/', 'Getting Started'],
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/button',
          '/components/icon',
          '/components/input',
          '/components/tag-input',
          '/components/grid',
          '/components/layout',
          '/components/checkbox',
          '/components/radio',
          '/components/toast',
          '/components/tabs',
          '/components/popover',
          '/components/collapse',
          '/components/toggle',
          '/components/dialog',
          '/components/notification',
          '/components/cascader',
          '/components/dropdown',
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
};

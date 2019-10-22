module.exports = {
  processors: [
    [
      '@mapbox/stylelint-processor-arbitrary-tags',
      {
        fileFilterRegex: [/\.vue$/],
      },
    ],
  ],
  extends: ['stylelint-config-standard'],
  rules: {
    'no-empty-source': null,
    'at-rule-no-unknown': null,
  },
};

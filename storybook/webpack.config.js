const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = (storybookBaseConfig) => {
  /* eslint-disable no-param-reassign */
  storybookBaseConfig.resolve = {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.js',
      '@': resolve('src'),
      css: resolve('src/css'),
      store: resolve('src/store'),
      views: resolve('src/views'),
      assets: resolve('src/assets'),
      components: resolve('src/components'),
    },
  };

  storybookBaseConfig.module.rules.push({
    test: /\.styl/,
    loaders: ['style-loader', 'css-loader', 'stylus-loader'],
    include: path.resolve(__dirname, '../src'),
  });

  return storybookBaseConfig;
};

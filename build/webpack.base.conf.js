import formatter from 'eslint-friendly-formatter';
import { resolveFolder } from './utils';
import config from '../config';

export default {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: config.build.outputPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolveFolder('src')],
        options: {
          formatter,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  // see https://github.com/vuejs-templates/webpack/blob/master/template/build/webpack.base.conf.js
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolveFolder('src'),
      css: resolveFolder('src/css'),
      store: resolveFolder('src/store'),
      views: resolveFolder('src/views'),
      assets: resolveFolder('src/assets'),
      models: resolveFolder('da/models'),
      components: resolveFolder('src/components'),
    },
  },
};

import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config from '../config';

const assetsPath = (_path) => {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

const cssLoaders = (options = {}) => {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap,
    },
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = [cssLoader];
    if (loader) {
      loaders.push({
        loader: `${loader}-loader`,
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap,
        }),
      });
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    return options.extract ? ExtractTextPlugin.extract({
      use: loaders,
      fallback: 'vue-style-loader',
    }) : ['vue-style-loader'].concat(loaders);
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus'),
  };
};

const resolveFolder = dir => (
  path.join(__dirname, '..', dir)
);

const styleLoaders = (options) => {
  const output = [];
  const loaders = exports.cssLoaders(options);
  /*eslint-disable */
  for (const extension in loaders) {
    const loader = loaders[extension];
    output.push({
      test: new RegExp(`\\.${extension}$`),
      use: loader,
    });
  }
  /*eslint-enable */
  return output;
};

export {
  assetsPath,
  cssLoaders,
  styleLoaders,
  resolveFolder,
};

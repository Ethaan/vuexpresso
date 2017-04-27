import path from 'path';
import graphql from '../data';

export default {
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    outputPath: path.resolve(__dirname, '../dist'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    productionGzip: false,
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    productionSourceMap: true,
    bundleAnalyzerReport: process.env.npm_config_report,
    productionGzipExtensions: ['js', 'css'],
  },
  dev: {
    env: "'development'",
    port: 8000,
    proxyTable: {},
    autoOpenBrowser: true,
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
  },
  prod: {
    env: "'production'",
    mongoURL: null,
  },
  database: {
    mongoURL: 'mongodb://localhost:27017/example',
  },
  graphql,
};

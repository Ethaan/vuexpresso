import path from 'path';
import graphql from '../data';

export default {
  build: {
    outputPath: path.resolve(__dirname, '../dist'),
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

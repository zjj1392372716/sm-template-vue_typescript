import * as path from 'path';

const rootDir = path.resolve(__dirname, '../');


export default {
  dev: {
    host: 'localhost',
    port: 8000,
    autoOpenBrowser: false,
    publicPath: '/',
    hotModuleUpdate: true,
    devtool: 'eval-source-map'
  },
  prod: {
    publicPath: './',
    devtool: 'source-map'
  },
  rootDir,
};


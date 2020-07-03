import baseConfig from './webpack.base.config';
import * as merge from 'webpack-merge';
import * as webpack from 'webpack';
import config from '../config/config';
import * as WebpackDevServer from 'webpack-dev-server';

const DevConfig: WebpackDevServer.Configuration = merge(baseConfig, {
  mode: 'development',
  devtool: (config.dev.devtool) as webpack.Options.Devtool,
  module: {
    rules: [
      {
        test: /\.(pcss|postcss)$/i,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    port: config.dev.port,
    host: config.dev.host,
    open: config.dev.autoOpenBrowser,
    hot: config.dev.hotModuleUpdate,
    stats: 'errors-only'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
});

export default DevConfig;
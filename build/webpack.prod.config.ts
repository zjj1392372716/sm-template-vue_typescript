import baseConfig from './webpack.base.config';
import * as merge from 'webpack-merge';
import * as webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import config from '../config/config';

const prodConfig: webpack.Configuration = merge(baseConfig, {
  mode: 'production',
  devtool: (config.prod.devtool) as webpack.Options.Devtool,
  module: {
    rules: [
      {
        test: /\.(pcss|postcss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      }
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: { safari10: true }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash:8].css',
      chunkFilename: '[id].css'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false }
    })
  ]
});

export default prodConfig;
import * as path from 'path';
import * as webpack from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import * as htmlWebpackPlugin from 'html-webpack-plugin';
import * as ManifestPlugin from 'webpack-manifest-plugin';
import * as LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import config from '../config/config';

const getPluginPath = (): string => {
  return process.env.NODE_ENV == 'development' ? config.dev.publicPath : config.prod.publicPath;
};

const BaseConfig: webpack.Configuration = {
  entry: path.resolve(config.rootDir, 'src/index.ts'),
  output: {
    path: path.resolve(config.rootDir, 'dist/'),
    filename: '[name].bundle.[hash].js',
    publicPath: getPluginPath(),
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      exclude: /node_modules/,
    }, {
      test: /\.ts$/,
      use: [
        { loader: 'babel-loader' },
        { loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/] } },
      ],
      exclude: /node_modules/,
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 20000,
            name: 'image/[name]-[hash:8].[ext]'
          }
        }
      ],
      exclude: /node_modules/,
    }, {
      test: /\.(woff|woff2s|eot|ttf|otf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'fonts/[name]-[hash:8].[ext]'
          }
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@src': path.resolve(config.rootDir, 'src/'),
    }
  },
  plugins: [
    new ManifestPlugin({ fileName: path.resolve(__dirname, './manifest.json') }),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(config.rootDir, 'public/index.html'),
      inject: true,
      minify: {
        html5: true,
        minifyCSS: true,
        minifyJS: true
      }
    }),
    new VueLoaderPlugin(),
    new LodashModuleReplacementPlugin()
  ]
};

export default BaseConfig;
const developmentEnvSetting = require('./src/lib/client/static/settings/development.json');
const productionEnvSetting = require('./src/lib/client/static/settings/production.json');
const packageJson = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const cssnano = require('cssnano');
const path = require('path');

const isDevelopmentEnv = process.env.NODE_ENV === 'development';
const publicPath = isDevelopmentEnv ? '/' : '/';
const BASE_URL_LOADER = 'url-loader?prefix=fonts/&name=[name].[hash:8].[ext]&limit=10000';

module.exports = {
  devtool: isDevelopmentEnv ? 'eval' : 'cheap-module-source-map',
  stats: true,
  entry: ['babel-polyfill', './src/lib/client/app/'],
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: isDevelopmentEnv ? '[name].js' : '[name].[chunkhash].js',
    publicPath,
  },
  resolve: {
    alias: {
      actioncreators: path.resolve(__dirname, 'src/lib/client/app/actioncreators'),
      actiontypes: path.resolve(__dirname, 'src/lib/client/app/actiontypes'),
      components: path.resolve(__dirname, 'src/lib/client/app/components'),
      containers: path.resolve(__dirname, 'src/lib/client/app/containers'),
      utils: path.resolve(__dirname, 'src/lib/client/app/utils'),
      constants: path.resolve(__dirname, 'src/lib/client/app/utils/constants'),
      reducers: path.resolve(__dirname, 'src/lib/client/app/reducers'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src/')],
        use: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?sourceMap&-minimize&-autoprefixer!postcss-loader!sass-loader',
        }),
      },
      {
        test: /\.json$/,
        include: [path.resolve(__dirname)],
        use: 'json-loader',
      },
      {
        test: /\.woff(\?.*)?$/,
        use: `${BASE_URL_LOADER}&mimetype=application/font-woff`,
      },
      {
        test: /\.woff2(\?.*)?$/,
        use: `${BASE_URL_LOADER}&mimetype=application/font-woff2`,
      },
      {
        test: /\.otf(\?.*)?$/,
        use:
          'file-loader?prefix=fonts/&name=[name].[hash:8].[ext]&limit=10000&mimetype=font/opentype',
      },
      {
        test: /\.ttf(\?.*)?$/,
        use: `${BASE_URL_LOADER}&mimetype=application/octet-stream`,
      },
      {
        test: /\.eot(\?.*)?$/,
        use: 'file-loader?prefix=fonts/&name=[name].[hash:8].[ext]',
      },
      {
        test: /\.svg(\?.*)?$/,
        use: `${BASE_URL_LOADER}&mimetype=image/svg+xml`,
      },
      {
        test: /\.gif(\?.*)?$/,
        use: 'file-loader?name=[name].[hash:8].[ext]',
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192',
      },
    ],
  },
  devServer: {
    port: 8088,
    disableHostCheck: true,
    historyApiFallback: {
      index: '/',
    },
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          cssnano({
            autoprefixer: {
              add: true,
              remove: true,
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8
              ],
            },
            discardComments: {
              removeAll: true,
            },
            discardUnused: false,
            mergeIdents: false,
            reduceIdents: false,
            safe: true,
            sourcemap: true,
          }),
        ],
      },
    }),
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, './src/lib/client/static/assets/images/', 'favicon.ico'),
      template: path.resolve(__dirname, './src/lib/client/static/templates/', 'index.html'),
      chunksSortMode: 'dependency',
      inject: true,
      GLOBAL_SETTINGS: JSON.stringify(
        isDevelopmentEnv ? developmentEnvSetting : productionEnvSetting
      ),
    }),
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, './src/lib/client/static/', 'settings/'),
        from: '*.json',
        to: path.resolve(__dirname, './build/', 'settings/'),
      },
      {
        context: path.resolve(__dirname, './src/lib/client/static/assets/', 'js/'),
        from: '*',
        to: path.resolve(__dirname, './build/', 'js/'),
      },
      {
        context: path.resolve(__dirname, './src/lib/client/static/assets/', 'images/'),
        from: '*',
        to: path.resolve(__dirname, './build/', 'images/'),
      },
      {
        context: path.resolve(__dirname, './src/lib/client/static/assets/', 'sourcemaps/'),
        from: '*.map',
        to: path.resolve(__dirname, 'build/'),
      },
    ]),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: false,
      allChunks: true,
    }),
    /*
     * Always exposes NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
     * inside your code for any environment checks; UglifyJS will automatically
     * drop any unreachable code.
     */
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        VERSION: JSON.stringify(packageJson.version),
        VERBOSE: process.env.VERBOSE,
      },
    }),
  ],
};

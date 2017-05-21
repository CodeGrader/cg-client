const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { DefinePlugin, HotModuleReplacementPlugin, optimize } = webpack;
const { OccurrenceOrderPlugin, DedupePlugin, UglifyJsPlugin, LimitChunkCountPlugin, MinChunkSizePlugin } = optimize;

const NODE_ENV = JSON.stringify(((env='development') => {
  if (env !== 'development') {
    return 'production';
  }
  return 'development';
})(process.env.NODE_ENV));

const config = {
  entry: {
    script: [`${__dirname}/app/main.js`],
  },
  output: {
    path: `${__dirname}/static/bundle/`,
    filename: '[name].js',
    publicPath: '/bundle/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /(node_modules|bower_components)/,
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
      exclude: /(node_modules|bower_components)/,
    }],
  },
  postcss: () => [precss, autoprefixer],
  plugins: [
    new DefinePlugin({ 'process.env': { NODE_ENV } }),
    new ExtractTextPlugin('style.css'),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'vendor.js',
    //   minChunks: ({ resource }) => (
    //     resource &&
    //     resource.indexOf('node_modules') >= 0 &&
    //     resource.match(/\.js$/)
    //   ),
    // }),
  ],
};

if (process.argv.includes('--analyze')) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

if (NODE_ENV !== '"development"') {
  config.plugins.push(
    new OccurrenceOrderPlugin(),
    new DedupePlugin({ IN_BROWSER: true }),
    new UglifyJsPlugin({
      minimize: true,
      compress: { warnings: false, drop_console: true },
      output: { comments: false },
    }),
    new LimitChunkCountPlugin({ maxChunks: 15 }),
    new MinChunkSizePlugin({ minChunkSize: 10000 }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessorOptions: { discardComments: { removeAll: true } },
    }));
} else {
  config.debug = true;
  config.devtool = 'eval-cheap-module-source-map';
  config.entry.script.unshift('webpack-hot-middleware/client');
  config.entry.eyecatch = ['webpack-hot-middleware/client', `${__dirname}/app/eyecatch.js`];
  config.plugins.push(new HotModuleReplacementPlugin());
}

module.exports = config;

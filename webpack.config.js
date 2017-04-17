const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const NODE_ENV = JSON.stringify(((env) => {
  if (env && env !== 'development') {
    return 'production';
  }
  return 'development';
})(process.env.NODE_ENV));

const config = {
  entry: {
    main: [`${__dirname}/app/main.js`],
  },
  output: {
    path: `${__dirname}/static/bundle/`,
    filename: 'script.js',
    publicPath: '/bundle/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: ['react', 'es2015', 'stage-3'],
        plugins: [
          'transform-decorators-legacy',
          'transform-react-inline-elements',
          'transform-react-constant-elements',
        ],
      },
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass'),
      exclude: /(node_modules|bower_components)/,
    }],
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV } }),
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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin({ IN_BROWSER: true }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: { warnings: false, drop_console: true },
      output: { comments: false },
    }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessorOptions: { discardComments: { removeAll: true } },
    }));
} else {
  config.debug = true;
  config.devtool = 'eval-cheap-module-source-map';
  config.entry.main.unshift('webpack-hot-middleware/client');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;

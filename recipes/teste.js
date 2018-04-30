const path = require('path');
// https://github.com/webpack/memory-fs
module.exports.recipe = {
  name: 'test-app',
  version: '0.0.1',
  description: 'Sample App',
  scope: 'development',
  dependencies: {
  }
};

module.exports.webpackConfig = function (argv) {
  return {
    entry: {
      'test-app': './test-app.js'
    },

    output: {
      path: path.resolve('./dist'),
      publicPath: '/',
      filename: 'assets/js/[name].[hash:8].js',
      chunkFilename: 'assets/js/[id].[hash:8].chunk.js'
    },
  }
};
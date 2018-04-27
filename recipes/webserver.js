const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const command = function (cli) {
  cli.command('devserver [port]', 'start the dev server', (yargs) => {
    yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000
      })
  }, (argv) => {
    if (argv.verbose) console.info(`start server on :${argv.port}`);
  });
};

module.exports.recipe = {
  name: 'devserver',
  version: '0.0.1',
  description: 'Core bundlr recipe',
  dependencies: {
  },
  command
};

module.exports.webpackConfig = {};

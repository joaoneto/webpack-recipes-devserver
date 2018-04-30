// const path = require('path');

const command = {
  command: 'devserver [proxy]',
  describe: 'start the dev server',
  builder: {
    port: {
      describe: 'port to bind on'
    }
  },
  handler: (argv) => {
    console.log('aquiii');
    if (argv.verbose) console.info(`start server on :${argv.port}`);
  }
};

module.exports.recipe = {
  name: 'devserver',
  version: '0.0.1',
  description: 'Webpack Dev Server',
  scope: 'development',
  dependencies: {
  },
  command
};

module.exports.webpackConfig = {};

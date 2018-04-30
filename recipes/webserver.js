const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server/lib/Server');

const command = {
  command: 'devserver [port]',
  describe: 'starts the webpack dev server',
  builder: {
    port: {
      describe: 'port to bind on',
      default: 8080
    },
    inline: {
      describe: 'inline',
      default: true
    },
    'content-base': {
      describe: 'content base',
      default: './app'
    },
  },
  handler: (argv) => {
    if (argv.verbose) console.info(`start server on localhost:${argv.port}`);
  }
};

module.exports.recipe = {
  name: 'devserver',
  version: '0.0.1',
  description: 'Webpack Dev Server',
  scope: 'development',
  dependencies: {
  },
  command,
  hooks: {
    before: () => {},
    after: (webpackConfig) => {
      const compiler = webpack(webpackConfig);
      const devServerOptions = webpackConfig.devServer;
      const server = new WebpackDevServer(compiler, devServerOptions);
      server.listen(devServerOptions.port, '127.0.0.1', () => {
        console.log(`Starting server on http://localhost:${devServerOptions.port}`);
      });
    }
  }
};

module.exports.webpackConfig = function (argv) {
  return {
    mode: 'development',

    devServer: {
      historyApiFallback: true,
      stats: 'minimal',
      port: argv.port,
      inline: argv.inline,
      contentBase: argv['content-base'],
      watchOptions: { aggregateTimeout: 300, poll: 1000 },
    },
  }
};

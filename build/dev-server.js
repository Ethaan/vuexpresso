import opn from 'opn';
import cors from 'cors';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import devMiddleware from 'webpack-dev-middleware';
import proxyMiddleware from 'http-proxy-middleware';
import config from '../config';
import webpackDevConfig from './webpack.dev.conf';
import webpackPlayConfig from './webpack.play.conf';

const webpackConfig = process.env.VUE_PLAY ? webpackPlayConfig : webpackDevConfig;

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || config.dev.port;

const autoOpenBrowser = config.dev.autoOpenBrowser;
const proxyTable = config.dev.proxyTable;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(config.graphql.graphqlPath, bodyParser.json(), config.graphql.serverConfig);
app.use(config.graphql.graphiqlPath, config.graphql.graphiqlConfig);

const compiler = webpack(webpackConfig);

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
});

const devMiddleWare = devMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
});

compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

// proxy api requests
Object.keys(proxyTable).forEach((context) => {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options };
  }
  app.use(proxyMiddleware(options.filter || context, options));
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleWare);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
const staticPath = path.posix.join(
  config.dev.assetsPublicPath,
  config.dev.assetsSubDirectory,
);

app.use(staticPath, express.static('./static'));

const uri = `http://localhost:${port}`;

let resolveCallback = null;
const readyPromise = new Promise((resolve) => {
  resolveCallback = resolve;
});

devMiddleWare.waitUntilValid(() => {
  /* eslint-disable no-console */
  console.log(`Server running at ${uri} \n`);
  // when env is testing, don't need open it
  if (autoOpenBrowser && env !== 'testing') {
    opn(uri);
  }
  resolveCallback();
});


// Create a MonboDB connection pool and start the Node.js app
MongoClient.connect(config.database.mongoURL, { promiseLibrary: Promise })
  .catch(err => console.error(err.stack))
  .then((db) => {
    app.locals.db = db; // See http://expressjs.com/en/4x/api.html#app.locals
    app.listen(port);

    // GraphQL Server
    const graphqlServer = createServer(app);
    graphqlServer.listen(config.graphql.port, () => {
      /* eslint-disable no-console */
      console.log(`API Server is now running on http://localhost:${config.graphql.port}/graphql`);
    });
    config.graphql.initSubscriptionServer({
      server: graphqlServer,
      path: config.graphql.subscriptionsPath,
    });
  });

export default {
  ready: readyPromise,
};

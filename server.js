/* eslint-disable import/no-extraneous-dependencies, global-require */
const express = require('express');
const { each: parallel } = require('async');
const request = require('request-promise');
const fs = require('fs');
const config = require('./utils/Configuration');

const NODE_ENV = config.get('NODE_ENV') || 'development';
const PORT = config.get('PORT') || 3000;
const CACHE_CONTROL = {};

const app = express();
const parser = {
  body: require('body-parser'),
  cookie: require('cookie-parser'),
};
const middlewares = [];

if (NODE_ENV !== 'development') {
  app.set('view cache', true);
  middlewares.push(require('compression')());
  CACHE_CONTROL.maxAge = 2592000000;
} else {
  const webpack = {
    call: require('webpack'),
    config: require('./webpack.config'),
    middleware: {
      dev: require('webpack-dev-middleware'),
      hot: require('webpack-hot-middleware'),
    },
  };
  const compiler = webpack.call(webpack.config);
  middlewares.push(webpack.middleware.dev(compiler, {
    noInfo: true,
    publicPath: webpack.config.output.publicPath,
  }));
  middlewares.push(webpack.middleware.hot(compiler));
}

middlewares.push(express.static(`${__dirname}/static`, CACHE_CONTROL));
middlewares.push(parser.cookie());
middlewares.push(parser.body.urlencoded({ extended: false }));
middlewares.push(parser.body.json());

app.use((req, res, next) => {
  parallel(middlewares, (middleware, callback) => {
    middleware(req, res, callback);
  }, next);
});

app.use('/api/*', async (req, res) => {
  const { method, body, params } = req;

  if (config.get('USE_STUB')) {
    const filename = `${__dirname}/utils/stubs/${Object.values(params).join('/')}/${method.toUpperCase()}.json`;
    fs.readFile(filename, (error, data) => {
      const result = {};
      try {
        if (error) {
          result.status = 404;
          result.data = { error: 'No Stub Found' };
        } else {
          result.status = 200;
          result.data = JSON.parse(data);
        }
      } catch (e) {
        result.status = 500;
        result.data = { error: 'Invalid Stub Format' };
      } finally {
        res.status(result.status).json(result.data);
      }
    });
  } else {
    const uri = `${config.get('API') || 'http://localhost:8080'}/${Object.values(params).join('/')}`;
    const options = { method, uri, body, json: true };
    try {
      const data = await request(options);
      res.json(data);
    } catch (error) {
      res.status(500).send({ error });
    }
  }
});

if (NODE_ENV === 'development') {
  app.get('/_eyecatch', (req, res) => {
    res.sendFile(`${__dirname}/static/eyecatch.html`);
  });
}

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/static/index.html`);
});

app.listen(PORT, '0.0.0.0', () => {
  /* eslint-disable no-console */
  console.log(`${NODE_ENV} mode`);
  console.log(`Application started at ${PORT}`);
  if (NODE_ENV === 'development') {
    console.log('\nBuilding app with webpack ...');
  }
});

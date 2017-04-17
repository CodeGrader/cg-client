/* eslint-disable import/no-extraneous-dependencies, global-require */
const express = require('express');
const { each: parallel } = require('async');
const fetch = require('node-fetch');
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
  const { method, body, originalUrl, params } = req;

  if (config.get('USE_STUB')) {
    const filename = `./utils/stubs/${params[0]}/${method}.json`;
    fs.readFile(filename, (error, data) => {
      if (error) {
        res.status(404).send({ error: 'No Stub Found' });
        return;
      }
      try {
        res.status(200).send(JSON.parse(data));
      } catch (err) {
        res.status(500).send({ error: 'Invalid Stub Format' });
      }
    });
  } else {
    try {
      const url = `${config.get('API') || 'http://localhost:8080/'}${originalUrl.slice(4)}`;
      const response = await fetch(url, { method, body });
      const data = await response.json();
      res.status(response.status).send(data);
    } catch (error) {
      res.status(500).send({ error });
    }
  }
});

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

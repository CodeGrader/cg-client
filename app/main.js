import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';

import Layout from './components/Layout';
import HTTPError from './components/HTTPError';

import './styles/app.scss';

// react router configuration
const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout} />
      <Route path='*' component={() => (<HTTPError code="404"/>)} />
    </Router>
  </Provider>
);

render(<Root/>, document.getElementById('root'));

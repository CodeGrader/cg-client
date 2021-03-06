import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import Switch from './components/Switch';
import SearchEngine from './components/SearchEngine'; // eslint-disable-line import/no-named-as-default

import './styles/app.scss';

const Root = () => (
  <div>
    <Provider store={store}>
      <SearchEngine endpoint='/companies' />
    </Provider>
    <div style={{ marginLeft: 35 }}>
      <h1>Switches</h1>

      <h5>default (checked=false, size=default font-size)</h5>
      <Switch className={true}/>

      <h5>checked</h5>
      <Switch checked />

      <h5>defaultChecked = true</h5>
      <Switch defaultChecked={true} />

      <h5>defaultChecked = false</h5>
      <Switch defaultChecked={false} />

      <h5>disabled</h5>
      <Switch disabled />

      <h5>manual size (size = 40)</h5>
      <Switch size={40} />

      <h5>font-size: 60px</h5>
      <Switch style={{ fontSize: '60px' }} />

      <h5>font-size: 80px</h5>
      <Switch style={{ fontSize: '80px' }} />

      <h5>font-size: 100px</h5>
      <Switch style={{ fontSize: '100px' }} />
    </div>
  </div>
);

render(<Root/>, document.getElementById('root'));

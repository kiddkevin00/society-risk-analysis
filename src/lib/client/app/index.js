import createStore from './store/';
import App from './App';
import Promise from 'promise-polyfill';
import { render } from 'react-dom';
import React from 'react';

import '../static/assets/styles/index.scss';

if (!window.Promise) {
  window.Promise = Promise;
}

const initialState = window.INITIAL_STATE;
const store = createStore(initialState);

render(<App store={store} />, window.document.getElementById('sra-react-root'));

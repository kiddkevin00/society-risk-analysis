import createStore from './store/';
import Routes from './Routes';
import Promise from 'promise-polyfill';
import { render } from 'react-dom';
import React from 'react';

import '../static/assets/styles/index.scss';

if (!window.Promise) {
  window.Promise = Promise;
}

const initialState = window.INITIAL_STATE;
const store = createStore(initialState);

render(<Routes store={store} />, window.document.getElementById('sra-react-root'));

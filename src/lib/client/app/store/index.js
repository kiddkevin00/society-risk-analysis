import rootReducer from '../reducers/';
import firebaseClient from '../utils/firebaseClient';
import { reactReduxFirebase } from 'react-redux-firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

const config = { userProfile: 'users' };

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware),
      reactReduxFirebase(firebaseClient, config),
      typeof process === 'object' && process.env.VERBOSE
        ? applyMiddleware(loggerMiddleware)
        : f => f,
      typeof process === 'object' &&
      process.env.NODE_ENV !== 'test' &&
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );

  return store;
}

export { configureStore as default };

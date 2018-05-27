import rootReducer from '../reducers/';
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware),
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

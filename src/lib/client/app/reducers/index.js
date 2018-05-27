import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  test: () => ({ mock: 'value' }),
});

export { rootReducer as default };

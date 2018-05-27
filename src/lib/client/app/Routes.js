import { Home } from './containers/';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

const Routes = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/home" component={Home} />

        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  </Provider>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export { Routes as default };

import { Layout, Home, About, News, Events, Contact, Register } from './containers/';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

const App = ({ store }) => (
  <Provider store={store}>
    <Layout>
      <Router>
        <Switch>
          <Route exact={true} path="/home" component={Home} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/news" component={News} />
          <Route exact={true} path="/events" component={Events} />
          <Route exact={true} path="/contact" component={Contact} />

          <Route path="/register" component={Register} />

          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </Layout>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export { App as default };

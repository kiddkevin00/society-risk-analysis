import { Login, Signup } from 'containers';
import { Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Registration extends Component {
  static propTypes = {
    match: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div id="registration-template">
        <div className="inner-bg">
          <Switch>
            <Route exact={true} path={`${this.props.match.path}/login`} component={Login} />
            <Route exact={true} path={`${this.props.match.path}/signup`} component={Signup} />

            <Redirect from={`${this.props.match.path}`} to={`${this.props.match.path}/login`} />
          </Switch>
        </div>
      </div>
    );
  }
}

export { Registration as default };

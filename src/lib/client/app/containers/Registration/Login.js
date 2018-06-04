import { FormInput } from '../../components/';
import cx from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  render() {
    const alertBoxClasses = cx('alert', 'alert-danger', 'alert-dismissible', {
      collapse: !this.props.isErrorVisible,
    });
    let loader;

    if (this.props.isLoading) {
      loader = <div className="slow-loader" />;
    } else {
      loader = null;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7 text">
            <h1>Claim Your Desserts Today</h1>
            <div className="description">
              <p>
                Log in to change your account settings, view, email, or print your vouchers from
                your purchased e-package, or get your referral code to share with your friends. Not
                a paying subscriber yet? If you already have an account, log in to start your
                subscription today!
              </p>
            </div>
            <div className="top-big-link">
              <ol>
                <li>Learn more about this month’s featured vendors.</li>
                <li>View your vouchers and claim your desserts.</li>
                <li>Refer and earn credits.</li>
              </ol>
            </div>
          </div>
          <div className="col-lg-offset-1 col-lg-4 col-sm-5">
            <div className="form-top">
              <div className="form-top-left">
                <h3>Log in</h3>
                <p>Fill in the form below to access your account:</p>
              </div>
              <div className="form-top-right">
                <img src="/images/logo_sugarpost.png" alt="" />
              </div>
            </div>
            <div className="form-bottom">
              <form onSubmit={this._onSubmit}>
                {loader}
                <div className={alertBoxClasses} role="alert">
                  <a className="close" data-dismiss="alert">
                    ×
                  </a>
                  <i className="fa fa-exclamation-triangle" />
                  &nbsp; {this.props.errorMsg}
                </div>
                <FormInput
                  text="Email Address"
                  ref={formInputObj => {
                    this.email = formInputObj;
                  }}
                  validate={FormInput.validateEmailField}
                  value=""
                  onChange={() => {}}
                  errorMessage="Email is invalid"
                  emptyMessage="Email can't be empty"
                />
                <FormInput
                  text="Password"
                  type="password"
                  ref={formInputObj => {
                    this.password = formInputObj;
                  }}
                  value=""
                  onChange={() => {}}
                  errorMessage="Password is invalid"
                  emptyMessage="Password can't be empty"
                />
                <button className="btn btn-block" type="submit">
                  Log In
                </button>
              </form>

              <br />
              <a href="/register/forgot-password" className="center-block text-center">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Login as default };

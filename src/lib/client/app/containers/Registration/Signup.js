import { FormInput } from '../../components/';
import cx from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Signup extends Component {
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
            <h1>Adventure Awaits You</h1>
            <div className="description">
              <p>
                For only $12.50 a month, you will receive e-packages curated by the insight of
                influential food bloggers and dessert connoisseurs! Within your e-package, you will
                find a little background on each featured dessert vendor and your vouchers which can
                claim in-store desserts or Sugarpost exclusives.
              </p>
            </div>
            <div className="top-big-link">
              <ol>
                <li>Sign up to the right and become a paid subscriber.</li>
                <li>Receive two vouchers during the first day of every month.</li>
                <li>Visit the dessert shops.</li>
                <li>Redeem desserts and enjoy!</li>
              </ol>
            </div>
          </div>
          <div className="col-lg-offset-1 col-lg-4 col-sm-5">
            <div className="form-top">
              <div className="form-top-left">
                <h3>Sign up now</h3>
                <p>Fill in the form below to get started:</p>
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
                  text="Full Name"
                  ref={formInputObj => {
                    this.fullName = formInputObj;
                  }}
                  value=""
                  onChange={() => {}}
                  errorMessage="Full name is invalid"
                  emptyMessage="Full name can't be empty"
                />
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
                  useValidator={true}
                  minCharacters={8}
                  requireCapitals={1}
                  requireNumbers={1}
                  forbiddenWords={['password', 'user', 'username']}
                  emptyMessage={
                    window.innerWidth > 870
                      ? 'Password is invalid'
                      : '8+ chars, 1+ uppers, 1+ numbers'
                  }
                />
                <FormInput
                  text="Confirm Password"
                  type="password"
                  ref={formInputObj => {
                    this.confirmPassword = formInputObj;
                  }}
                  validate={this.isConfirmPasswordMatched}
                  value=""
                  onChange={() => {}}
                  emptyMessage="Please confirm your password"
                  errorMessage="Passwords don't match"
                />
                <button className="btn btn-block" type="submit">
                  Sign Up
                </button>
              </form>

              <div className="row">
                <div className="col-xs-offset-1 col-xs-10">
                  <br />
                  <p className="text-center">
                    By signing up, you agree to our
                    <a href="/terms-of-use">&nbsp;Terms&nbsp;</a>
                    &
                    <a href="/privacy-policy">&nbsp;Privacy Policy&nbsp;</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Signup as default };

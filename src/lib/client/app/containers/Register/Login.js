import actionCreator from '../../actionCreators/register/login'
import { FormInput } from '../../components/';
import cx from 'classnames';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UnconnectedLogin extends Component {
  static propTypes = {
    dispatchResetState: PropTypes.func.isRequired,
    dispatchSetFormField: PropTypes.func.isRequired,
    dispatchLogin: PropTypes.func.isRequired,

    formEmail: PropTypes.string.isRequired,
    formPassword: PropTypes.string.isRequired,
    isLoggingIn: PropTypes.bool.isRequired,
    isErrorVisible: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
  };

  componentWillUnmount() {
    this.props.dispatchResetState();
  }

  onChange(field, value) {
    this.props.dispatchSetFormField(field, value);
  };

  onSubmit = (event) => {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();

    if (this.email.isValid() && this.password.isValid()) {
      const email = this.props.formEmail.trim() && this.props.formEmail.toLowerCase();
      const password = this.props.formPassword.trim();

      this.props.dispatchLogin(email, password);
    } else {
      this.email.isValid();
      this.password.isValid();
    }
  };

  render() {
    const alertBoxClasses = cx('alert', 'alert-danger', 'alert-dismissible', {
      collapse: !this.props.isErrorVisible,
    });
    let loader;

    if (this.props.isLoggingIn) {
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
              <form onSubmit={this.onSubmit}>
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
                  value={this.props.formEmail}
                  onChange={this.onChange.bind(this, 'email')}
                  errorMessage="Email is invalid"
                  emptyMessage="Email can't be empty"
                />
                <FormInput
                  text="Password"
                  type="password"
                  ref={formInputObj => {
                    this.password = formInputObj;
                  }}
                  value={this.props.formPassword}
                  onChange={this.onChange.bind(this, 'password')}
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

function mapStateToProps(state) {
  return {
    formEmail: state.login.form.email.value,
    formPassword: state.login.form.password.value,
    isLoggingIn: state.login.main.isLoggingIn,
    isErrorVisible: state.login.main.error.isVisible,
    errorMsg: state.login.main.error.message,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchResetState() {
      dispatch(actionCreator.resetState());
    },

    dispatchSetFormField(field, value) {
      dispatch(actionCreator.setFormField(field, value));
    },

    dispatchLogin(email, password) {
      dispatch(actionCreator.login(email, password));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedLogin);

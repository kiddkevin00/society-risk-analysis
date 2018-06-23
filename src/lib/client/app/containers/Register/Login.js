import actionCreator from '../../actionCreators/register/login/';
import { FormInput } from '../../components/';
import cx from 'classnames';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UnconnectedLogin extends Component {
  static propTypes = {
    formEmail: PropTypes.string.isRequired,
    formPassword: PropTypes.string.isRequired,
    isLoggingIn: PropTypes.bool.isRequired,
    isErrorVisible: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,

    dispatchResetState: PropTypes.func.isRequired,
    dispatchSetFormField: PropTypes.func.isRequired,
    dispatchLogin: PropTypes.func.isRequired,

    history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  componentWillUnmount() {
    this.props.dispatchResetState();
  }

  onChange(field, value) {
    this.props.dispatchSetFormField(field, value);
  }

  onEmailChange = this.onChange.bind(this, 'email');

  onPasswordChange = this.onChange.bind(this, 'password');

  onSubmit = event => {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();

    if (this.email.isValid() && this.password.isValid()) {
      const email = this.props.formEmail.trim() && this.props.formEmail.trim().toLowerCase();
      const password = this.props.formPassword.trim();

      this.props.dispatchLogin(email, password, this.props.history);
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
            <h1>會員專屬待遇</h1>
            <div className="description">
              <p>
                最專業的團隊，最齊全的資料庫，讓你一手掌握世界動態！
              </p>
            </div>
            <div className="top-big-link">
              <ol>
                <li>提供學界最新消息</li>
                <li>一覽學術會刊</li>
                <li>提供學術交流平台</li>
              </ol>
            </div>
          </div>
          <div className="col-lg-offset-1 col-lg-4 col-sm-5">
            <div className="form-top">
              <div className="form-top-left">
                <h3>會員登入</h3>
                <p>填寫以下表格完成會員登入：</p>
              </div>
              <div className="form-top-right">
                <img src="/images/logo.jpg" alt="" />
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
                  text="電子信箱"
                  ref={formInputObj => {
                    this.email = formInputObj;
                  }}
                  validate={FormInput.validateEmailField}
                  value={this.props.formEmail}
                  onChange={this.onEmailChange}
                  errorMessage="Email is invalid"
                  emptyMessage="Email can't be empty"
                />
                <FormInput
                  text="密碼"
                  type="password"
                  ref={formInputObj => {
                    this.password = formInputObj;
                  }}
                  value={this.props.formPassword}
                  onChange={this.onPasswordChange}
                  errorMessage="Password is invalid"
                  emptyMessage="Password can't be empty"
                />
                <button className="btn btn-block" type="submit">
                  登入
                </button>
              </form>

              <br />
              {/*
              <a href="/register/forgot-password" className="center-block text-center">
                忘記密碼?
              </a>
              */}
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

    dispatchLogin(email, password, history) {
      dispatch(actionCreator.login(email, password, history));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedLogin);

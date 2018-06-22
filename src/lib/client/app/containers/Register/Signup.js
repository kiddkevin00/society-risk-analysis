import actionCreator from '../../actionCreators/register/signup/';
import { FormInput } from '../../components/';
import cx from 'classnames';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UnconnectedSignup extends Component {
  static propTypes = {
    formFullName: PropTypes.string.isRequired,
    formEmail: PropTypes.string.isRequired,
    formPassword: PropTypes.string.isRequired,
    formConfirmPassword: PropTypes.string.isRequired,
    isCreatingAccount: PropTypes.bool.isRequired,
    isErrorVisible: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,

    dispatchResetState: PropTypes.func.isRequired,
    dispatchSetFormField: PropTypes.func.isRequired,
    dispatchCreateAccount: PropTypes.func.isRequired,

    history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  componentWillUnmount() {
    this.props.dispatchResetState();
  }

  onChange(field, value) {
    this.props.dispatchSetFormField(field, value);
  }

  onFullNameChange = this.onChange.bind(this, 'fullName');

  onEmailChange = this.onChange.bind(this, 'email');

  onPasswordChange = this.onChange.bind(this, 'password');

  onConfirmPasswordChange = this.onChange.bind(this, 'confirmPassword');

  onSubmit = event => {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();

    if (this.fullName.isValid() && this.email.isValid() && this.password.isValid() && this.confirmPassword.isValid()) {
      const fullName = this.props.formFullName.trim();
      const email = this.props.formEmail.trim() && this.props.formEmail.trim().toLowerCase();
      const password = this.props.formPassword.trim();

      this.props.dispatchCreateAccount(fullName, email, password, this.props.history);
    } else {
      this.fullName.isValid();
      this.email.isValid();
      this.password.isValid();
      this.confirmPassword.isValid();
    }
  };

  isConfirmPasswordMatched = inputText => inputText === this.props.formPassword;

  render() {
    const alertBoxClasses = cx('alert', 'alert-danger', 'alert-dismissible', {
      collapse: !this.props.isErrorVisible,
    });
    let loader;

    if (this.props.isCreatingAccount) {
      loader = <div className="slow-loader" />;
    } else {
      loader = null;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7 text">
            <h1>享有會員專屬待遇</h1>
            <div className="description">
              <p>
                全球最專業的團隊，最齊全的資料庫，讓你一手掌握世界動態！
              </p>
            </div>
            <div className="top-big-link">
              <ol>
                <li>一覽學術會刊</li>
                <li>提供學術交流平台</li>
                <li>學界最新消息盡在指尖</li>
              </ol>
            </div>
          </div>
          <div className="col-lg-offset-1 col-lg-4 col-sm-5">
            <div className="form-top">
              <div className="form-top-left">
                <h3>加入會員</h3>
                <p>填寫以下表格完成申請程序</p>
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
                  text="團體或個人全名"
                  ref={formInputObj => {
                    this.fullName = formInputObj;
                  }}
                  value={this.props.formFullName}
                  onChange={this.onFullNameChange}
                  errorMessage="Full name is invalid"
                  emptyMessage="Full name can't be empty"
                />
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
                  text="確認密碼"
                  type="password"
                  ref={formInputObj => {
                    this.confirmPassword = formInputObj;
                  }}
                  validate={this.isConfirmPasswordMatched}
                  value={this.props.formConfirmPassword}
                  onChange={this.onConfirmPasswordChange}
                  emptyMessage="Please confirm your password"
                  errorMessage="Passwords don't match"
                />
                <button className="btn btn-block" type="submit">
                  立即加入
                </button>
              </form>

              <div className="row">
                <div className="col-xs-offset-1 col-xs-10">
                  <br />
                  <p className="text-center">
                    點擊注册，即表示你同意接受我們的
                    <a href="/terms-of-use">&nbsp;條款&nbsp;</a>
                    和
                    <a href="/privacy-policy">&nbsp;數據使用政策&nbsp;</a>
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

function mapStateToProps(state) {
  return {
    formFullName: state.signup.form.fullName.value,
    formEmail: state.signup.form.email.value,
    formPassword: state.signup.form.password.value,
    formConfirmPassword: state.signup.form.confirmPassword.value,
    isCreatingAccount: state.signup.main.isCreatingAccount,
    isErrorVisible: state.signup.main.error.isVisible,
    errorMsg: state.signup.main.error.message,
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

    dispatchCreateAccount(fullName, email, password) {
      dispatch(actionCreator.createAccount(fullName, email, password));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedSignup);

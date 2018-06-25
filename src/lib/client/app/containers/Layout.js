import actionCreator from '../actionCreators/me/';
import { FormInput } from '../components/';
import cx from 'classnames';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UnconnectedLayout extends Component {
  static propTypes = {
    formEmail: PropTypes.string.isRequired,

    dispatchResetState: PropTypes.func.isRequired,
    dispatchSetFormField: PropTypes.func.isRequired,
    dispatchSubscribeToMailList: PropTypes.func.isRequired,

    children: PropTypes.node.isRequired,
  };

  componentWillUnmount() {
    this.props.dispatchResetState();
  }

  onChange(field, value) {
    this.props.dispatchSetFormField(field, value);
  }

  onEmailChange = this.onChange.bind(this, 'email');

  onSubmit = event => {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();

    if (this.email.isValid()) {
      const email = this.props.formEmail.trim() && this.props.formEmail.trim().toLowerCase();

      this.props.dispatchSubscribeToMailList(email);
    } else {
      this.email.isValid();
    }
  };

  render() {
    return (
      <section>
        <div className="colorlib-loader" />

        <div id="page">
          <nav className="colorlib-nav">
            <div className="upper-menu">
              <div className="container">
                <div className="row">
                  <div className="col-xs-6">
                    <p>Welcome to Taiwan Society for Risk Analysis</p>
                  </div>
                  <div className="col-xs-4 col-xs-push-2 text-right">
                    {/*
                    <p>
                      <ul className="colorlib-social-icons">
                        <li>
                          <a href="#">
                            <i className="icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-dribbble" />
                          </a>
                        </li>
                      </ul>
                    </p>
                    */}
                    <p className="btn-apply">
                      <a href="/register/signup">加入會員</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-menu">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div id="colorlib-logo">
                      <a href="/home">
                        <img style={{ width: '36px', height: '36px' }} src="/images/logo.jpg" alt="" />
                        &nbsp; 台灣風險分析學會
                      </a>
                    </div>
                  </div>
                  <div className="col-md-8 text-right menu-1">
                    <ul>
                      <li className={cx({ active: window.location.pathname === '/home' })}>
                        <a href="/home">首頁</a>
                      </li>
                      <li
                        className={cx(
                          { active: window.location.pathname === '/about' },
                          'has-dropdown'
                        )}
                      >
                        <a href="/about">學會介紹</a>
                        <ul className="dropdown">
                          <li className={cx({ active: window.location.pathname === '/about' })}>
                            <a href="/about">關於本會</a>
                          </li>
                          <li className={cx({ active: window.location.pathname === '/regulation' })}>
                            <a href="https://sra-taiwan.firebaseapp.com/Regulation.html">學會章程</a>
                          </li>
                          <li className={cx({ active: window.location.pathname === '/cadres' })}>
                            <a href="https://sra-taiwan.firebaseapp.com/Cadres.html">歷屆幹部</a>
                          </li>
                        </ul>
                      </li>
                      <li className={cx({ active: window.location.pathname === '/news' })}>
                        <a href="/news">最新消息</a>
                      </li>
                      <li className={cx({ active: window.location.pathname === '/magazines' })}>
                        <a href="/magazines">學會會刊</a>
                      </li>
                      <li className={cx({ active: window.location.pathname === '/contact' })}>
                        <a href="/contact">聯絡我們</a>
                      </li>
                      <li className="btn-cta">
                        <a href="/register/login">
                          <span>會員登入</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {this.props.children}

          <div
            id="colorlib-subscribe"
            className="subs-img"
            style={{ backgroundImage: 'url(/images/img-bg-6_sra.jpg' }}
            data-stellar-background-ratio="0.5"
          >
            <div className="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                  <h2>追蹤我們</h2>
                  <p>訂閱我們的時事通訊，跟上最新學界動態</p>
                </div>
              </div>
              <div className="row animate-box">
                <div className="col-md-6 col-md-offset-3">
                  <div className="row">
                    <div className="col-md-12">
                      <form onSubmit={this.onSubmit} className="form-inline qbstp-header-subscribe">
                        <div className="col-three-forth">
                          <div className="form-group">
                            <FormInput
                              text=" "
                              ref={formInputObj => {
                                this.email = formInputObj;
                              }}
                              validate={FormInput.validateEmailField}
                              value={this.props.formEmail}
                              onChange={this.onEmailChange}
                              errorMessage="Email is invalid"
                              emptyMessage="Email can't be empty"
                              id="email"
                              className="form-control"
                              placeholder="請輸入電子信箱"
                            />
                          </div>
                        </div>
                        <div className="col-one-third">
                          <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                              立即訂閱
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer id="colorlib-footer">
            <div className="container">
              <div className="row row-pb-md">
                <div className="col-md-3 colorlib-widget">
                  <h4>關於我們</h4>
                  <p>
                    成立於1980年，為一個國際性的學術組織，目的為推動風險分析的發展，並提供從事風險分析工作與研究的專業人事學術交流與經驗分享的場所，並發行具有高度影響指數的學術期刊。
                  </p>
                  <div>
                    <ul className="colorlib-social-icons">
                      <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/NA227k">
                          <i className="icon-twitter" />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/EDZwgL">
                          <i className="icon-facebook" />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/adVvSS">
                          <i className="icon-googleplus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 colorlib-widget">
                  <h4>快速連結</h4>
                  <div>
                    <ul className="colorlib-footer-links">
                      <li>
                        <a href="/about">
                          <i className="icon-check" /> 學會介紹
                        </a>
                      </li>
                      <li>
                        <a href="https://sra-taiwan.firebaseapp.com/Regulation.html">
                          <i className="icon-check" /> 學會章程
                        </a>
                      </li>
                      <li>
                        <a href="https://sra-taiwan.firebaseapp.com/Cadres.html">
                          <i className="icon-check" /> 歷屆幹部
                        </a>
                      </li>
                      <li>
                        <a href="/news">
                          <i className="icon-check" /> 最新消息
                        </a>
                      </li>
                      <li>
                        <a href="/magazines">
                          <i className="icon-check" /> 學會會刊
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          <i className="icon-check" /> 聯絡我們
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3 colorlib-widget">
                  <h4>近期會刊</h4>
                  <div className="f-blog">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://goo.gl/C6Dz6y"
                      className="blog-img"
                      style={{ backgroundImage: 'url(/images/blog-1.jpg' }}
                    />
                    <div className="desc">
                      <h2>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://goo.gl/C6Dz6y"
                        >
                          基於風險的血液安全管理
                        </a>
                      </h2>
                      <p className="admin">
                        <span>2017 第13期</span>
                      </p>
                    </div>
                  </div>
                  <div className="f-blog">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://goo.gl/hjmyqf"
                      className="blog-img"
                      style={{ backgroundImage: 'url(/images/blog-2.jpg' }}
                    />
                    <div className="desc">
                      <h2>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://goo.gl/hjmyqf"
                        >
                          環境物聯網時代下之暴露評估
                        </a>
                      </h2>
                      <p className="admin">
                        <span>2017 第12期</span>
                      </p>
                    </div>
                  </div>
                  <div className="f-blog">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://goo.gl/ng9VKy"
                      className="blog-img"
                      style={{ backgroundImage: 'url(/images/blog-3.jpg' }}
                    />
                    <div className="desc">
                      <h2>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://goo.gl/ng9VKy"
                        >
                          歐洲雞蛋遭受芬普尼污染事件簡介
                        </a>
                      </h2>
                      <p className="admin">
                        <span>2017 第10期</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 colorlib-widget">
                  <h4>聯繫訊息</h4>
                  <ul className="colorlib-footer-links">
                    <li>
                      40402 台中市北區學士路 <br /> 91 號 立夫教學大樓 15 樓
                    </li>
                    <li>
                      <a href="tel://04-22053366#6117">
                        <i className="icon-phone" /> &nbsp;04-2205-3366 #6117
                      </a>
                    </li>
                    <li>
                      <a href="mailto:2012tsra@gmail.com">
                        <i className="icon-envelope" />2012tsra@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="http://srataiwan.com">
                        <i className="icon-location4" /> https://srataiwan.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <div className="gototop js-top">
          <a href="#" className="js-gotop">
            <i className="icon-arrow-up2" />
          </a>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    formEmail: state.me.form.email.value,
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

    dispatchSubscribeToMailList(email) {
      dispatch(actionCreator.subscribeToEmailList(email));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedLayout);

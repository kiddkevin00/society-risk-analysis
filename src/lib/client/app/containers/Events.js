import meActionCreator from '../actionCreators/me/';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UnconnectedEvents extends Component {
  static propTypes = {
    hasCheckedAuth: PropTypes.bool.isRequired,
    isCheckingAuth: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,

    dispatchCheckAuth: PropTypes.func.isRequired,
  };

  componentWillMount() {
    if (!this.props.hasCheckedAuth) {
      this.props.dispatchCheckAuth();
    }
  }

  render() {
    //if (this.props.isCheckingAuth) {
    //  return null; // [TBD] Will have a loading indicator here.
    //} else if (this.props.isAuthenticated) {
      return (
        <section>
          <aside id="colorlib-hero">
            <div className="flexslider">
              <ul className="slides">
                <li style={{ backgroundImage: 'url(/images/img-bg_sra.jpg)' }}>
                  <div className="overlay" />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 col-sm-12 col-md-offset-3 slider-text">
                        <div className="slider-text-inner text-center">
                          <h1>學會會刊</h1>
                          <h2>
                          <span>
                            <a href="/home">首頁</a> | 學會會刊
                          </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          <div className="colorlib-blog colorlib-light-grey">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                  <h2>學會會刊一覽</h2>
                  <p>
                    定期更新與整理相關學術會刊，讓你輕鬆跟上學術最新研究與發展。
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 animate-box">
                  <article className="article-entry">
                    <a
                      href="blog.html"
                      className="blog-img"
                      style={{ backgroundImage: 'url(https://sra-taiwan.firebaseapp.com/journals/coverpics/2017-13.jpg)' }}
                    >
                      <p className="meta">
                        <span className="day">30</span>
                        <span className="month">Sep</span>
                      </p>
                    </a>
                    <div className="desc">
                      <p>
                        2017 第13期
                      </p>
                      <h2>
                        <a href="blog.html">基於風險的血液安全管理</a>
                      </h2>
                      <p className="admin">
                        <span>作者</span> <span>林希偉</span>
                      </p>
                    </div>
                  </article>
                </div>
                <div className="col-md-4 animate-box">
                  <article className="article-entry">
                    <a
                      href="blog.html"
                      className="blog-img"
                      style={{ backgroundImage: 'url(https://sra-taiwan.firebaseapp.com/journals/coverpics/2017-12.jpg)' }}
                    >
                      <p className="meta">
                        <span className="day">26</span>
                        <span className="month">Nov</span>
                      </p>
                    </a>
                    <div className="desc">
                      <p>
                        2017 第12期
                      </p>
                      <h2>
                        <a href="blog.html">環境物聯網時代下之暴露評估</a>
                      </h2>
                      <p className="admin">
                        <span>作者</span> <span>余化龍</span>
                      </p>
                    </div>
                  </article>
                </div>
                <div className="col-md-4 animate-box">
                  <article className="article-entry">
                    <a
                      href="blog.html"
                      className="blog-img"
                      style={{ backgroundImage: 'url(https://sra-taiwan.firebaseapp.com/journals/coverpics/2017-10.jpg)' }}
                    >
                      <p className="meta">
                        <span className="day">14</span>
                        <span className="month">Aug</span>
                      </p>
                    </a>
                    <div className="desc">
                      <p>
                        2017 第10期
                      </p>
                      <h2>
                        <a href="blog.html">歐洲雞蛋遭受芬普尼(Fipronil)污染事件簡介</a>
                      </h2>
                      <p className="admin">
                        <span>作者</span> <span>胡素婉</span>
                      </p>
                    </div>
                  </article>
                </div>
                <div className="col-md-4 animate-box">
                  <article className="article-entry">
                    <a
                      href="blog.html"
                      className="blog-img"
                      style={{ backgroundImage: 'url(https://sra-taiwan.firebaseapp.com/journals/coverpics/2017-8.jpg)' }}
                    >
                      <p className="meta">
                        <span className="day">14</span>
                        <span className="month">Aug</span>
                      </p>
                    </a>
                    <div className="desc">
                      <p>
                        2017 第8期
                      </p>
                      <h2>
                        <a href="blog.html">韌性概念與都市防災之探討</a>
                      </h2>
                      <p className="admin">
                        <span>作者</span> <span>黃泰霖</span>
                      </p>
                    </div>
                  </article>
                </div>
                <div className="col-md-4 animate-box">
                  <article className="article-entry">
                    <a
                      href="blog.html"
                      className="blog-img"
                      style={{ backgroundImage: 'url(https://sra-taiwan.firebaseapp.com/journals/coverpics/2017-7.jpg)' }}
                    >
                      <p className="meta">
                        <span className="day">3</span>
                        <span className="month">Jul</span>
                      </p>
                    </a>
                    <div className="desc">
                      <p>
                        2017 第7期
                      </p>
                      <h2>
                        <a href="blog.html">歐洲食品安全管理局(EFSA)科學評估指引強調不確定性的研究</a>
                      </h2>
                      <p className="admin">
                        <span>作者</span> <span>鄭尊仁</span>
                      </p>
                    </div>
                  </article>
                </div>
                <div className="col-md-4 animate-box">
                  <article className="article-entry">
                    <a
                      href="blog.html"
                      className="blog-img"
                      style={{ backgroundImage: 'url(https://sra-taiwan.firebaseapp.com/journals/coverpics/2017-5.jpg)' }}
                    >
                      <p className="meta">
                        <span className="day">23</span>
                        <span className="month">Apr</span>
                      </p>
                    </a>
                    <div className="desc">
                      <p>
                        2017 第5期
                      </p>
                      <h2>
                        <a href="blog.html">整合型機率架構下的劑量反應關係在風險評估的應用簡介</a>
                      </h2>
                      <p className="admin">
                        <span>作者</span> <span>陳主智</span>
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    //}
    //return null;
  }
}

const mapStateToProps = state => ({
  hasCheckedAuth: state.me.main.hasCheckedAuth,
  isCheckingAuth: state.me.main.isCheckingAuth,
  isAuthenticated: state.me.main.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  dispatchCheckAuth() {
    return dispatch(meActionCreator.checkAuthentication());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedEvents);

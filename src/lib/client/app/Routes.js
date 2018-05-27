import { Home, News, Events } from './containers/';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

const Routes = ({ store }) => (
  <Provider store={store}>
    <section>
      <div className="colorlib-loader" />

      <div id="page">
        <nav className="colorlib-nav" role="navigation">
          <div className="upper-menu">
            <div className="container">
              <div className="row">
                <div className="col-xs-4">
                  <p>Welcome to SRA</p>
                </div>
                <div className="col-xs-6 col-md-push-2 text-right">
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
                    <a href="#">Signup Now</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-menu">
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <div id="colorlib-logo">
                    <a href="index.html">風險分析學會</a>
                  </div>
                </div>
                <div className="col-md-10 text-right menu-1">
                  <ul>
                    <li className="active">
                      <a href="index.html">首頁</a>
                    </li>
                    <li className="has-dropdown">
                      <a href="courses.html">學會介紹</a>
                      <ul className="dropdown">
                        <li>
                          <a href="courses-single.html">關於本會</a>
                        </li>
                        <li>
                          <a href="#">學會章程</a>
                        </li>
                        <li>
                          <a href="#">歷屆幹部</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="news.html">最新消息</a>
                    </li>
                    <li>
                      <a href="event.html">學會會刊</a>
                    </li>
                    <li>
                      <a href="contact.html">聯絡我們</a>
                    </li>
                    <li className="btn-cta">
                      <a href="#">
                        <span>加入會員</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/home" component={Home} />
            <Route exact={true} path="/news" component={News} />
            <Route exact={true} path="/events" component={Events} />

            <Redirect from="/" to="/home" />
          </Switch>
        </BrowserRouter>

        <div
          id="colorlib-subscribe"
          className="subs-img"
          style={{ backgroundImage: 'url(/images/img_bg_2.jpg' }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                <h2>Subscribe Newsletter</h2>
                <p>Subscribe our newsletter and get latest update</p>
              </div>
            </div>
            <div className="row animate-box">
              <div className="col-md-6 col-md-offset-3">
                <div className="row">
                  <div className="col-md-12">
                    <form className="form-inline qbstp-header-subscribe">
                      <div className="col-three-forth">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      <div className="col-one-third">
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary">
                            Subscribe Now
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
                <h4>About Eskwela</h4>
                <p>
                  Far from the countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of the Semantics
                </p>
                <div>
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
                </div>
              </div>
              <div className="col-md-3 colorlib-widget">
                <h4>Quick Links</h4>
                <div>
                  <ul className="colorlib-footer-links">
                    <li>
                      <a href="#">
                        <i className="icon-check" /> About Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-check" /> Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-check" /> Courses
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-check" /> Event
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-check" /> News
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-check" /> Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 colorlib-widget">
                <h4>Recent Post</h4>
                <div className="f-blog">
                  <a
                    href="blog.html"
                    className="blog-img"
                    style={{ backgroundImage: 'url(/images/blog-1.jpg' }}
                  />
                  <div className="desc">
                    <h2>
                      <a href="blog.html">Creating Mobile Apps</a>
                    </h2>
                    <p className="admin">
                      <span>18 April 2018</span>
                    </p>
                  </div>
                </div>
                <div className="f-blog">
                  <a
                    href="blog.html"
                    className="blog-img"
                    style={{ backgroundImage: 'url(/images/blog-2.jpg' }}
                  />
                  <div className="desc">
                    <h2>
                      <a href="blog.html">Creating Mobile Apps</a>
                    </h2>
                    <p className="admin">
                      <span>18 April 2018</span>
                    </p>
                  </div>
                </div>
                <div className="f-blog">
                  <a
                    href="blog.html"
                    className="blog-img"
                    style={{ backgroundImage: 'url(/images/blog-3.jpg' }}
                  />
                  <div className="desc">
                    <h2>
                      <a href="blog.html">Creating Mobile Apps</a>
                    </h2>
                    <p className="admin">
                      <span>18 April 2018</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 colorlib-widget">
                <h4>Contact Info</h4>
                <ul className="colorlib-footer-links">
                  <li>
                    291 South 21th Street, <br /> Suite 721 New York NY 10016
                  </li>
                  <li>
                    <a href="tel://1234567920">
                      <i className="icon-phone" /> + 1235 2355 98
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@yoursite.com">
                      <i className="icon-envelope" /> info@yoursite.com
                    </a>
                  </li>
                  <li>
                    <a href="http://luxehotel.com">
                      <i className="icon-location4" /> yourwebsite.com
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
  </Provider>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export { Routes as default };

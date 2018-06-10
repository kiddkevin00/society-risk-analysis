import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contact extends Component {
  render() {
    return (
      <section>
        <aside id="colorlib-hero">
          <div className="flexslider">
            <ul className="slides">
              <li style={{ backgroundImage: 'url(images/img-bg-2.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-md-offset-3 slider-text">
                      <div className="slider-text-inner text-center">
                        <h1>聯絡我們</h1>
                        <h2>
                          <span>
                            <a href="/home">首頁</a> | 聯絡我們
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

        <div id="colorlib-contact">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 animate-box">
                <h2>聯繫方式</h2>
                <div className="row">
                  <div className="col-md-12">
                    <div className="contact-info-wrap-flex">
                      <div className="con-info">
                        <p>
                          <span>
                            <i className="icon-location-2" />
                          </span>
                          {' '}40402 台中市北區學士路 91 號 立夫教學大樓 15 樓
                        </p>
                      </div>
                      <div className="con-info">
                        <p>
                          <span>
                            <i className="icon-phone3" />
                          </span>
                          <a href="tel://0422053366#6117">
                            {' '}04-2205-3366 #6117 何文照老師辦公室
                          </a>
                        </p>
                      </div>
                      <div className="con-info">
                        <p>
                          <span>
                            <i className="icon-paperplane" />
                          </span>
                          <a href="mailto:info@yoursite.com">{' '}2012tsra@gmail.com</a>
                        </p>
                      </div>
                      <div className="con-info">
                        <p>
                          <span>
                            <i className="icon-globe" />
                          </span>
                          <a href="https://goo.gl/9eXS4d">{' '}https://goo.gl/9eXS4d</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-10 col-md-offset-1 animate-box">
                <h2>留言版</h2>
                <form>
                  <div className="row form-group">
                    <div className="col-md-6">
                      <input
                        type="text"
                        id="fname"
                        className="form-control"
                        placeholder="您的名字"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        id="lname"
                        className="form-control"
                        placeholder="您的姓氏"
                      />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="您的電子郵件"
                      />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <input
                        type="text"
                        id="subject"
                        className="form-control"
                        placeholder="請輸入主旨"
                      />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        className="form-control"
                        placeholder="請輸入內容"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="button" value="馬上留言" className="btn btn-primary" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div id="map" className="colorlib-map" />
      </section>
    );
  }
}

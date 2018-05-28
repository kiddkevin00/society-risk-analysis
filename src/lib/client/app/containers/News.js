import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class News extends Component {
  render() {
    return (
      <section>
        <aside id="colorlib-hero">
          <div className="flexslider">
            <ul className="slides">
              <li style={{ backgroundImage: 'url(images/img_bg_2.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-md-offset-3 slider-text">
                      <div className="slider-text-inner text-center">
                        <h1>最新消息</h1>
                        <h2>
                          <span>
                            <a href="/home">首頁</a> | 最新消息
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

        <div className="colorlib-event">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                <h2>追蹤我們的最新消息</h2>
                <p>
                  我們會即時更新最新消息，讓你輕鬆跟上學界動態。
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box">
                <div className="event-entry">
                  <div className="desc">
                    <p className="meta">
                      <span className="day">2</span>
                      <span className="month">Dec</span>
                    </p>
                    <p className="organizer">
                      <span><a target="_blank" href="http://www.sra.org/2018-annual-meeting">點此查看活動連結</a></span>
                    </p>
                    <h2>
                      <a href="event.html">2018美國紐奧良SRA總會年會 (SRA 2018 Annual Meeting)</a>
                    </h2>
                  </div>
                  <div className="location">
                    <span className="icon">
                      <i className="icon-map" />
                    </span>
                    <p>美國紐奧良 (New Orleans, Louisiana)</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="event-entry">
                  <div className="desc">
                    <p className="meta">
                      <span className="day">17</span>
                      <span className="month">Jan</span>
                    </p>
                    <p className="organizer">
                      <span><a target="_blank" href="https://goo.gl/mrJBLj">點此查看詳細會議議程</a></span>
                    </p>
                    <h2>
                      <a href="event.html">2018台灣風險分析學會年會暨研討會當日資訊</a>
                    </h2>
                  </div>
                  <div className="location">
                    <span className="icon">
                      <i className="icon-map" />
                    </span>
                    <p>國立成功大學 C-hub 創意基地</p>
                  </div>
                </div>
              </div>

            </div>
              {/*
              <div className="col-md-4 animate-box">
                <div className="event-entry">
                  <div className="desc">
                    <p className="meta">
                      <span className="day">19</span>
                      <span className="month">Apr</span>
                    </p>
                    <p className="organizer">
                      <span>Organized by:</span> <span>Noah Henderson</span>
                    </p>
                    <h2>
                      <a href="event.html">Practice Workshop 2018</a>
                    </h2>
                  </div>
                  <div className="location">
                    <span className="icon">
                      <i className="icon-map" />
                    </span>
                    <p>291 South 21th Street, Suite 721 New York NY 10016</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box">
                <div className="event-entry">
                  <div className="desc">
                    <p className="meta">
                      <span className="day">19</span>
                      <span className="month">Apr</span>
                    </p>
                    <p className="organizer">
                      <span>Organized by:</span> <span>Noah Henderson</span>
                    </p>
                    <h2>
                      <a href="event.html">We Held Free Training for Basic Programming</a>
                    </h2>
                  </div>
                  <div className="location">
                    <span className="icon">
                      <i className="icon-map" />
                    </span>
                    <p>291 South 21th Street, Suite 721 New York NY 10016</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="event-entry">
                  <div className="desc">
                    <p className="meta">
                      <span className="day">19</span>
                      <span className="month">Apr</span>
                    </p>
                    <p className="organizer">
                      <span>Organized by:</span> <span>Noah Henderson</span>
                    </p>
                    <h2>
                      <a href="event.html">You're Invited 1st Anniversary of Eskwela</a>
                    </h2>
                  </div>
                  <div className="location">
                    <span className="icon">
                      <i className="icon-map" />
                    </span>
                    <p>291 South 21th Street, Suite 721 New York NY 10016</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="event-entry">
                  <div className="desc">
                    <p className="meta">
                      <span className="day">19</span>
                      <span className="month">Apr</span>
                    </p>
                    <p className="organizer">
                      <span>Organized by:</span> <span>Noah Henderson</span>
                    </p>
                    <h2>
                      <a href="event.html">Practice Workshop 2018</a>
                    </h2>
                  </div>
                  <div className="location">
                    <span className="icon">
                      <i className="icon-map" />
                    </span>
                    <p>291 South 21th Street, Suite 721 New York NY 10016</p>
                  </div>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>
    );
  }
}

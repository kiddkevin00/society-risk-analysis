import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class News extends Component {
  render() {
    return (
      <section>
        <aside id="colorlib-hero">
          <div className="flexslider">
            <ul className="slides">
              <li style={{ backgroundImage: 'url(/images/img_bg_2.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-md-offset-3 slider-text">
                      <div className="slider-text-inner text-center">
                        <h1>Upcoming Events</h1>
                        <h2>
                          <span>
                            <a href="index.html">Home</a> | Events
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
          </div>
        </div>
      </section>
    );
  }
}

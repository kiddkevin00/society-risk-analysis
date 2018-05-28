import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contact extends Component {
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
                        <h1>Contact Us</h1>
                        <h2>
                          <span>
                            <a href="/home">Home</a> | Contact
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
                <h2>Contact Information</h2>
                <div className="row">
                  <div className="col-md-12">
                    <div className="contact-info-wrap-flex">
                      <div className="con-info">
                        <p>
                          <span>
                            <i className="icon-location-2" />
                          </span>{' '}
                          198 West 21th Street, <br /> Suite 721 New York NY 10016
                        </p>
                      </div>
                      <div className="con-info">
                        <p>
                          <span>
                            <i className="icon-phone3" />
                          </span>{' '}
                          <a href="tel://1234567920">+ 1235 2355 98</a>
                        </p>
                      </div>
                      <div className="con-info">
                        <p>
                          <span>
                            <i className="icon-paperplane" />
                          </span>{' '}
                          <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                        </p>
                      </div>
                      <div className="con-info">
                        <p>
                          <span>
                            <i className="icon-globe" />
                          </span>{' '}
                          <a href="#">yourwebsite.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-10 col-md-offset-1 animate-box">
                <h2>Message Us</h2>
                <form action="#">
                  <div className="row form-group">
                    <div className="col-md-6">
                      <input
                        type="text"
                        id="fname"
                        className="form-control"
                        placeholder="Your firstname"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        id="lname"
                        className="form-control"
                        placeholder="Your lastname"
                      />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <input
                        type="text"
                        id="subject"
                        className="form-control"
                        placeholder="Your subject of this message"
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
                        placeholder="Say something about us"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Send Message" className="btn btn-primary" />
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

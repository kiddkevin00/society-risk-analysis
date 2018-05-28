import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class About extends Component {
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
                        <h1>About Us</h1>
                        <h2>
                          <span>
                            <a href="/home">Home</a> | About
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

        <div id="colorlib-about" className="colorlib-light-grey">
          <div className="container">
            <div className="row row-pb-md">
              <div className="col-md-8 col-md-offset-2 row-pb-md animate-box">
                <div
                  className="video colorlib-video"
                  style={{ backgroundImage: 'url(images/img_bg_1.jpg)' }}
                >
                  <a href="https://vimeo.com/channels/staffpicks/93951774" className="popup-vimeo">
                    <i className="icon-play3" />
                  </a>
                  <div className="overlay" />
                </div>
              </div>
              <div className="col-md-10 col-md-offset-1 text-center animate-box">
                <div className="about-wrap">
                  <div className="heading-2">
                    <h2>Robust Gym the leading fitness site</h2>
                  </div>
                  <p>
                    Even the all-powerful Pointing has no control about the blind texts it is an
                    almost unorthographic life One day however a small line of blind text by the
                    name of Lorem Ipsum decided to leave for the far World of Grammar.
                  </p>
                  <p>
                    The Big Oxmox advised her not to do so, because there were thousands of bad
                    Commas, wild Question Marks and devious Semikoli, but the Little Blind Text
                    didn’t listen. She packed her seven versalia, put her initial into the belt and
                    made herself on the way.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box">
                <p>
                  Even the all-powerful Pointing has no control about the blind texts it is an
                  almost unorthographic life One day however a small line of blind text by the name
                  of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
              </div>
              <div className="col-md-4 animate-box">
                <p>
                  Even the all-powerful Pointing has no control about the blind texts it is an
                  almost unorthographic life One day however a small line of blind text by the name
                  of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
              </div>
              <div className="col-md-4 animate-box">
                <p>
                  Even the all-powerful Pointing has no control about the blind texts it is an
                  almost unorthographic life One day however a small line of blind text by the name
                  of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-trainers">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                <h2>Our Experienced Professor</h2>
                <p>
                  Even the all-powerful Pointing has no control about the blind texts it is an
                  almost unorthographic life One day however a small line of blind text by the name
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-3 animate-box">
                <div className="trainers-entry">
                  <div
                    className="trainer-img"
                    style={{ backgroundImage: 'url(images/person1.jpg' }}
                  />
                  <div className="desc">
                    <h3>Olivia Young</h3>
                    <span>Teacher</span>
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                  <p className="social">
                    <a href="#">Twitter</a> <a href="#">Facebook</a> <a href="#">Email</a>
                  </p>
                </div>
              </div>

              <div className="col-md-3 col-sm-3 animate-box">
                <div className="trainers-entry">
                  <div
                    className="trainer-img"
                    style={{ backgroundImage: 'url(images/person2.jpg' }}
                  />
                  <div className="desc">
                    <h3>Daniel Anderson</h3>
                    <span>Professor</span>
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                  <p className="social">
                    <a href="#">Twitter</a> <a href="#">Facebook</a> <a href="#">Email</a>
                  </p>
                </div>
              </div>

              <div className="col-md-3 col-sm-3 animate-box">
                <div className="trainers-entry">
                  <div
                    className="trainer-img"
                    style={{ backgroundImage: 'url(images/person3.jpg' }}
                  />
                  <div className="desc">
                    <h3>David Brook</h3>
                    <span>Teacher</span>
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                  <p className="social">
                    <a href="#">Twitter</a> <a href="#">Facebook</a> <a href="#">Email</a>
                  </p>
                </div>
              </div>

              <div className="col-md-3 col-sm-3 animate-box">
                <div className="trainers-entry">
                  <div
                    className="trainer-img"
                    style={{ backgroundImage: 'url(images/person4.jpg' }}
                  />
                  <div className="desc">
                    <h3>Brigeth Smith</h3>
                    <span>Teacher</span>
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                  <p className="social">
                    <a href="#">Twitter</a> <a href="#">Facebook</a> <a href="#">Email</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

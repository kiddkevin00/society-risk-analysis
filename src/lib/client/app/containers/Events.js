import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Events extends Component {
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
                  Even the all-powerful Pointing has no control about the blind texts it is an
                  almost unorthographic life One day however a small line of blind text by the name
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box">
                <article className="article-entry">
                  <a
                    href="blog.html"
                    className="blog-img"
                    style={{ backgroundImage: 'url(images/blog-1.jpg)' }}
                  >
                    <p className="meta">
                      <span className="day">18</span>
                      <span className="month">Apr</span>
                    </p>
                  </a>
                  <div className="desc">
                    <h2>
                      <a href="blog.html">Creating Mobile Apps</a>
                    </h2>
                    <p className="admin">
                      <span>Posted by:</span> <span>James Smith</span>
                    </p>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic life.
                    </p>
                  </div>
                </article>
              </div>
              <div className="col-md-4 animate-box">
                <article className="article-entry">
                  <a
                    href="blog.html"
                    className="blog-img"
                    style={{ backgroundImage: 'url(images/blog-2.jpg' }}
                  >
                    <p className="meta">
                      <span className="day">18</span>
                      <span className="month">Apr</span>
                    </p>
                  </a>
                  <div className="desc">
                    <h2>
                      <a href="blog.html">Creating Mobile Apps</a>
                    </h2>
                    <p className="admin">
                      <span>Posted by:</span> <span>James Smith</span>
                    </p>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic life.
                    </p>
                  </div>
                </article>
              </div>
              <div className="col-md-4 animate-box">
                <article className="article-entry">
                  <a
                    href="blog.html"
                    className="blog-img"
                    style={{ backgroundImage: 'url(images/blog-3.jpg' }}
                  >
                    <p className="meta">
                      <span className="day">18</span>
                      <span className="month">Apr</span>
                    </p>
                  </a>
                  <div className="desc">
                    <h2>
                      <a href="blog.html">Creating Mobile Apps</a>
                    </h2>
                    <p className="admin">
                      <span>Posted by:</span> <span>James Smith</span>
                    </p>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic life.
                    </p>
                  </div>
                </article>
              </div>
              <div className="col-md-4 animate-box">
                <article className="article-entry">
                  <a
                    href="blog.html"
                    className="blog-img"
                    style={{ backgroundImage: 'url(images/blog-4.jpg' }}
                  >
                    <p className="meta">
                      <span className="day">18</span>
                      <span className="month">Apr</span>
                    </p>
                  </a>
                  <div className="desc">
                    <h2>
                      <a href="blog.html">Creating Mobile Apps</a>
                    </h2>
                    <p className="admin">
                      <span>Posted by:</span> <span>James Smith</span>
                    </p>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic life.
                    </p>
                  </div>
                </article>
              </div>
              <div className="col-md-4 animate-box">
                <article className="article-entry">
                  <a
                    href="blog.html"
                    className="blog-img"
                    style={{ backgroundImage: 'url(images/blog-5.jpg' }}
                  >
                    <p className="meta">
                      <span className="day">18</span>
                      <span className="month">Apr</span>
                    </p>
                  </a>
                  <div className="desc">
                    <h2>
                      <a href="blog.html">Creating Mobile Apps</a>
                    </h2>
                    <p className="admin">
                      <span>Posted by:</span> <span>James Smith</span>
                    </p>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic life.
                    </p>
                  </div>
                </article>
              </div>
              <div className="col-md-4 animate-box">
                <article className="article-entry">
                  <a
                    href="blog.html"
                    className="blog-img"
                    style={{ backgroundImage: 'url(images/blog-6.jpg' }}
                  >
                    <p className="meta">
                      <span className="day">18</span>
                      <span className="month">Apr</span>
                    </p>
                  </a>
                  <div className="desc">
                    <h2>
                      <a href="blog.html">Creating Mobile Apps</a>
                    </h2>
                    <p className="admin">
                      <span>Posted by:</span> <span>James Smith</span>
                    </p>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic life.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

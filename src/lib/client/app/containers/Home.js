import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  render() {
    return (
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
          <aside id="colorlib-hero">
            <div className="flexslider">
              <ul className="slides">
                <li style={{ backgroundImage: 'url(/images/sra_img_bg_1.jpg)' }}>
                  <div className="overlay" />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                        <div className="slider-text-inner text-center">
                          <h1>亞洲最大風險分析學會</h1>
                          <p>
                            <a href="#" className="btn btn-primary btn-lg btn-learn">
                              追蹤我們
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li style={{ backgroundImage: 'url(/images/img_bg_2.jpg)' }}>
                  <div className="overlay" />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                        <div className="slider-text-inner text-center">
                          <h1>長達近四十年的歷史</h1>
                          <p>
                            <a href="#" className="btn btn-primary btn-lg btn-learn">
                              加入會員
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li style={{ backgroundImage: 'url(/images/img_bg_3.jpg)' }}>
                  <div className="overlay" />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                        <div className="slider-text-inner text-center">
                          <h1>擁有最多高度影響指數的學術期刊</h1>
                          <p>
                            <a href="#" className="btn btn-primary btn-lg btn-learn">
                              追蹤近況
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li style={{ backgroundImage: 'url(/images/img_bg_4.jpg' }}>
                  <div className="overlay" />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                        <div className="slider-text-inner text-center">
                          <h1>據點遍布世界</h1>
                          <p>
                            <a href="#" className="btn btn-primary btn-lg btn-learn">
                              加入我們
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          <div id="colorlib-intro">
            <div className="container">
              <div className="row">
                <div className="col-md-4 intro-wrap">
                  <div className="intro-flex">
                    <div className="one-third color-1 animate-box">
                      <span className="icon">
                        <i className="flaticon-market" />
                      </span>
                      <div className="desc">
                        <h3>Learn Courses Online</h3>
                        <p>
                          <a href="#" className="view-more">
                            View More
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="one-third color-2 animate-box">
                      <span className="icon">
                        <i className="flaticon-open-book" />
                      </span>
                      <div className="desc">
                        <h3>Online Library Store</h3>
                        <p>
                          <a href="#" className="view-more">
                            View More
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="one-third color-3 animate-box">
                      <div className="desc2">
                        <h3>50% off in all selected Courses</h3>
                        <p>
                          <a href="#" className="view-more">
                            View More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="about-desc animate-box">
                    <h2>關於本會</h2>
                    <p>
                      台灣風險分析學會（Taiwan Society for Risk Analysis, TSRA）係由陳重信博士創始，為美國風險分析總會（Society for Risk Analysis or SRA）合法的區域組織，美國風險分析總會成立於1980年，為一個國際性的學術組織，目的為推動風險分析的發展，並提供從事風險分析工作與研究的專業人事學術交流與經驗分享的場所，並發行具有高度影響指數（Impact Factor）的學術期刊。陳博士為了推動台灣風險分析的發展、相關學術研究及技術開發，向美國總會申請成立台灣分會，並由總會執行委員會決議通過，於 2006 年 6 月 30 日正式成立台灣的風險分析學會分會，是為 Taiwan Society for Risk Analysis （TSRA），透過學會與國際間各國進行交流，以強化台灣於國際風險分析之能量。
                    </p>
                    <div className="fancy-collapse-panel">
                      <div
                        className="panel-group"
                        id="accordion"
                        role="tablist"
                        aria-multiselectable="true"
                      >
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingOne">
                            <h4 className="panel-title">
                              <a
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                成立目的
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseOne"
                            className="panel-collapse collapse in"
                            role="tabpanel"
                            aria-labelledby="headingOne"
                          >
                            <div className="panel-body">
                              <div className="row">
                                <div className="col-md-6">
                                  <p>
                                    台灣風險分析學會深獲對風險分析領域有興趣的專家學者們響應及支持。而學會成立之目的為（1）促進台灣風險分析研究及教育的前進，（2）提供不同領域學者一個
                                  </p>
                                </div>
                                <div className="col-md-6">
                                  <p>
                                    交換資訊、意見和方法以及解決關於風險議題的平台，（3）對於人類、環境風險分析與政府政策制定都將有所助益。
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingTwo">
                            <h4 className="panel-title">
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                探討議題
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseTwo"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingTwo"
                          >
                            <div className="panel-body">
                              <p>
                                風險分析由風險評估、風險管理和風險溝通三位一體緊密結合建構而成，為當代面對高度不確定性的環境與社會下，不可或缺之重要課題， 也因此台灣風險分析學會唯一跨領域之學會，關注面向相當多元，包括：健康風險（health risk）、環境風險（environmental risk）、災害風險（disaster risk）、 職業安全衛生（occupational health）等，並透過科學之分析方法與策略，例如暴露評估（exposure assessment）、毒理學（toxicology）、決策分析（decision analysis）、資料科學（data Science）與風險治理（Risk Governance）等，探討當代這種重要的風險議題，如食品安全、永續環境、韌性社會建構與新興風險等。
                              </p>
                              <ul>
                                <li>本學會每年均針對不同主題舉辦研討會，同時鼓勵台灣與其他國際團體合作，邀請國際專家學者來台演講，並申請國內補助出國參加風險相關研討會，更促成亞太區輪流主辦之風險國際會議。</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingThree">
                            <h4 className="panel-title">
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                未來展望
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseThree"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingThree"
                          >
                            <div className="panel-body">
                              <p>
                                未來，為了促使學界的研究成果能更為與實務需求結合，<strong>台灣風險分析學會（Taiwan Society for Risk Analysis, TSRA）</strong>將擔任一個促進學界與產業界交流的平台，促成理論與實務、模擬與實際成效更加密合，並藉由教育訓練推廣，推動風險分析相關認證制度，致力於將風險分析更加專業化、在地化。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="colorlib-services">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 text-center animate-box">
                    <div className="services">
                      <span className="icon">
                        <i className="flaticon-books" />
                      </span>
                      <div className="desc">
                        <h3>Professional Courses</h3>
                        <p>
                          Separated they live in Bookmarksgrove right at the coast of the Semantics
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-center animate-box">
                    <div className="services">
                      <span className="icon">
                        <i className="flaticon-professor" />
                      </span>
                      <div className="desc">
                        <h3>Experienced Instructor</h3>
                        <p>
                          Separated they live in Bookmarksgrove right at the coast of the Semantics
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-center animate-box">
                    <div className="services">
                      <span className="icon">
                        <i className="flaticon-book" />
                      </span>
                      <div className="desc">
                        <h3>Practical Training</h3>
                        <p>
                          Separated they live in Bookmarksgrove right at the coast of the Semantics
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-center animate-box">
                    <div className="services">
                      <span className="icon">
                        <i className="flaticon-diploma" />
                      </span>
                      <div className="desc">
                        <h3>Validated Certificate</h3>
                        <p>
                          Separated they live in Bookmarksgrove right at the coast of the Semantics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="colorlib-counter"
              className="colorlib-counters"
              style={{ backgroundImage: 'url(/images/img_bg_2.jpg' }}
              data-stellar-background-ratio="0.5"
            >
              <div className="overlay" />
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <div className="col-md-3 col-sm-6 animate-box">
                      <div className="counter-entry">
                        <span className="icon">
                          <i className="flaticon-book" />
                        </span>
                        <div className="desc">
                          <span
                            className="colorlib-counter js-counter"
                            data-from="0"
                            data-to="1539"
                            data-speed="5000"
                            data-refresh-interval="50"
                          />
                          <span className="colorlib-counter-label">Courses</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 animate-box">
                      <div className="counter-entry">
                        <span className="icon">
                          <i className="flaticon-student" />
                        </span>
                        <div className="desc">
                          <span
                            className="colorlib-counter js-counter"
                            data-from="0"
                            data-to="3653"
                            data-speed="5000"
                            data-refresh-interval="50"
                          />
                          <span className="colorlib-counter-label">Students</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 animate-box">
                      <div className="counter-entry">
                        <span className="icon">
                          <i className="flaticon-professor" />
                        </span>
                        <div className="desc">
                          <span
                            className="colorlib-counter js-counter"
                            data-from="0"
                            data-to="2300"
                            data-speed="5000"
                            data-refresh-interval="50"
                          />
                          <span className="colorlib-counter-label">Teachers</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 animate-box">
                      <div className="counter-entry">
                        <span className="icon">
                          <i className="flaticon-earth-globe" />
                        </span>
                        <div className="desc">
                          <span
                            className="colorlib-counter js-counter"
                            data-from="0"
                            data-to="200"
                            data-speed="5000"
                            data-refresh-interval="50"
                          />
                          <span className="colorlib-counter-label">Countries</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="colorlib-classes colorlib-light-grey">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                    <h2>Our Classes</h2>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic life One day however a small line of blind text by the
                      name
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 animate-box">
                    <div className="classes">
                      <div
                        className="classes-img"
                        style={{ backgroundImage: 'url(/images/classes-1.jpg' }}
                      >
                        <span className="price text-center">
                          <small>$450</small>
                        </span>
                      </div>
                      <div className="desc">
                        <h3>
                          <a href="#">Developing Mobile Apps</a>
                        </h3>
                        <p>
                          Pointing has no control about the blind texts it is an almost
                          unorthographic life
                        </p>
                        <p>
                          <a href="#" className="btn-learn">
                            Learn More <i className="icon-arrow-right3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box">
                    <div className="classes">
                      <div
                        className="classes-img"
                        style={{ backgroundImage: 'url(/images/classes-2.jpg' }}
                      >
                        <span className="price text-center">
                          <small>$450</small>
                        </span>
                      </div>
                      <div className="desc">
                        <h3>
                          <a href="#">Convert PSD to HTML</a>
                        </h3>
                        <p>
                          Pointing has no control about the blind texts it is an almost
                          unorthographic life
                        </p>
                        <p>
                          <a href="#" className="btn-learn">
                            Learn More <i className="icon-arrow-right3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box">
                    <div className="classes">
                      <div
                        className="classes-img"
                        style={{ backgroundImage: 'url(/images/classes-3.jpg' }}
                      >
                        <span className="price text-center">
                          <small>$450</small>
                        </span>
                      </div>
                      <div className="desc">
                        <h3>
                          <a href="#">Convert HTML to WordPress</a>
                        </h3>
                        <p>
                          Pointing has no control about the blind texts it is an almost
                          unorthographic life
                        </p>
                        <p>
                          <a href="#" className="btn-learn">
                            Learn More <i className="icon-arrow-right3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box">
                    <div className="classes">
                      <div
                        className="classes-img"
                        style={{ backgroundImage: 'url(/images/classes-4.jpg' }}
                      >
                        <span className="price text-center">
                          <small>$450</small>
                        </span>
                      </div>
                      <div className="desc">
                        <h3>
                          <a href="#">Developing Mobile Apps</a>
                        </h3>
                        <p>
                          Pointing has no control about the blind texts it is an almost
                          unorthographic life
                        </p>
                        <p>
                          <a href="#" className="btn-learn">
                            Learn More <i className="icon-arrow-right3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box">
                    <div className="classes">
                      <div
                        className="classes-img"
                        style={{ backgroundImage: 'url(/images/classes-5.jpg' }}
                      >
                        <span className="price text-center">
                          <small>$450</small>
                        </span>
                      </div>
                      <div className="desc">
                        <h3>
                          <a href="#">Learned Smoke Effects</a>
                        </h3>
                        <p>
                          Pointing has no control about the blind texts it is an almost
                          unorthographic life
                        </p>
                        <p>
                          <a href="#" className="btn-learn">
                            Learn More <i className="icon-arrow-right3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box">
                    <div className="classes">
                      <div
                        className="classes-img"
                        style={{ backgroundImage: 'url(/images/classes-6.jpg' }}
                      >
                        <span className="price text-center">
                          <small>$450</small>
                        </span>
                      </div>
                      <div className="desc">
                        <h3>
                          <a href="#">Convert HTML to WordPress</a>
                        </h3>
                        <p>
                          Pointing has no control about the blind texts it is an almost
                          unorthographic life
                        </p>
                        <p>
                          <a href="#" className="btn-learn">
                            Learn More <i className="icon-arrow-right3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="colorlib-testimony"
              className="testimony-img"
              style={{ backgroundImage: 'url(/images/img_bg_2.jpg' }}
              data-stellar-background-ratio="0.5"
            >
              <div className="overlay" />
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                    <h2>What Are The Students Says</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center">
                    <div className="row animate-box">
                      <div className="owl-carousel1">
                        <div className="item">
                          <div className="testimony-slide">
                            <div className="testimony-wrap">
                              <blockquote>
                                <span>Sophia Foster</span>
                                <p>
                                  Far far away, behind the word mountains, far from the countries
                                  Vokalia and Consonantia, there live the blind texts. Separated
                                  they live in Bookmarksgrove right at the coast of the Semantics, a
                                  large language ocean.
                                </p>
                              </blockquote>
                              <div
                                className="figure-img"
                                style={{ backgroundImage: 'url(/images/person1.jpg' }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="testimony-slide">
                            <div className="testimony-wrap">
                              <blockquote>
                                <span>John Collins</span>
                                <p>
                                  Separated they live in Bookmarksgrove right at the coast of the
                                  Semantics, a large language ocean.
                                </p>
                              </blockquote>
                              <div
                                className="figure-img"
                                style={{ backgroundImage: 'url(/images/person2.jpg' }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="testimony-slide">
                            <div className="testimony-wrap">
                              <blockquote>
                                <span>Adam Ross</span>
                                <p>
                                  Far from the countries Vokalia and Consonantia, there live the
                                  blind texts. Separated they live in Bookmarksgrove right at the
                                  coast of the Semantics, a large language ocean.
                                </p>
                              </blockquote>
                              <div
                                className="figure-img"
                                style={{ backgroundImage: 'url(/images/person3.jpg' }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                      almost unorthographic life One day however a small line of blind text by the
                      name
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-3 animate-box">
                    <div className="trainers-entry">
                      <div
                        className="trainer-img"
                        style={{ backgroundImage: 'url(/images/person1.jpg)' }}
                      />
                      <div className="desc">
                        <h3>Olivia Young</h3>
                        <span>Teacher</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-3 animate-box">
                    <div className="trainers-entry">
                      <div
                        className="trainer-img"
                        style={{ backgroundImage: 'url(/images/person2.jpg)' }}
                      />
                      <div className="desc">
                        <h3>Daniel Anderson</h3>
                        <span>Professor</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-3 animate-box">
                    <div className="trainers-entry">
                      <div
                        className="trainer-img"
                        style={{ backgroundImage: 'url(/images/person3.jpg)' }}
                      />
                      <div className="desc">
                        <h3>David Brook</h3>
                        <span>Teacher</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-3 animate-box">
                    <div className="trainers-entry">
                      <div
                        className="trainer-img"
                        style={{ backgroundImage: 'url(/images/person4.jpg)' }}
                      />
                      <div className="desc">
                        <h3>Brigeth Smith</h3>
                        <span>Teacher</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="colorlib-event">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                    <h2>Upcoming Events</h2>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic life One day however a small line of blind text by the
                      name
                    </p>
                  </div>
                </div>
                <div className="event-flex row-pb-sm">
                  <div
                    className="half event-img animate-box"
                    style={{ backgroundImage: 'url(/images/event.jpg' }}
                  />
                  <div className="half">
                    <div className="row">
                      <div className="col-md-12 animate-box">
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
                      <div className="col-md-12 animate-box">
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
                      <div className="col-md-12 animate-box">
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
              </div>
            </div>

            <div className="colorlib-blog colorlib-light-grey">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                    <h2>Recent News</h2>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic life One day however a small line of blind text by the
                      name
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 animate-box">
                    <article className="article-entry">
                      <a
                        href="blog.html"
                        className="blog-img"
                        style={{ backgroundImage: 'url(/images/blog-1.jpg' }}
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
                          Even the all-powerful Pointing has no control about the blind texts it is
                          an almost unorthographic life. The Big Oxmox advised her not to do so,
                          because there were thousands of bad Commas, wild Question Marks and
                          devious Semikoli, but the Little Blind Text didn’t listen. She packed her
                          seven versalia, put her initial into the belt and made herself on the way.
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-6">
                    <div className="f-blog animate-box">
                      <a
                        href="blog.html"
                        className="blog-img"
                        style={{ backgroundImage: 'url(/images/blog-1.jpg' }}
                      />
                      <div className="desc">
                        <h2>
                          <a href="blog.html">How to Create Website in Scratch</a>
                        </h2>
                        <p className="admin">
                          <span>04 March 2018</span>
                        </p>
                        <p>
                          Even the all-powerful Pointing has no control about the blind texts it is
                          an almost unorthographic life
                        </p>
                      </div>
                    </div>
                    <div className="f-blog animate-box">
                      <a
                        href="blog.html"
                        className="blog-img"
                        style={{ backgroundImage: 'url(/images/blog-2.jpg' }}
                      />
                      <div className="desc">
                        <h2>
                          <a href="blog.html">How to Convert PSD File to HTML File?</a>
                        </h2>
                        <p className="admin">
                          <span>04 March 2018</span>
                        </p>
                        <p>
                          Even the all-powerful Pointing has no control about the blind texts it is
                          an almost unorthographic life
                        </p>
                      </div>
                    </div>
                    <div className="f-blog animate-box">
                      <a
                        href="blog.html"
                        className="blog-img"
                        style={{ backgroundImage: 'url(/images/blog-3.jpg' }}
                      />
                      <div className="desc">
                        <h2>
                          <a href="blog.html">How to Build Games App in Mobile</a>
                        </h2>
                        <p className="admin">
                          <span>04 March 2018</span>
                        </p>
                        <p>
                          Even the all-powerful Pointing has no control about the blind texts it is
                          an almost unorthographic life
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
              <div className="copy">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <p>
                        <small className="block">
                          &copy;{' '}
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                          Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </small>
                        <br />
                        <small className="block">
                          Demo Images:{' '}
                          <a href="http://unsplash.co/" target="_blank">
                            Unsplash
                          </a>,{' '}
                          <a href="http://pexels.com/" target="_blank">
                            Pexels
                          </a>
                        </small>
                      </p>
                    </div>
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
        </div>
      </section>
    );
  }
}

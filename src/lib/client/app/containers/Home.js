import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  render() {
    return (
      <section>
        <aside id="colorlib-hero">
          <div className="flexslider">
            <ul className="slides">
              <li style={{ backgroundImage: 'url(/images/img-bg_sra-logo.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                      <div className="slider-text-inner text-center">
                        <h1 style={{ color: 'transparent' }}>亞洲最大風險分析學會</h1>
                        <p>
                          {/*
                          <a href="/register/signup" className="btn btn-primary btn-lg btn-learn">
                            加入會員
                          </a>
                          */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/*
              <li style={{ backgroundImage: 'url(/images/img-bg-2_sra.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                      <div className="slider-text-inner text-center">
                        <h1>長達近四十年的歷史</h1>
                        <p>
                          <a href="/news" className="btn btn-primary btn-lg btn-learn">
                            追蹤我們
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(/images/img-bg-5_sra.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                      <div className="slider-text-inner text-center">
                        <h1>擁有最多高度影響指數的學術期刊</h1>
                        <p>
                          <a href="/register/signup" className="btn btn-primary btn-lg btn-learn">
                            加入我們
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(/images/img-bg-4_sra.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                      <div className="slider-text-inner text-center">
                        <h1>據點遍布世界</h1>
                        <p>
                          <a href="/news" className="btn btn-primary btn-lg btn-learn">
                            追蹤近況
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              */}
            </ul>
          </div>
        </aside>

        <div id="colorlib-intro">
          <div className="container">
            <div className="row">
              {/*
              <div className="col-md-4 intro-wrap">
                <div className="intro-flex">

                  <div className="one-third color-3 animate-box">
                    <span className="icon">
                      <i className="flaticon-book" />
                    </span>
                    <div className="desc">
                      <h3>最新消息</h3>
                      <h3>2019年 SRA World Congress on Risk</h3>
                      <p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://www.sra.org/2018-annual-meeting"
                          className="view-more"
                        >
                          查看詳情
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="one-third color-1 animate-box">
                    <span className="icon">
                      <i className="flaticon-market" />
                    </span>
                    <div className="desc">
                      <h3>2018台灣風險分析學會年會暨研討會當日資訊</h3>
                      <p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://goo.gl/RCizDn"
                          className="view-more"
                        >
                          查看詳情
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="one-third color-2 animate-box">
                    <span className="icon">
                      <i className="flaticon-open-book" />
                    </span>
                    <div className="desc">
                      <h3>2018台灣風險分析學會年會暨研討會論文摘要徵稿</h3>
                      <p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://goo.gl/3V2tBn"
                          className="view-more"
                        >
                          查看詳情
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              */}
              <div className="col-md-offset-1 col-md-10">
                <div className="about-desc animate-box">
                  <h2>關於本會</h2>
                  <p>
                    台灣風險分析學會（Taiwan Society for Risk Analysis,
                    TSRA）係由陳重信博士創始，為美國風險分析總會（Society for Risk Analysis or
                    SRA）合法的區域組織，美國風險分析總會成立於1980年，為一個國際性的學術組織，目的為推動風險分析的發展，並提供從事風險分析工作與研究的專業人事學術交流與經驗分享的場所，並發行具有高度影響指數（Impact
                    Factor）的學術期刊。陳博士為了推動台灣風險分析的發展、相關學術研究及技術開發，向美國總會申請成立台灣分會，並由總會執行委員會決議通過，於
                    2006 年 6 月 30 日正式成立台灣的風險分析學會分會，是為 Taiwan Society for Risk
                    Analysis
                    （TSRA），透過學會與國際間各國進行交流，以強化台灣於國際風險分析之能量。
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
                            <p>
                              台灣風險分析學會深獲對風險分析領域有興趣的專家學者們響應及支持，成立之目的為：
                            </p>
                            <ul>
                              <li>促進台灣風險分析研究及教育的前進。</li>
                              <li>
                                提供不同領域學者一個交換資訊、意見和方法以及解決關於風險議題的平台。
                              </li>
                              <li>對於人類、環境風險分析與政府政策制定都將有所助益。</li>
                            </ul>
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
                              風險分析由風險評估、風險管理和風險溝通三位一體緊密結合建構而成，為當代面對高度不確定性的環境與社會下，不可或缺之重要課題，
                              也因此台灣風險分析學會唯一跨領域之學會，關注面向相當多元，包括：健康風險（health
                              risk）、環境風險（environmental risk）、災害風險（disaster risk）、
                              職業安全衛生（occupational
                              health）等，並透過科學之分析方法與策略，例如暴露評估（exposure
                              assessment）、毒理學（toxicology）、決策分析（decision
                              analysis）、資料科學（data Science）與風險治理（Risk
                              Governance）等，探討當代這種重要的風險議題，如食品安全、永續環境、韌性社會建構與新興風險等。
                            </p>
                            <ul>
                              <li>
                                本學會每年均針對不同主題舉辦研討會，同時鼓勵台灣與其他國際團體合作，邀請國際專家學者來台演講，並申請國內補助出國參加風險相關研討會，更促成亞太區輪流主辦之風險國際會議。
                              </li>
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
                              未來，為了促使學界的研究成果能更為與實務需求結合，
                              <strong>
                                台灣風險分析學會（Taiwan Society for Risk Analysis, TSRA
                              </strong>{' '}
                              將擔任一個促進學界與產業界交流的平台，促成理論與實務、模擬與實際成效更加密合，
                              並藉由教育訓練推廣，推動風險分析相關認證制度，致力於將風險分析更加專業化、在地化。
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
        </div>

        {/*
        <div id="colorlib-services">
          <div className="container">
            <div className="row">
              <div className="col-md-3 text-center animate-box">
                <div className="services">
                  <span className="icon">
                    <i className="flaticon-books" />
                  </span>
                  <div className="desc">
                    <h3>亞洲最大的學術聯盟</h3>
                    <p>
                      擔任一個促進學界與產業界交流的平台，促成理論與實務、模擬與實際成效更加密合。
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
                    <h3>最悠久的歷史</h3>
                    <p>美國風險分析總會成立於1980年，至今已經有超過三十年的歷史。</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-center animate-box">
                <div className="services">
                  <span className="icon">
                    <i className="flaticon-book" />
                  </span>
                  <div className="desc">
                    <h3>最優質的學術期刊</h3>
                    <p>
                      藉由教育訓練推廣，推動風險分析相關認證制度，致力於將風險分析更加專業化、在地化。
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
                    <h3>據點遍布世界</h3>
                    <p>
                      每年均針對不同主題於世界各地舉辦研討會，並邀請國際專家學者來台演講，促成亞太區輪流主辦之風險國際會議
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}

        {/*
        <div
          id="colorlib-counter"
          className="colorlib-counters"
          style={{ backgroundImage: 'url(/images/img-bg-5_sra.jpg)' }}
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
                      <span className="colorlib-counter-label">會議</span>
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
                      <span className="colorlib-counter-label">會員</span>
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
                      <span className="colorlib-counter-label">教授</span>
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
                      <span className="colorlib-counter-label">據點</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}

        {/*
        <div
          id="colorlib-testimony"
          className="testimony-img"
          style={{ backgroundImage: 'url(/images/img-bg-2.jpg)' }}
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
                              Vokalia and Consonantia, there live the blind texts. Separated they
                              live in Bookmarksgrove right at the coast of the Semantics, a large
                              language ocean.
                            </p>
                          </blockquote>
                          <div
                            className="figure-img"
                            style={{ backgroundImage: 'url(/images/person-1.jpg)' }}
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
                            style={{ backgroundImage: 'url(/images/person-2.jpg)' }}
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
                              Far from the countries Vokalia and Consonantia, there live the blind
                              texts. Separated they live in Bookmarksgrove right at the coast of the
                              Semantics, a large language ocean.
                            </p>
                          </blockquote>
                          <div
                            className="figure-img"
                            style={{ backgroundImage: 'url(/images/person-3.jpg)' }}
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
        */}

        {/*
        <div className="colorlib-trainers">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                <h2>我們的團隊</h2>
                <p>擁有來自世界各地的知名學者的支持，奠定學會扎實的研究基礎。</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-3 animate-box">
                <div className="trainers-entry">
                  <div
                    className="trainer-img"
                    style={{ backgroundImage: 'url(/images/person-1.jpg)' }}
                  />
                  <div className="desc">
                    <h3>林文印</h3>
                    <span>院長</span>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-3 animate-box">
                <div className="trainers-entry">
                  <div
                    className="trainer-img"
                    style={{ backgroundImage: 'url(/images/person-2.jpg)' }}
                  />
                  <div className="desc">
                    <h3>陳重信</h3>
                    <span>教授</span>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-3 animate-box">
                <div className="trainers-entry">
                  <div
                    className="trainer-img"
                    style={{ backgroundImage: 'url(/images/person-3.jpg)' }}
                  />
                  <div className="desc">
                    <h3>詹長權</h3>
                    <span>學者</span>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-3 animate-box">
                <div className="trainers-entry">
                  <div
                    className="trainer-img"
                    style={{ backgroundImage: 'url(/images/person-4.jpg)' }}
                  />
                  <div className="desc">
                    <h3>許惠悰</h3>
                    <span>研究員</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}

        {/*
        <div className="colorlib-event">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                <h2>最新消息</h2>
                <p>我們會即時更新最新消息，讓你輕鬆跟上學界動態。</p>
              </div>
            </div>
            <div className="event-flex row-pb-sm">
              <div
                className="half event-img animate-box"
                style={{ backgroundImage: 'url(/images/news-bg.jpg)' }}
              />
              <div className="half">
                <div className="row">
                  <div className="col-md-12 animate-box">
                    <div className="event-entry">
                      <div className="desc">
                        <p className="meta">
                          <span className="day">28</span>
                          <span className="month">May</span>
                        </p>
                        <p className="organizer">
                          <span>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="http://www.sra.org/2018-annual-meeting"
                            >
                              點此查看活動連結
                            </a>
                          </span>
                        </p>
                        <h2>
                          <span>2018美國紐奧良SRA總會年會</span>
                        </h2>
                      </div>
                      <div className="location">
                        <span className="icon">
                          <i className="icon-map" />
                        </span>
                        <p>
                          各位會員先進：一年一度的SRA總會年會，於今年12月2-6日於美國紐奧良舉行，歡迎會員踴躍投稿！鼓勵各位會員踴躍提出symposium提案。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 animate-box">
                    <div className="event-entry">
                      <div className="desc">
                        <p className="meta">
                          <span className="day">17</span>
                          <span className="month">Jan</span>
                        </p>
                        <p className="organizer">
                          <span>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://goo.gl/mrJBLj"
                            >
                              點此查看詳細會議議程
                            </a>
                          </span>
                        </p>
                        <h2>
                          <span>2018台灣風險分析學會年會暨研討會當日資訊</span>
                        </h2>
                      </div>
                      <div className="location">
                        <span className="icon">
                          <i className="icon-map" />
                        </span>
                        <p>
                          本學會之年會暨研討會將於 2018 年 1 月 19
                          日星期五於國立成功大學舉行，歡迎各風險分析領域相關先進蒞臨會場，共襄盛舉。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 animate-box">
                    <div className="event-entry">
                      <div className="desc">
                        <p className="meta">
                          <span className="day">25</span>
                          <span className="month">Nov</span>
                        </p>
                        <p className="organizer">
                          <span>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://goo.gl/3V2tBn"
                            >
                              點此查看投稿詳情
                            </a>
                          </span>
                        </p>
                        <h2>
                          <span>2018台灣風險分析學會年會暨研討會論文摘要徵稿</span>
                        </h2>
                      </div>
                      <div className="location">
                        <span className="icon">
                          <i className="icon-map" />
                        </span>
                        <p>
                          台灣風險分析學會將於 2018 年 1 月 19 日（五）舉辦「2018
                          台灣風險分析學會年會暨研討會」，邀請國內外風險分析相關學者齊聚一堂，針對風險分析於建構韌性社會之角色與定位、食品安全、災防管理、環境風險、永續發展、職業安全衛生、資訊安全與相關風險社會治理經驗相關議題進行交流。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}

        {/*
        <div className="colorlib-blog colorlib-light-grey">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                <h2>學會會刊</h2>
                <p>定期更新與整理相關學術會刊，讓你輕鬆跟上學界最新研究與發展。</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 animate-box">
                <article className="article-entry">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://goo.gl/rHSKZc"
                    className="blog-img"
                    style={{ backgroundImage: 'url(/images/2017-13-mag-cover.jpg)' }}
                  >
                    <p className="meta">
                      <span className="day">30</span>
                      <span className="month">SEP</span>
                    </p>
                  </a>
                  <div className="desc">
                    <p>2017 第13期</p>
                    <h2>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://goo.gl/rHSKZc"
                      >
                        基於風險的血液安全管理
                      </a>
                    </h2>
                    <p className="admin">
                      <span>作者</span> <span>林希偉</span>
                    </p>
                  </div>
                </article>
              </div>
              <div className="col-md-6">
                <div className="f-blog animate-box">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://goo.gl/NWxHHf"
                    className="blog-img"
                    style={{ backgroundImage: 'url(/images/2017-12-mag-cover.jpg)' }}
                  />
                  <div className="desc">
                    <p>2017 第12期</p>
                    <h2>
                      <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/NWxHHf">
                        環境物聯網時代下之暴露評估
                      </a>
                    </h2>
                    <p className="admin">
                      <span>作者</span> <span>余化龍</span>
                    </p>
                  </div>
                </div>
                <div className="f-blog animate-box">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://goo.gl/1wKtD9"
                    className="blog-img"
                    style={{ backgroundImage: 'url(/images/2017-10-mag-cover.jpg)' }}
                  />
                  <div className="desc">
                    <p>2017 第10期</p>
                    <h2>
                      <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/1wKtD9">
                        歐洲雞蛋遭受芬普尼污染事件簡介
                      </a>
                    </h2>
                    <p className="admin">
                      <span>作者</span> <span>胡素婉</span>
                    </p>
                  </div>
                </div>
                <div className="f-blog animate-box">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://goo.gl/a4g3t2"
                    className="blog-img"
                    style={{ backgroundImage: 'url(/images/2017-8-mag-cover.jpg)' }}
                  />
                  <div className="desc">
                    <p>2017 第8期</p>
                    <h2>
                      <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/a4g3t2">
                        韌性概念與都市防災之探討
                      </a>
                    </h2>
                    <p className="admin">
                      <span>作者</span> <span>黃泰霖</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}
      </section>
    );
  }
}

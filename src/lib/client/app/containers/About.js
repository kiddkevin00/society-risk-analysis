import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class About extends Component {
  render() {
    return (
      <section>
        <aside id="colorlib-hero">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xs-12 col-md-offset-3 col-md-6 slider-text">
                      <div className="slider-text-inner text-center" style={{ backgroundImage: 'url(/images/img-bg-headline.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                        <h2>
                          <span>
                            News
                          </span>
                        </h2>
                        <h1>學會介紹</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>

        <div id="colorlib-about">
          <div className="container">
            <div className="row row-pb-md">
              {/*
              <div className="col-md-8 col-md-offset-2 row-pb-md animate-box">
                <div
                  className="video colorlib-video"
                  style={{ backgroundImage: 'url(/images/img-bg-1.jpg)' }}
                >
                  <a href="https://vimeo.com/channels/staffpicks/93951774" className="popup-vimeo">
                    <i className="icon-play3" />
                  </a>
                  <div className="overlay" />
                </div>
              </div>
              */}
              <div className="col-md-10 col-md-offset-1 text-center animate-box">
                <div className="about-wrap">
                  <div className="heading-2">
                    <h2>台灣風險分析學會</h2>
                  </div>
                  <p>
                    台灣風險分析學會 (Taiwan Society for Risk Analysis,
                    TSRA) 係由陳重信博士創始，為美國風險分析總會 (Society for Risk Analysis or
                    SRA) 合法的區域組織，美國風險分析總會成立於1980年，為一個國際性的學術組織，目的為推動風險分析的發展，並提供從事風險分析工作與研究的專業人事學術交流與經驗分享的場所，並發行具有高度影響指數 (Impact
                    Factor) 的學術期刊。
                  </p>
                  <p>
                    陳博士為了推動台灣風險分析的發展、相關學術研究及技術開發，向美國總會申請成立台灣分會，並由總會執行委員會決議通過，於
                    2006 年 6 月 30 日正式成立台灣的風險分析學會分會，是為 Taiwan Society for Risk
                    Analysis
                     (TSRA)，透過學會與國際間各國進行交流，以強化台灣於國際風險分析之能量。
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box">
                <p>
                  台灣風險分析學會深獲對風險分析領域有興趣的專家學者們響應及支持。而學會成立之目的為（1）促進台灣風險分析研究及教育的前進，（2）提供不同領域學者一個交換資訊、意見和方法以及解決關於風險議題的平台，（3）對於人類、環境風險分析與政府政策制定都將有所助益。
                </p>
              </div>
              <div className="col-md-4 animate-box">
                <p>
                  風險分析由風險評估、風險管理和風險溝通三位一體緊密結合建構而成，為當代面對高度不確定性的環境與社會下，不可或缺之重要課題，
                  也因此台灣風險分析學會唯一跨領域之學會，關注面向相當多元，包括：健康風險、環境風險、災害風險、
                  職業安全衛生等，並透過科學之分析方法與策略，例如暴露評估、毒理學、決策分析、資料科學與風險治理等，探討當代這種重要的風險議題，如食品安全、永續環境、韌性社會建構與新興風險等。
                </p>
              </div>
              <div className="col-md-4 animate-box">
                <p>
                  本學會每年均針對不同主題舉辦研討會，同時鼓勵台灣與其他國際團體合作，邀請國際專家學者來台演講，並申請國內補助出國參加風險相關研討會，更促成亞太區輪流主辦之風險國際會議。未來，為了促使學界的研究成果能更為與實務需求結合，台灣風險分析學會將擔任一個促進學界與產業界交流的平台，促成理論與實務、模擬與實際成效更加密合，並藉由教育訓練推廣，推動風險分析相關認證制度，致力於將風險分析更加專業化、在地化。
                </p>
              </div>
            </div>
          </div>
        </div>

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
                  <p>畢業於全球第一名校哈佛大學，目前於中科研究院擔任院長</p>
                  <p className="social">
                    <a href="#">Twitter</a> <a href="#">Facebook</a> <a href="#">Email</a>
                  </p>
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
                  <p>畢業於全球第一名校台灣大學，目前於清華大學擔任教授</p>
                  <p className="social">
                    <a href="#">Twitter</a> <a href="#">Facebook</a> <a href="#">Email</a>
                  </p>
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
                  <p>畢業於全球第一名校成功大學，目前於各大研究所擔任學者</p>
                  <p className="social">
                    <a href="#">Twitter</a> <a href="#">Facebook</a> <a href="#">Email</a>
                  </p>
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
                  <p>畢業於全球第一名校交通大學，目前於南科院擔任研究員</p>
                  <p className="social">
                    <a href="#">Twitter</a> <a href="#">Facebook</a> <a href="#">Email</a>
                  </p>
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

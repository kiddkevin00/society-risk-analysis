import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class News extends Component {
  render() {
    return (
      <section>
        <aside id="colorlib-hero">
          <div className="flexslider">
            <ul className="slides">
              <li style={{ backgroundImage: 'url(images/news-bg.jpg)' }}>
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
                <p>我們會即時更新最新消息，讓你輕鬆跟上學界動態。</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box">
                <div className="event-entry">
                  <div className="desc">
                    <p className="meta">
                      <span className="day">28</span>
                      <span className="month">May</span>
                    </p>
                    <p className="organizer">
                      <span>
                        <a target="_blank" href="http://www.sra.org/2018-annual-meeting">
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
              <div className="col-md-4 animate-box">
                <div className="event-entry">
                  <div className="desc">
                    <p className="meta">
                      <span className="day">17</span>
                      <span className="month">Jan</span>
                    </p>
                    <p className="organizer">
                      <span>
                        <a target="_blank" href="https://goo.gl/mrJBLj">
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
              <div className="col-md-4 animate-box">
                <div className="event-entry">
                  <div className="desc">
                    <p className="meta">
                      <span className="day">25</span>
                      <span className="month">Nov</span>
                    </p>
                    <p className="organizer">
                      <span>
                        <a target="_blank" href="https://sra-taiwan.firebaseapp.com/News.html?1">
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
            <div className="row">
              <div className="col-md-4 animate-box">
                <div className="event-entry">
                  <div className="desc">
                    <p className="meta">
                      <span className="day">18</span>
                      <span className="month">Nov</span>
                    </p>
                    <p className="organizer">
                      <a target="_blank" href="http://www.sra.org/worldcongress2019">
                        點此查看更多詳情
                      </a>
                    </p>
                    <h2>
                      <span>2019年 SRA World Congress on Risk</span>
                    </h2>
                  </div>
                  <div className="location">
                    <span className="icon">
                      <i className="icon-map" />
                    </span>
                    <p>誠摯邀請協會理監事與會員共襄盛舉。</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="event-entry">
                  <div className="desc">
                    <p className="meta">
                      <span className="day">13</span>
                      <span className="month">Nov</span>
                    </p>
                    <p className="organizer">
                      <a target="_blank" href="http://www.sra-japan.jp/SRAAsia2018/">
                        點此查看投稿詳情
                      </a>
                    </p>
                    <h2>
                      <span>2018年 亞洲風險研討會</span>
                    </h2>
                  </div>
                  <div className="location">
                    <span className="icon">
                      <i className="icon-map" />
                    </span>
                    <p>
                      吳焜裕教授受邀擔任該研討會panelist，鼓勵理監事與會員踴躍參與本學會亦預計以下列為題：Risk
                      Computing - Enabling Risk Analysis with Big Data and Data Science 和 Progress
                      of Health Risk Assessment in Taiwan。歡迎理監事與會員給予建議及參與。
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="event-entry">
                  <div className="desc">
                    <p className="meta">
                      <span className="day">10</span>
                      <span className="month">Nov</span>
                    </p>
                    <p className="organizer">
                      <a
                        target="_blank"
                        href="http://birenheide.com/sra/2017AM/program/sessionlist.php3"
                      >
                        點此查看活動行程
                      </a>
                    </p>
                    <h2>
                      <span>2017年 美國 SRA 年會</span>
                    </h2>
                  </div>
                  <div className="location">
                    <span className="icon">
                      <i className="icon-map" />
                    </span>
                    <p>誠摯邀請協會理監事與會員共襄盛舉。</p>
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

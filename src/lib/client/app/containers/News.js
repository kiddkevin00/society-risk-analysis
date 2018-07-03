import { firebaseConnect } from 'react-redux-firebase';
import cx from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UnconnectedNews extends Component {
  static propTypes = {
    newses: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  renderNewsColumns(news) {
    const className = cx('col-md-4', {
      'animate-box': false, // [TODO] Disable animation for now
    });

    return (
      <div key={news.key} className={className}>
        <div className="event-entry">
          <div className="desc">
            <p className="meta">
              <span className="day">{news['日數']}</span>
              <span className="month">{news['月份']}</span>
            </p>
            <p className="organizer">
              <span>
                <a target="_blank" href={news['連結地址']}>
                  {news['連結描述']}
                </a>
              </span>
            </p>
            <h2>
              <span>{news['主題']}</span>
            </h2>
          </div>
          <div className="location">
            <span className="icon">
              <i className="icon-map" />
            </span>
            <p>{news['內容']}</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const newsColumns = this.props.newses.map(news => this.renderNewsColumns(news));

    const newsesRows = [];
    let rowColumns = [];

    for (let index = 0; index < newsColumns.length; index += 1) {
      if (index % 3 === 0) {
        rowColumns = [];
        rowColumns.push(newsColumns[index]);
        newsesRows.push(
          <div key={`news-row-${index / 3 + 1}`} className="row">
            {rowColumns}
          </div>
        );
      } else {
        rowColumns.push(newsColumns[index]);
      }
    }

    return (
      <section>
        <aside id="colorlib-hero">
          <div className="flexslider">
            <ul className="slides">
              <li style={{ backgroundImage: 'url(/images/img-bg_sra.jpg)' }}>
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
            {newsesRows}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  newses:
    state.firebase.ordered && Array.isArray(state.firebase.ordered['最新消息'])
      ? state.firebase.ordered['最新消息'].map(news => ({ key: news.key, ...news.value })).reverse()
      : [],
});

export default compose(firebaseConnect([{ path: '/最新消息' }]), connect(mapStateToProps, null))(
  UnconnectedNews
);

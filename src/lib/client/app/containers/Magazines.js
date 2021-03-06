import meActionCreator from '../actionCreators/me/';
import { firebaseConnect } from 'react-redux-firebase';
import cx from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UnconnectedMagazines extends Component {
  static propTypes = {
    hasCheckedAuth: PropTypes.bool.isRequired,
    //isCheckingAuth: PropTypes.bool.isRequired,
    //isAuthenticated: PropTypes.bool.isRequired,
    magazines: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types

    dispatchCheckAuth: PropTypes.func.isRequired,
  };

  componentWillMount() {
    if (!this.props.hasCheckedAuth) {
      this.props.dispatchCheckAuth();
    }
  }

  renderMagazineColumns(magazine) {
    const className = cx('col-md-4', {
      'animate-box': false, // [TODO] Disable animation for now
    });

    return (
      <div key={magazine.key} className={className}>
        <article className="article-entry">
          <a
            target="_blank"
            href={magazine['期刊連結']}
            className="blog-img"
            style={{ backgroundImage: `url(${magazine['封面圖片']})` }}
          >
            <p className="meta">
              <span className="day">{magazine['出版日數']}</span>
              <span className="month">{magazine['出版月份']}</span>
            </p>
          </a>
          <div className="desc">
            <p>{`${magazine['期刊年份']} 第${magazine['期刊編號']}期`}</p>
            <h2>
              <a target="_blank" href={magazine['期刊連結']}>
                {magazine['主題']}
              </a>
            </h2>
            <p className="admin">
              <span>作者</span> <span>{magazine['作者']}</span>
            </p>
          </div>
        </article>
      </div>
    );
  }

  render() {
    //if (this.props.isCheckingAuth) {
    //  return null; // [TBD] Will have a loading indicator here.
    //} else if (this.props.isAuthenticated) {
    const magazineColumns = this.props.magazines.map(magazine =>
      this.renderMagazineColumns(magazine)
    );

    const magazinesRows = [];
    let rowColumns = [];

    for (let index = 0; index < magazineColumns.length; index += 1) {
      if (index % 3 === 0) {
        rowColumns = [];
        rowColumns.push(magazineColumns[index]);
        magazinesRows.push(
          <div key={`mag-row-${index / 3 + 1}`} className="row">
            {rowColumns}
          </div>
        );
      } else {
        rowColumns.push(magazineColumns[index]);
      }
    }

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
                          <span>Magazines</span>
                        </h2>
                        <h1>學會會刊</h1>
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
                <h2>學會會刊一覽</h2>
                <p>定期更新與整理相關學術會刊，讓你輕鬆跟上學界最新研究與發展。</p>
              </div>
            </div>
            {magazinesRows}
          </div>
        </div>
      </section>
    );
    //}
    //return null;
  }
}

const mapStateToProps = state => ({
  hasCheckedAuth: state.me.main.hasCheckedAuth,
  //isCheckingAuth: state.me.main.isCheckingAuth,
  //isAuthenticated: state.me.main.isAuthenticated,
  type: state.me.main.type,
  magazines:
    state.firebase.ordered && Array.isArray(state.firebase.ordered['學會會刊'])
      ? state.firebase.ordered['學會會刊']
          .filter(magazine => {
            if (state.me.main.type !== 'paid') {
              return magazine.value['期刊年份'] === 2018;
            }
            return true;
          })
          .map(magazine => ({
            key: magazine.key,
            ...magazine.value,
          }))
          .reverse()
      : [],
});

const mapDispatchToProps = dispatch => ({
  dispatchCheckAuth() {
    return dispatch(meActionCreator.checkAuthentication());
  },
});

export default compose(
  firebaseConnect([{ path: '/學會會刊' }]),
  connect(mapStateToProps, mapDispatchToProps)
)(UnconnectedMagazines);

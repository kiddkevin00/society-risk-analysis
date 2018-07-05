import meActionCreator from '../actionCreators/me/';
//import { firebaseConnect } from 'react-redux-firebase';
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
    resources: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types

    dispatchCheckAuth: PropTypes.func.isRequired,
  };

  componentWillMount() {
    if (!this.props.hasCheckedAuth) {
      this.props.dispatchCheckAuth();
    }
  }

  renderResourceColumns(resource) {
    const className = cx('col-md-4', {
      'animate-box': false, // [TODO] Disable animation for now
    });

    return <div key={resource.key} className={className} />;
  }

  render() {
    //if (this.props.isCheckingAuth) {
    //  return null; // [TBD] Will have a loading indicator here.
    //} else if (this.props.isAuthenticated) {
    const resourcesColumns = this.props.resources.map(magazine =>
      this.renderResourceColumns(magazine)
    );

    return (
      <section>
        <aside id="colorlib-hero">
          <div className="flexslider">
            <ul className="slides">
              <li style={{ backgroundImage: 'url(/images/img-bg-headline.svg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-md-offset-3 slider-text">
                      <div className="slider-text-inner text-center">
                        <h1>學會資源</h1>
                        <h2>
                          <span>
                            <a href="/home">首頁</a> | 學會資源
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
                <h2>資源一探究竟</h2>
                <p>定期更新與整理相關學會資源，讓你輕鬆跟上學界最新研究與發展。</p>
              </div>
            </div>
            <div className="row">{resourcesColumns}</div>
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
  resources: [],
});

const mapDispatchToProps = dispatch => ({
  dispatchCheckAuth() {
    return dispatch(meActionCreator.checkAuthentication(true));
  },
});

export default compose(
  //firebaseConnect([{ path: '/學會資源' }]),
  connect(mapStateToProps, mapDispatchToProps)
)(UnconnectedMagazines);

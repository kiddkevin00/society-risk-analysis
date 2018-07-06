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
                          <span>Cadres</span>
                        </h2>
                        <h1>歷屆幹部</h1>
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
                <h2>台灣風險分析學會歷屆幹部</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="about-desc animate-box">
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
                              發 起 人 名 單
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
                              陳重信、詹長權、許惠悰、林文印、周晉澄、林能輝、魏百祿、周桂田、邱亞文、胡素婉、馬鴻文、林宜平、陳明仁、陳明真、郭金泉、蔡丁貴、謝顯堂、王榮德、吳焜裕、潘致宏、林靜君、施偉仲、黃至君、黃鈺芳、劉志成、陳主智、吳章甫、陳家揚、陳宛青、張立德、張大元、張簡國平、王麟騏、汪禧年、吳幸娟、江素瑛、劉錦龍、張新儀、陳美蓮、鄭尊仁
                            </p>
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
                              第 一 屆 &nbsp; 理 監 事 人 員 名 單
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
                            <ul>
                              <li>理事長： 陳重信</li>
                              <li>
                                理事：
                                陳重信、詹長權、許惠悰、林文印、周晉澄、林能輝、魏百祿、周桂田、邱亞文、胡素婉、馬鴻文、林宜平、陳明仁
                              </li>
                              <li>監事： 陳明真、郭金泉、蔡丁貴、謝顯堂、王榮德</li>
                              <li>
                                會務人員：
                                吳焜裕、潘致宏、林靜君、施偉仲、黃至君、黃鈺芳、劉志成、陳主智、吳章甫、陳家揚、陳宛青、張立德、張大元、張簡國平、王麟騏、汪禧年、吳幸娟、江素瑛、劉錦龍、張新儀、陳美蓮、鄭尊仁
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
                              第 二 屆 &nbsp; 理 監 事 人 員 名 單
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
                            <ul>
                              <li>理事： 王榮德、吳焜裕、周晉澄、林宜平、邱亞文、洪慶宜、胡素婉</li>
                              <li>監事： 許惠悰、郭金泉、劉志成</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingFour">
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              第 三 屆 &nbsp; 理 監 事 人 員 名 單
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFour"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingFour"
                        >
                          <div className="panel-body">
                            <ul>
                              <li>理事長： 詹長權</li>
                              <li>秘書長： 吳焜裕</li>
                              <li>常務理事： 許惠悰、周晉澄、馬鴻文</li>
                              <li>
                                理事： 李文亮、林能暉、吳章甫、陳重信、周桂田、林文印、江鴻龍
                                、陳美蓮、王榮德、鄭尊仁
                              </li>
                              <li>候補理事： 陳美芳、何文照、彭啟明</li>
                              <li>常務監事： 胡素婉</li>
                              <li>監事： 王怡人、李宏萍、張大元、陳明真</li>
                              <li>候補監事： 汪禧年</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingFive">
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              第 四 屆 &nbsp; 理 監 事 人 員 名 單（104/02 - 106/04/18）
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFive"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingFive"
                        >
                          <div className="panel-body">
                            <ul>
                              <li>理事長： 吳焜裕</li>
                              <li>秘書長： 李文亮</li>
                              <li>副秘書長： 何文照</li>
                              <li>常務理事： 周桂田、許惠悰、何文照</li>
                              <li>
                                理事：
                                林文印、馬鴻文、陳美芳、邱嘉斌、林希偉、高淑芬、陳明仁、余化龍、黃泰霖、鄭尊仁、胡素婉
                              </li>
                              <li>常務監事： 陳主智</li>
                              <li>監事： 陳美蓮、江素瑛、江鴻龍、陳明真</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingSix">
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                            >
                              第 五 屆 &nbsp; 理 監 事 人 員 名 單（106/04/19 - ）
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseSix"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingSix"
                        >
                          <div className="panel-body">
                            <ul>
                              <li>理事長： 余化龍</li>
                              <li>秘書長： 何文照</li>
                              <li>副秘書長： 黃泰霖</li>
                              <li>常務理事： 鄭尊仁、胡素婉、余化龍</li>
                              <li>
                                理事：
                                吳焜裕、許惠悰、周桂田、林文印、馬鴻文、陳美芳、邱嘉斌、林希偉、高淑芬、陳明仁
                              </li>
                              <li>常務監事： 陳主智</li>
                              <li>監事： 陳美蓮、江素瑛、江鴻龍、陳明真</li>
                            </ul>
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
      </section>
    );
  }
}

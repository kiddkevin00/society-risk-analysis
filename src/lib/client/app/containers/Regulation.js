import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class About extends Component {
  render() {
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
                        <h1>學會章程</h1>
                        <h2>
                          <span>
                            <a href="/home">首頁</a> | 學會章程
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
                <h2>台灣風險分析學會學會章程</h2>
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
                              第 一 章 &nbsp; 總 則
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
                            <ol>
                              <li>
                                本會定名為台灣風險分析學會，以下簡稱本會，正式英文譯名為 Taiwan
                                Society for Risk Analysis (AKA Taiwan Chapter of Society for Risk
                                Analysis)。
                              </li>
                              <li>
                                本會為依法設立、非以營利為目的之社會團體，以促進為風險分析的教育、訓練、研究與發展，加強與國際組織及國際性風險分析團體之交流與聯繫，並提升國內風險分析之觀念及水準為宗旨。
                              </li>
                              <li>本會以全國行政區域為組織區域。</li>
                              <li>本會得於各縣(市)設立分支機構，其組織簡則另定之。</li>
                              <li>
                                本會之任務如下：
                                <ul>
                                  <li>促進風險分析之教育、訓練、研究及應用。</li>
                                  <li>提升風險分析品質。</li>
                                  <li>
                                    國際組織及國內外相關專業團體之交流與合作，與風險分析相關事務之推動。
                                  </li>
                                  <li>辦理其他與本會宗旨相關之事項。</li>
                                </ul>
                              </li>
                              <li>
                                本會之主管機關為內政部。主要目的事業主管機關為教育部。本會之目的事業應受各該事業主管機關之指導、監督。
                              </li>
                            </ol>
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
                              第 二 章 &nbsp; 會 員
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
                            <ol>
                              <li>
                                本會會員分下列五種：
                                <ul>
                                  <li>
                                    普通會員：凡贊同本會宗旨，凡國內、外大專理工醫農或社會人文科學之科系畢業者。
                                  </li>
                                  <li>
                                    學生會員：凡國內、外大專理工醫農或社會人文科學相關研究系所就學者，需檢附學生證正反面影印本。填具入會申請書，由會員二人之介紹，經本會理事會議通過，得為本會學生會員。
                                  </li>
                                  <li>
                                    名譽會員：凡對風險分析有特殊貢獻者。經本會理事會之推薦，得聘請為本會名譽會員。
                                  </li>
                                  <li>
                                    贊助會員：凡贊助本會宗旨，並對本會有所贊助者，經本會理事會通過，得為本會贊助會員。
                                  </li>
                                  <li>
                                    永久會員：普通會員依當時會費一次繳納二十年會費，得為永久會員。
                                  </li>
                                </ul>
                              </li>
                              <li>
                                會員有表決權、選舉權、被選舉權與罷免權。每一會員為一權。學生會員、名譽會員、贊助會員無表決權、選舉權、被選舉權與罷免權。
                              </li>
                              <li>會員有遵守本會章程、決議及繳納會費之義務。</li>
                              <li>
                                會員有違反法令，章程或不遵守會員大會決議時，得經理事會決議，予以警告或停權處分，其危害團體情節重大者，得經會員大會決議予以除名。
                              </li>
                              <li>
                                會員有下列情事之一者，為出會：
                                <ul>
                                  <li>喪失會員資格者。</li>
                                  <li>經會員大會決議除名者。</li>
                                </ul>
                              </li>
                              <li>會員得以書面敘明理由向本會聲明退會。</li>
                            </ol>
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
                              第 三 章 &nbsp; 組 織 及 職 權
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
                            <ol>
                              <li>
                                本會以會員大會為最高權力機構。
                                會員人數超過三百人以上時得分區比例選出會員代表，再召開會員代表大會，行使會員大會職權。
                                會員代表任期三年，其各名額及選舉辦法由理事會擬訂，報請主管機關核備後行之。
                              </li>
                              <li>
                                會員大會之職權如下：
                                <ul>
                                  <li>訂定與變更章程。</li>
                                  <li>選舉及罷免理事、監事。</li>
                                  <li>議決入會費、常年會費、事業費及會員捐款之數額及方式。</li>
                                  <li>議決年度工作計畫、報告及預算、決算。</li>
                                  <li>議決會員之除名處分。</li>
                                  <li>議決財產之處分。</li>
                                  <li>議決本會之解散。</li>
                                  <li>議決與會員權利義務有關之其他重大事項。</li>
                                </ul>
                                前項第八款重大事項之範圍由理事會定之。
                              </li>
                              <li>
                                本會置理事十五人、監事五人，由會員選舉之，分別成立理事會、監事會。選舉前項理事、監事時，依計票情形得同時選出候補理事三人，候補監事一人，遇理事、監事出缺時，分別依序遞補之。
                              </li>
                              <li>
                                理事會之職權如下：
                                <ul>
                                  <li>審定會員之資格。</li>
                                  <li>選舉及罷免常務理事、理事長。</li>
                                  <li>議決理事、常務理事及理事長之辭職。</li>
                                  <li>聘免工作人員。</li>
                                  <li>擬訂年度工作計畫、報告及預算、決算。</li>
                                  <li>其他應執行事項。</li>
                                </ul>
                              </li>
                              <li>
                                監事會置常務監事一人，由監事互選之，監察日常會務，並擔任監事會主席。常務監事因事不能執行職務時，應指定監事一人代理之，未指定或不能指定時，由監事互推一人代理之。監事會主席（常務監事）出缺時應於一個月內補選之。
                              </li>
                              <li>
                                監事會之職權如下：
                                <ul>
                                  <li>監察理事會工作之執行。</li>
                                  <li>審核年度決算。</li>
                                  <li>選舉及罷免常務監事。</li>
                                  <li>議決監事及常務監事之辭職。</li>
                                  <li>其他應監察事項。</li>
                                </ul>
                              </li>
                              <li>
                                監事會置常務監事一人，由監事互選之，監察日常會務，並擔任監事會主席。常務監事因事不能執行職務時，應指定監事一人代理之，未指定或不能指定時，由監事互推一人代理之。監事會主席（常務監事）出缺時應於一個月內補選之。
                              </li>
                              <li>
                                理事、監事均為無給職，任期三年，連選得連任。理事長之連任，以一次為限。理事、監事之任期自召開本屆第一次理事會之日起計算。
                              </li>
                              <li>
                                理事、監事有下列情事之一者，應即解任：
                                <ul>
                                  <li>喪失會員資格者。</li>
                                  <li>因故辭職經理事會或監事會決議通過者。</li>
                                  <li>被罷免或撤免者。</li>
                                  <li>受停權處分期間逾任期二分之一者。</li>
                                </ul>
                              </li>
                              <li>
                                本會置秘書長一人，承理事長之命處理本會事務，其他工作人員若干人，由理事長提名經理事會通過聘免之，並報主管機關備查。
                                但秘書長之解聘應先報主管機關核備。秘書長為無給職。
                                工作人員權責及分層負責事項由理事會另定之。
                              </li>
                              <li>
                                本會得設各種委員會、小組或其他內部作業組織，其組織簡則經理事會通過後施行，變更時亦同。
                              </li>
                              <li>
                                本會得由理事會聘請名譽理事長一人，名譽理事、顧問若干人，其聘期與理事、監事之任期同。
                              </li>
                            </ol>
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
                              第 四 章 &nbsp; 會 議
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
                            <ol>
                              <li>
                                會員大會分定期會議與臨時會議二種，由理事長召集，召集時除緊急事故之臨時會議外應於十五日前以書面通知之。定期會議每年召開一次，臨時會議於理事會認為必要，或經會員五分之一以上之請求，或監事會函請召集時召開之。本會辦理法人登記後，臨時會議經會員十分之一以上之請求召開之。
                              </li>
                              <li>
                                會員不能親自出席會員大會時，得以書面委託其他會員代理，每一會員以代理一人為限。
                              </li>
                              <li>
                                會員大會之決議，以會員過半數之出席，出席人數較多數之同意行之。但下列事項之決議以出席人數三分之二以上同意行之。
                                <ul>
                                  <li>章程之訂定與變更。</li>
                                  <li>會員（會員代表）之除名。</li>
                                  <li>理事、監事之罷免。</li>
                                  <li>財產之處分。</li>
                                  <li>本會之解散。</li>
                                  <li>其他與會員權利義務有關之重大事項。</li>
                                </ul>
                                本會辦理法人登記後，章程之變更以出席人數四分之三以上之同
                                意或全體會員三分之二以上書面之同意行之。本會之解散，得隨時以全體會員三分之二以上之可決解散之。
                              </li>
                              <li>
                                理事會每四個月召開一次，監事會每四個月召開一次，必要時得召開聯席會議或臨時會議。前項會議召集時除臨時會議外，應於七日前以書面通知，會議之決議，各以理事、監事過半數之出席，出席人數較多數之同意行之。
                              </li>
                              <li>
                                理事應出席理事會議，監事應出席監事會議，理事會、監事會不得委託出席：理事、監事連續二次無故缺席理事會、監事會者，視同辭職。
                              </li>
                            </ol>
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
                              第 五 章 &nbsp; 經 費 及 會 計
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
                            <ol>
                              <li>
                                本會經費來源如下：
                                <ul>
                                  <li>
                                    會員會費：
                                    <ul>
                                      <li>普通會員入會費新台幣伍佰元，年會費新台幣壹仟元</li>
                                      <li>學生會員入會新台幣貳佰元及年會費為新台幣伍佰元</li>
                                      <li>贊助會員贊助費每年新台幣壹仟元以上</li>
                                      <li>
                                        永久會員入會費以第二章第七條第七款之規定，個人為新台幣貳萬元
                                      </li>
                                      <li>
                                        顧問公司、企業團體入會費新台幣伍千元(一年期)，永久團體會員會費新台幣伍萬元
                                      </li>
                                    </ul>
                                  </li>
                                  <li>事業費。</li>
                                  <li>委託收益。</li>
                                  <li>基金及其孳息。</li>
                                  <li>其他收入。</li>
                                </ul>
                              </li>
                              <li>本會會計年度以曆年為準，自每年一月一日起至十二月三十一日止。</li>
                              <li>
                                本會每年於會計年度開始前二個月由理事會編造年度工作計畫、收支預算表、員工待遇表，提會員大會通過(會員大會因故未能如期召開者，先提理監事聯席會議通過)，於會計年度開始前報主管機關核備。並於會計年度終了後二個月內由理事會編造年度工作報告、收支決算表、現金出納表、資產負債表、財產目錄及基金收支表，送監事會審核後，造具審核意見書送還理事會，提會員大會通過，於三月底前報主管機關核備(會員大會未能如期召開者，先報主管機關)。
                              </li>
                              <li>
                                本會於解散後，剩餘財產歸屬所在地之地方自治團體或主管機關指定之機關團體所有。
                              </li>
                            </ol>
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
                              第 六 章 &nbsp; 附 則
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
                            <ol>
                              <li>本章程未規定事項，悉依有關法令規定辦理。</li>
                              <li>本章程經會員大會通過，報經主管機關核備後施行，變更時亦同。</li>
                            </ol>
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

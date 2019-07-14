import React, {Component} from 'react';
import { Row, Col } from 'antd';
import CarouselComponent from '../carousel';
import './teacher.css';

const list = [
    "http://localhost:8443/images/jiaoshi/1.png",
    "http://localhost:8443/images/jiaoshi/2.png",
    "http://localhost:8443/images/jiaoshi/3.png",
    "http://localhost:8443/images/jiaoshi/4.png",
    "http://localhost:8443/images/jiaoshi/5.png",
    "http://localhost:8443/images/jiaoshi/6.png"
]

class App extends Component{
    render(){
        return (
            <div className="swt-teacher">
                <Row>
                    <CarouselComponent list={list} />
                </Row>
                <div className="content" style={{padding: "0 350px 5px 350px"}}>
                    <Row className="content-title">
                        <h1><span>教師 / 藝術家</span></h1>
                    </Row>
                    <Row className="content-message" type="flex" justify="space-between">
                        <Col span={12}>
                            <img src="http://localhost:8443/images/jiaoshi/bo.png" />
                        </Col>
                        <Col span={12}>
                            <div className="message-name"><h1>薄振坤</h1></div>
                            <div className="message-title">書法老師</div>
                            <div className="text">山東菏澤東明縣人。號華屋主人自幼酷愛書畫，稍長隨當地書法名家魯世傑先生潛心研習書法，二零零四年以專業全國第三名考入全國藝術名校魯迅美術學院。再校期間，作品多次被系內收藏，畢業作亦收入魯迅美術學院美術館藏。余熱愛書法，志在書法教育的普及和推廣，二零一一年與好友通道創辦四物堂，從事書法教育工作至今。</div>
                            <div className="message-button"><span>教師作品</span></div>
                        </Col>
                    </Row>
                    <Row className="content-message" type="flex" justify="space-between">
                        <Col span={12}>
                            <div className="message-name"><h1>吉騰飛</h1></div>
                            <div className="message-title">書法老師</div>
                            <div className="text">山東菏澤人，啟蒙與鄉賢魯世傑先生，又多受益於同門得魚師兄，後進修于中央美術學院，學習逾十載，兼習諸體，並讀古書畫輪，為書體局關大，勢兼方圓，尢弓工北碑斬截法。</div>
                            <div className="message-button right"><span>教師作品</span></div>
                        </Col>
                        <Col span={12} className="swt-teacher-image-margin">
                            <img src="http://localhost:8443/images/jiaoshi/ji.png" />
                        </Col>
                    </Row>
                    <Row className="content-message" type="flex" justify="space-between">
                        <Col span={12}><img src="http://localhost:8443/images/jiaoshi/zeng.png" /></Col>
                        <Col span={12}>
                            <div className="message-name"><h1>增壽</h1></div>
                            <div className="message-title">書法、篆刻老師</div>
                            <div className="text">生子•莊子故里 I •今山宋柬朗人安谀弘孢寺眹
                                 法名>佛寓俗拔遺車、大獬堂主人本科爭業于
                                 广西師范赛術系番法專桊•产西番法家協奢奢 M，
                                 南宁刻字赛術協身特酋批遨身域畢軚至今•从辜
                                 番法教睪多年•有着丰茁的成人專莱铕法教學轾
                                 驗•豸接觸到的钍奢各界愛好赛法人士傳遞了中
                                 榭*正統、以古笏師的费法華習理念</div>
                            <div className="message-button"><span>教師作品</span></div>
                        </Col>
                    </Row>
                    <Row className="content-message" type="flex" justify="space-between">
                        <Col span={12}>
                            <div className="message-name"><h1>郝偉</h1></div>
                            <div className="message-title">書法老師</div>
                            <div className="text">山東菏洚人，中央契術畢院頦士•師M 劉彥湖先
                                 生*中央実術學院械市餌計犖院、河北契術學院潷
                                 法犖院特聃教師。</div>
                            <div className="message-button right"><span>教師作品</span></div>
                        </Col>
                        <Col span={12} className="swt-teacher-image-margin">
                            <img src="http://localhost:8443/images/jiaoshi/hao.png" />
                        </Col>
                    </Row>
                    <Row className="content-message" type="flex" justify="space-between">
                        <Col span={12}><img src="http://localhost:8443/images/jiaoshi/jian.png" /></Col>
                        <Col span={12}>
                            <div className="message-name"><h1>博建坤</h1></div>
                            <div className="message-title">國畫老師</div>
                            <div className="text">生于山柬闷潷*四物堂創堂老師之一其犖以费法
                                 人手•師从劉脒角、黄采利、陳大中等老師•步趨
                                 于11二王■筆意•兼采智豕、歐陽詢、米芾等大師
                                 名宋之畏習字數年后•繼而學習繪蜜*受業千張
                                 障平、林海鍾、席朗亮等老師•以宋猱气、元猱
                                 韻*堅待 11不可嗬法、不可无法• K可无嗬一定之
                                 法■珠理•不斷用意搆思*堅待創作-</div>
                            <div className="message-button"><span>教師作品</span></div>
                        </Col>
                    </Row>
                    <Row className="content-message" type="flex" justify="space-between">
                        <Col span={12}>
                            <div className="message-name"><h1>劉家順</h1></div>
                            <div className="message-title">國畫老師</div>
                            <div className="text">山東日照人*从寧畨蜜教育行業多年*現專注于傅
                                 統繪蜜的硏習與傅統繪蜜教學方法的硏究現猱上
                                 海市契協t 麇*上海靑年畨法家協t t 麇2011
                                 年入興全阈首屆•沈尹默杯#靑年躲術大赛、上海
                                 躲術新人新作興、入圍全阈水墨茶遥"躲術大
                                 赛• 2012年人展上海靑年藝術展等，</div>
                            <div className="message-button right"><span>教師作品</span></div>
                        </Col>
                        <Col span={12} className="swt-teacher-image-margin">
                            <img src="http://localhost:8443/images/jiaoshi/liu.png" />
                        </Col>
                    </Row>
                    <Row className="content-message" type="flex" justify="space-between">
                        <Col span={12}><img src="http://localhost:8443/images/jiaoshi/sun.png" /></Col>
                        <Col span={12}>
                            <div className="message-name"><h1>孫濤</h1></div>
                            <div className="message-title">國畫老師</div>
                            <div className="text">生于山西太原。六璣學習書法•十四歲學習篆刻
                                 山西省畨法家協會會負本科畢業于中央契術學院
                                 中國蜜學院工筆人物專業钾究生畢業于中央契術
                                 學院造型學院壁蜜系一工作室蘇州大學藝術學院
                                 外聘教師。</div>
                            <div className="message-button"><span>教師作品</span></div>
                        </Col>
                    </Row>
                    <Row className="content-message" type="flex" justify="space-between">
                        <Col span={12}>
                            <div className="message-name"><h1>賈迎松</h1></div>
                            <div className="message-title">茶課老師</div>
                            <div>雄業子安徽蹊業犬犖茶犖系*有丰富的評茶、制茶
                                 經驗t經走遏各犬茶山*將理論深入贺踐</div>
                            <div className="message-button right"><span>教師作品</span></div>
                        </Col>
                        <Col span={12} className="swt-teacher-image-margin">
                            <img src="http://localhost:8443/images/jiaoshi/jia.png" />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default App;
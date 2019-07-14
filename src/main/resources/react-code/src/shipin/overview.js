import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './shipin.css';

const list = [
    {

    }
];

class App extends Component{

    render() {
        return (
            <div className="swt-shipin">
                <Row className="swt-shipin-categroy">
                    <Col span={3}><span className="swt-shipin-cname">課程類別</span></Col>
                    <Col span={3}><span className="swt-shipin-clabel">書法</span></Col>
                    <Col span={2}><span className="swt-shipin-clabel">國畫</span></Col>
                    <Col span={3}><span className="swt-shipin-clabel">策劃</span></Col>
                    <Col span={2}><span className="swt-shipin-clabel">其他</span></Col>
                </Row>
                <Row className="swt-shipin-categroy">
                    <Col span={3}><span className="swt-shipin-clabel">授課老師</span></Col>
                    <Col span={3}><span className="swt-shipin-clabel">薄振坤</span></Col>
                    <Col span={2}><span className="swt-shipin-clabel">郝偉</span></Col>
                    <Col span={3}><span className="swt-shipin-clabel">吉騰飛</span></Col>
                    <Col span={2}><span className="swt-shipin-clabel">增壽</span></Col>
                    <Col span={3}><span className="swt-shipin-clabel">博建坤</span></Col>
                    <Col span={3}><span className="swt-shipin-clabel">劉家順</span></Col>
                    <Col span={2}><span className="swt-shipin-clabel">孫濤</span></Col>
                    <Col span={3}><span className="swt-shipin-clabel">賈迎松</span></Col>
                </Row>
                <Row className="swt-shipin-categroy">
                    <Col span={3}><span className="swt-shipin-clabel">視頻類型</span></Col>
                    <Col span={3}><span className="swt-shipin-clabel">課程</span></Col>
                    <Col span={2}><span className="swt-shipin-clabel">講座</span></Col>
                    <Col span={3}><span className="swt-shipin-clabel">紀錄片</span></Col>
                    <Col span={2}><span className="swt-shipin-clabel">其他</span></Col>
                </Row>
                <Row className = "swt-shipin-action">
                    <Col span={23}>
                        <div className="swt-shipin-action-toggle">
                            <div className="swt-shipin-action-toggle-border">最新</div>
                            <div className="swt-shipin-action-toggle-border">最熱</div>
                            <div>精選</div>
                        </div>
                    </Col>
                    <Col span={1}>
                        <input type="checkbox" />
                        <span>免費</span>
                    </Col>
                </Row>
                <Row>
                    {
                        list.map(item => {
                            return (
                                <Col className="swt-shipin-item">
                                    <img src={item.url} />
                                    <span>{item.label}</span>
                                    <div>
                                        <span></span>
                                        <span>免費</span>
                                    </div>
                                    <div>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }

}

export default App;
import React, {Component} from 'react';
import { Row, Col } from 'antd';

class MenuComponent extends Component{

    render(){
        return (
            <Row className="menuRowHeight">
                <Col span={16}></Col>
                <Col span={1} className="lineHeight30 borderStyle3 marginRight20">
                    <Row>
                        <a>
                            <Col span={12} className="transformStyle">
                                <div className="fontStyle">activity</div>
                            </Col>
                            <Col span={12} className="verticalStyle">
                                <div>活動</div>
                            </Col>
                        </a>
                    </Row>
                </Col>
                <Col span={1} className="lineHeight30 borderStyle3 marginRight20">
                    <Row>
                        <a>
                            <Col span={12} className="transformStyle">
                                <div className="fontStyle">concine</div>
                            </Col>
                            <Col span={12} className="verticalStyle">
                                <div>物華</div>
                            </Col>
                        </a>
                    </Row>
                </Col>
                <Col span={1} className="lineHeight30 borderStyle3 marginRight20">
                    <Row>
                        <a>
                            <Col span={12} className="transformStyle">
                                <div className="fontStyle">video</div>
                            </Col>
                            <Col span={12} className="verticalStyle">
                                <div>視頻</div>
                            </Col>
                        </a>
                    </Row>
                </Col>
                <Col span={1} className="lineHeight30 borderStyle3 marginRight20">
                    <Row>
                        <a>
                            <Col span={12} className="transformStyle">
                                <div className="fontStyle">teacher</div>
                            </Col>
                            <Col span={12} className="verticalStyle">
                                <div>老師</div>
                            </Col>
                        </a>
                    </Row>
                </Col>
                <Col span={1} className="lineHeight30 borderStyle3 marginRight20">
                    <Row>
                        <a>
                            <Col span={12} className="transformStyle">
                                <div className="fontStyle">course</div>
                            </Col>
                            <Col span={12} className="verticalStyle">
                                <div>課程</div>
                            </Col>
                        </a>
                    </Row>
                </Col>
                <Col span={1} className="lineHeight30 borderStyle3 marginRight20">
                    <Row>
                        <a>
                            <Col span={12} className="transformStyle">
                                <div className="fontStyle">origin</div>
                            </Col>
                            <Col span={12} className="verticalStyle">
                                <div>我們</div>
                            </Col>
                        </a>
                    </Row>
                </Col>
            </Row>
        );
    }

}

export default MenuComponent;
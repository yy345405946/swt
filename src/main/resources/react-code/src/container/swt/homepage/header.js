import React, {Component} from 'react';
import { Row, Col, Input } from 'antd';

class HeaderComponent extends Component{

    render(){

        return (
            <Row style={{paddingBottom:20, paddingTop: 15}}>
                <Col span={11}>
                    <Row>
                        <span className="huaWenKaiTi">謝朝華于已披, 啓夕秀于未振</span>
                    </Row>
                    <Row>
                        <div className="lineBorder"></div>
                    </Row>
                </Col>
                <Col span={2} style={{textAlign: 'center', paddingTop: 7}}>
                    <img src="/images/homepage/logo.png" height="70px"/>
                </Col>
                <Col span={11}>
                    <Row>
                        <Col span={17}></Col>
                        <Col span={7}><Input placeholder="搜索"/></Col>
                    </Row>
                    <Row>
                        <div className="lineBorder"></div>
                    </Row>
                </Col>
            </Row>
        )
    }

}

export default HeaderComponent;
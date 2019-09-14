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
                <Col span={2} style={{textAlign: 'center'}}>
                    <img src="/images/homepage/logo.png" height="50px"/>
                </Col>
                <Col span={11}>
                    <Row>
                        <Col span={17}></Col>
                        <Col span={7}><Input placeholder="搜索"/></Col>
                        {/**<Col span={5} style={{float: "right"}}>
                            <a href="javascript:void(0);" className="linkStyle" style={{float: "right"}}>登陆</a>
                            <a href="javascript:void(0)" className="linkStyle" style={{float: "right", marginRight:20}}>注册</a>
                        </Col>**/}
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
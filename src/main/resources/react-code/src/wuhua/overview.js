import React, {Component} from 'react';
import { Row, Col } from 'antd';
import CarouselComponent from '../carousel';
import './wuhua.css';

const list = [
    "/images/wuhua/1.png",
    "/images/wuhua/2.png",
    "/images/wuhua/3.png",
    "/images/wuhua/4.png",
    "/images/wuhua/5.png",
    "/images/wuhua/6.png",
    "/images/wuhua/7.png"
]

class App extends Component{

    render(){
        return (
            <div className="swt-wuhua">
                <Row>
                    <Col>
                        <CarouselComponent list={list} />
                    </Col>
                </Row>
                <Row className="content">
                    <Col span={16}>
                        <Row>
                            <h1>玩物不喪志，物喜覓深心</h1>
                        </Row>
                        <Row><img src="http://localhost:8443/images/wuhua/wuxi.png" /></Row>
                    </Col>
                    <Col span={4} className="font-style center">
                        <img src="http://localhost:8443/images/wuhua/youzan.png" />
                        <div>購買藝術品請至</div>
                        <div>有獎商城</div>
                    </Col>
                    <Col span={4} className="font-style center">
                        <img src="http://localhost:8443/images/wuhua/weidian.png" />
                        <div>購買文房請至</div>
                        <div>微店</div>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default App;
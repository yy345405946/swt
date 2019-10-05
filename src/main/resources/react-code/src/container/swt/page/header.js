import React, {Component} from 'react';
import { Row, Col, Input } from 'antd';

class HeaderComponent extends Component{

    handleClick = (key) => {
        const { menuClickHandle } = this.props;

        if(typeof menuClickHandle === 'function'){
            menuClickHandle(key);
        }
    }

    render(){

        const { menuId } = this.props;

        return (
            <div className="swt-header">
                <Row style={{paddingBottom: 10}}>
                    <Col span={20}></Col>
                    <Col span={4}><Input placeholder="搜索" /></Col>
                    {/*<Col span={1}><a href="javascript:void(0);" style={{color: "#ccc", marginLeft: 10}}>注册</a></Col>
                    <Col span={1}><a href="javascript:void(0);" style={{color: "#ccc"}}>登录</a></Col>*/}
                </Row>
                <Row className="menu">
                    <Col span={10} className="border" style={{paddingBottom: 4}}>
                        <Row>
                            <Col span={8} className="menu-hover-border" style={{borderBottom: '2px solid #c5bfbf', paddingBottom: 4}}>
                                <a key={1} onClick={this.handleClick.bind(this, 1)} className={ "menu-item" + (menuId === 1? " active" : "") }>活動</a>
                            </Col>
                            <Col span={8}>
                                <a key={2} onClick={this.handleClick.bind(this, 2)} className={ "menu-item" + (menuId === 2? " active" : "") }>物華</a>
                            </Col>
                            <Col span={8}>
                                <a key={3} onClick={this.handleClick.bind(this, 3)} className={ "menu-item" + (menuId === 3? " active" : "") }>視頻</a>
                            </Col>
                        </Row>
                   </Col>
                    <Col span={4}>
                        <img src="/images/homepage/logo.png" height="70px"/>
                    </Col>
                    <Col span={10} className="border" style={{paddingBottom: 4}}>
                        <Row>
                            <Col span={8}>
                                <a key={4} onClick={this.handleClick.bind(this, 4)} className={ "menu-item" + (menuId === 4? " active" : "") }>課程</a>
                            </Col>
                            <Col span={8}>
                                <a key={5} onClick={this.handleClick.bind(this, 5)} className={ "menu-item" + (menuId === 5? " active" : "") }>老師</a>
                            </Col>
                            <Col span={8}>
                                <a key={6} onClick={this.handleClick.bind(this, 6)} className={ "menu-item" + (menuId === 6? " active" : "") }>我們</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default HeaderComponent;
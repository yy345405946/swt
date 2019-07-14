import React, { Component } from 'react';
import { Row, Col } from 'antd';
import CarouselComponent from '../carousel';

class Jianjie extends Component{
    constructor(props){
        super(props);

        this.state = {
            menuId: 1
        };
    }

    onClickHandle = (menuId) => {
        this.setState({
            menuId: menuId
        });
    }

    render() {
        const { options } = this.props;
        let content;

        if(this.state.menuId === 1){
            content = (
                options.jianjie.map(item => {
                    return (
                        <div className="jianjie-container">
                            <div className="jianjie-title">{item.title}</div>
                            <div className="jianjie-text">{item.text}</div>
                        </div>
                    )
                })
            )
        }else{
            content = (
                options.questions.map(item => {
                    return (
                        <div className="question-container">
                            <div className="question-title">{item.title}</div>
                            <div className="question-text">{item.text}</div>
                        </div>
                    )
                })
            )
        }

        return (
            <div className="swt-jianjie">
                <Row>
                    <CarouselComponent list={this.props.list} dots={true}/>
                </Row>
                <Row className="menu" >
                    <Col span={12} className="swt-jianjie-menuitem">
                        <a className={this.state.menuId===1? "active" : ""} onClick={this.onClickHandle.bind(this, 1)} href="javascript:void(0);">课程概览</a>
                    </Col>
                    <Col span={12} className="swt-jianjie-menuitem">
                        <a className={this.state.menuId===2? "active" : ""} onClick={this.onClickHandle.bind(this, 2)} href="javascript:void(0);">常见答疑</a>
                    </Col>
                </Row>
                <Row>
                    {content}
                </Row>
            </div>
        )
    }
}

export default Jianjie;
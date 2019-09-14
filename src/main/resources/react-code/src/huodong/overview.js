import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { List, Avatar, Icon } from 'antd';
import CarouselComponent from '../carousel';
import './huodong.css';

const list = [
    "/images/huodong/1.png",
    "/images/huodong/2.png",
    "/images/huodong/3.png",
    "/images/huodong/4.png",
    "/images/huodong/5.png"
];

const options = [
    {
        month: '11',
        date: '4月',
        title: '【堂間吃茶 | 八 預告】 岩茶和他的添香茶',
        category: '茶課',
        image: '/images/huodong/1.png',
        text: '“岩岩有茶，非岩不茶”，岩茶因而得名。屬半發酵茶，青茶（烏龍茶）岩岩有茶，非岩不茶”，岩茶因而得名。屬半發酵茶，青茶（烏龍茶）'
    }
]

const labelList = ["書法", "國畫", "茶課", "版畫", "名家", "展覽", "畢業展"]

class Item extends Component{
    render(){
        const {option} = this.props;
        return (
            <div className="swt-huodong-item">
                <Row>
                    <Col span={2}>
                        <div className="swt-huodong-item-datetime">
                            <div className="swt-huodong-item-month">{option.month}</div>
                            <div className="swt-huodong-item-date">{option.date}</div>
                        </div>
                    </Col>
                    <Col span={22}>
                        <Row style={{paddingLeft: 10}}>{option.category}</Row>
                        <Row className="swt-huodong-item-title">{option.title}</Row>
                    </Col>
                </Row>
                <Row className="swt-huodong-text">
                    <Col span={8}>
                        <img src={option.image} width={300} height={220}/>
                    </Col>
                    <Col span={16} className="swt-huodong-text-content">
                        {option.text}
                    </Col>
                </Row>
            </div>
        )
    }
}

class App extends Component{

    render(){
        return (
            <div className="swt-huodong">
                <Row>
                    <CarouselComponent list={list}/>
                </Row>
                <Row className="swt-huodong-content">
                    <Col span={18}>
                        {
                            options.map(item => {
                                return (
                                    <Row className="swt-huodong-content-item"><Item option={item} /></Row>
                                )
                            })
                        }
                    </Col>
                    <Col span={6}>
                        <Row>
                            <div className="swt-huodong-label">标签</div>
                            {
                                labelList.map(label => {
                                    return <Col span={6}>{label}</Col>
                                })
                            }
                        </Row>
                        <Row className="swt-huodong-remen">
                            <div className="swt-huodong-label swt-huodong-label-margin">熱門活動</div>
                            <div className="swt-huodong-renmen-item"><span>特邀各家系列课程报名通知</span></div>
                            <div className="swt-huodong-renmen-item"><span>书法《石鼓文》赏析</span></div>
                            <div className="swt-huodong-renmen-item"><span>上海博物馆藏瓷</span></div>
                            <div className="swt-huodong-renmen-item"><span>岩茶和他的添香茶</span></div>
                            <div className="swt-huodong-renmen-item"><span>老茶和他的添香茶</span></div>
                        </Row>
                        <Row>
                            <div className="swt-huodong-label swt-huodong-label-margin">時間搜索</div>
                            <div className="swt-huodong-shijian">
                                <span>2017年4月（2）</span>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default App;
import React, {Component} from 'react';
import { Row, Col } from 'antd';
import './kecheng.css';

const items = [
    {
        image: "http://localhost:8443/images/kechengjianjie/shufa.png",
        label: "書法",
        message: "四物堂書法課程以培養學員的書法學習與興趣為宗旨，再學習技法的同事輔以文化及藝術欣賞的內容。讓學員通過書法學習，更能理解漢子文化以及書法藝術特有的神韻。",
        items: [
            {index: 1, label: "基礎班"},
            {index: 2, label: "提高班"},
            {index: 3, label: "研習班"}
        ]
    },{
        image: "http://localhost:8443/images/kechengjianjie/guohua.png",
        label: "國畫",
        message: "國畫是中國獨有的繪畫方式。是用毛筆蘸水、墨、彩作畫于絹或紙上。可工可意，細膩如工華畫，絨毫畢現，簡約如寫意畫，寥寥數筆，神態俱足。四物堂國畫課程，從小協議入門，重點傳授國畫中的筆墨運用及構圖。",
        items: [
            {index: 4, label: "山水基礎班"},
            {index: 5, label: "花鳥基礎班"},
            {index: 6, label: "人物基礎班"},
            {index: 7, label: "山水提高班"},
            {index: 8, label: "花鳥提高班"},
            {index: 9, label: "人物提高班"},
            {index: 10, label: "花鳥研習班"}
        ]
    },{
         image: "http://localhost:8443/images/kechengjianjie/zhuanke.png",
         label: "篆刻",
         message: "印章是一種憑信工具，而中國的印章，更是一種文字、繪畫、書法、雕刻相結合的藝術。中國的印文化，古老而又獨具魅力。明代以降，文人參與到印章活動中，令中國印集印石之矣、篆刻之矣、文學之矣、字法之矣、章法之矣于一身。方寸之間，盡顯大千氣象。",
         items: [
            {index: 11, label: "基礎班"},
            {index: 12, label: "提高班"}
         ]
    },{
         image: "http://localhost:8443/images/kechengjianjie/chake.png",
         label: "茶課",
         message: "四物堂提倡順應節氣習茶，所以每季的茶課湖選擇二至三款時令茶進行學習。詳細介紹茶的品種，如何沖泡，如何品賞，及相關茶器的運用和茶席佈置等。小班授課。",
         items: [
            {index: 13, label: "初級班"},
            {index: 14, label: "中級班"}
         ]
    }
]

class ItemComponent extends Component{

    onClickHandle = (key) => {
        const { subMenuClickHandle } = this.props;

        if(typeof subMenuClickHandle === 'function'){
            subMenuClickHandle(key);
        }
    }

    render() {
        return (
            <div className="lineBorder" style={{marginTop: 80, lineHeight: "80px", paddingBottom: 40}}>
                <Row style={{textAlign: "center"}}>
                    <img src={this.props.image} />
                </Row>
                <Row style={{textAlign: "center"}}>
                    <h1><span style={{padding:10, borderBottom: "2px solid #444"}}>{this.props.label}</span></h1>
                </Row>
                <Row style={{fontFamily: "宋体", lineHeight: "28px"}}>
                    {this.props.message}
                </Row>
                <Row style={{fontFamily: "宋体", lineHeight: "28px", paddingTop: "28px"}} type="flex">
                    {
                        this.props.items.map(item => {
                            return (
                                <Col span={5} style={{marginBottom: 20}}>
                                    <a onClick={this.onClickHandle.bind(this, item.index)} className="swt-kc-button">{item.label}</a>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        );
    }
}

class KeCheng extends Component{

    render(){
        return (
            <div className="swt-kecheng">
                {
                    items.map(item => {
                        return (
                            <ItemComponent image={item.image} label={item.label} message={item.message} items={item.items} subMenuClickHandle={this.props.subMenuClickHandle}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default KeCheng;
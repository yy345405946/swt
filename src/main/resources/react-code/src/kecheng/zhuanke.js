import React, {Component} from 'react';
import Jianjie from './jianjie';

const list = [
    "http://localhost:8443/images/zhuanke/1.png",
    "http://localhost:8443/images/zhuanke/2.png",
    "http://localhost:8443/images/zhuanke/3.png",
    "http://localhost:8443/images/zhuanke/5.png",
]

const options = {
    jianjie: [
         {
             title: "篆刻基础班",
             text: "印章是一種憑信工具，而中國的印章，更是一種文字、繪畫、書法、雕刻相結合的藝術。"+
             "中國的印文化，古老而又具有魅力。明代以降，文人參與到印章活動中，令中國印集印石之矣、篆刻之矣、文學之矣、字法之矣、章法之矣于一身。"+
             "方寸之間，盡顯大千氣象。篆刻基礎班課課程分三個階段訓練，既篆書書法、打印稿、上石篆刻訓練。能做到熟悉篆字，明晰結構章法構成，熟練運到，"+
             "用秦漢印、流派印風格進行創作。"
         },{
             title: "招生對象",
             text: "有一定書法基礎的成人，且有耐心、恆心者優先。"
         },{
              title: "課程內容",
              text: "1.篆書書法課程 | 10堂課"+
              "《虎季子白盤》（大篆）、《袁安碑》（漢篆）、《吳均帖》（清、吳讓之）"+    "方寸之間，盡顯大千氣象。篆刻基礎班課課程分三個階段訓練，既篆書書法、打印稿、上石篆刻訓練。能做到熟悉篆字，明晰結構章法構成，熟練運到，"+
              "2.篆刻臨摹、創作 | 35堂課"+
              "打印稿，上石篆刻，秦漢印、流派印臨摹創作"
         },{
              title: "任課老師",
              text: "篆刻：增壽"
         },{
              title: "學習時間",
              text: "一年制課程。每週1堂課，每堂課2小時，小班製，每班6-8人，具體上課時間，報名後與教務老師商定。"
         },{
              title: "學費",
              text: "學費具體事宜見四物堂微信公眾號"
         },{
              title: "聯繫方式",
              text: "電話：021-5199 6399 微信：swtgyg"
         },{
              title: "上課地點",
              text: "上海市靜安區鎮寧路200號欣安大廈西27樓"
         },{
             title: "鄭重提示",
             text: "本堂為學習傳統藝術的課堂，本課堂需要認真對待，故不提供類休閒娛樂的消費體驗項目。淺嘗者慎報、先存消費者心態者恕不接待。"
         }
    ],
    questions: [
         {
             title: "",
             text: ""
         }
    ]
}

class Zhuanke extends Component{

    render() {
        return (
            <Jianjie list={list} options={options}/>
        )
    }

}

export default Zhuanke;
import React, {Component} from 'react';
import Jianjie from './jianjie';

const list = [
    "http://localhost:8443/images/shufatigao/1.png",
    "http://localhost:8443/images/shufatigao/2.png",
    "http://localhost:8443/images/shufatigao/3.png",
    "http://localhost:8443/images/shufatigao/4.png",
    "http://localhost:8443/images/shufatigao/5.png",
    "http://localhost:8443/images/shufatigao/6.png",
    "http://localhost:8443/images/shufatigao/7.png"
]

const options = {
    jianjie: [
         {
             title: "書法提高班",
             text: "博涉諸體 初習法度精要 稍能專精 始知心手會歸"
         },{
             title: "招生對象",
             text: "成人，對書法、書寫有一定基礎，並有進一步深入、持續學習書法的願望。" +
             "此課程原則上儘面向已完成四物堂初步課程三期學習的學員，並經任課老師推薦入學。非本堂初步課程"+
             "結業學員，報名時請提供至少三種書體的臨摹或創作作品原作，經本堂考察並核准後方可報名。"
         },{
             title: "課程簡介",
             text: "本課程主題部分將廣泛學習古代書法經典中不同書體（篆、隸、楷、行、草）的不同風格典型（同一字體會學習多本碑帖或書家）。考知書體、書家源流大體；對書法理論、書法史、以及與書法相關的篆刻展開初步的學習，漸能從多樣、繁雜的書體、書家、風格抽內在一致內‘經典’的有效性，漸養成‘以簡馭繁’的眼光和能力。"
         },{
              title: "課程內容、次第（碑帖舉例）",
              text: "1.篆書 | 《石鼓文》 《袁安碑》"+
              "2.隸書 | 《石門頌》 | 《張遷碑》 《禮器碑》"+
              "3.楷書 | 《鐘縣 二王小楷》 《張猛龍碑》 《趙夢親道德經》"+
              "4.行草 | 《集字聖教序》 《米沛行書》 《孫過庭書譜》 《十七帖》 《懷素自敘帖》 《廉頗 藺相如列傳》" +
              "5.漢印臨摹創作" +
              "6.書法分體技法與"
         },{
              title: "任課老師",
              text: "書法：薄振坤、增壽、吉騰飛 篆刻：薄振坤 特聘：馬新宇（魯迅美術學院 研究生導師）"
         },{
              title: "學習時間&人數",
              text: "兩年制課程。每年5月開課，統一進度隔週上課。每堂課2.5小時，共計45次課（兩年）。預計招收兩個班，每班10人左右，額滿即止。"
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

class Shufa extends Component{

    render() {
        return (
            <Jianjie list={list} options={options}/>
        )
    }

}

export default Shufa;
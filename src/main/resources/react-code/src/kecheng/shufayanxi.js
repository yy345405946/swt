import React, {Component} from 'react';
import Jianjie from './jianjie';

const list = [
    "http://localhost:8443/images/shufayanxi/1.png",
    "http://localhost:8443/images/shufayanxi/2.png",
    "http://localhost:8443/images/shufayanxi/3.png"
]

const options = {
    jianjie: [
         {
             title: "書法研習班",
             text: "研習班課程涉及諸多非傳統意義上的，經典文字遺存，先秦簡帛、雜體書刻、小品提銘，以期在提高班的基礎上，提示一更趟整全的書法傳統序列，並試在此眼光上，啓發一在此時代自我書寫的可能性。"
         },{
             title: "",
             text: "課程還涉及到古今文字的學習、書法遺存中典籍文獻部分的關讀、古代書輪、印輪的導讀、書法史論、書法美學。以期于字像、文心、書印內在的一貫、交互、提示書法學習必要的知識結構和基礎內涵。"
         },{
             title: "",
             text: "之外還有關放的討論、互動、展覽、遊訪，以期師生彼此有一精神生活的參與和往還。"
         },{
             title: "招生對象",
             text: "1.四物堂書法提高班畢業學院。2.四物堂以外學員，需經考核，錄取後方可入學。"
         },{
             title: "課程簡介",
             text: "本課程主題部分將廣泛學習古代書法經典中不同書體（篆、隸、楷、行、草）的不同風格典型（同一字體會學習多本碑帖或書家）。考知書體、書家源流大體；對書法理論、書法史、以及與書法相關的篆刻展開初步的學習，漸能從多樣、繁雜的書體、書家、風格抽內在一致內‘經典’的有效性，漸養成‘以簡馭繁’的眼光和能力。"
         },{
              title: "課程內容",
              text: "一、日課及几種學習方法 1.二王、宋元尺牘書選讀 2.古代書信格式體例舉要 3.二王尺牘臨摹 4.宋元尺牘臨摹"+
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

class App extends Component{

    render() {
        return (
            <Jianjie list={list} options={options}/>
        )
    }

}

export default App;
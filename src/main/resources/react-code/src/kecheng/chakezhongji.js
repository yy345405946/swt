import React, {Component} from 'react';
import Jianjie from './jianjie';

const list = [
    "http://localhost:8443/images/chakezhongji/1.png",
    "http://localhost:8443/images/chakezhongji/2.png",
    "http://localhost:8443/images/chakezhongji/3.png",
    "http://localhost:8443/images/chakezhongji/4.png",
]

const messageList = [
    {
        title: "書法基础班",
        text: "初步課程會學習三種書體的几種經典之作，希望初學者能建立起對書法初步、典正的知見，同事"+
        "也希望初學者能對自我的書寫漸有切己的體認，能試繁簡、辨書體、明法度、知筆性。"
    },{
        title: "招生對象",
        text: "成年，有誤基礎不限，但要對書法學習有興趣、對傳統文化存敬意。"
    },{
         title: "課程內容、次第（碑帖舉例）",
         text: "1.隸書 《乙英碑》 | 15次課"+
         "2.楷書 顏真卿 《勤禮碑》 | 歐陽詢 《九成宮禮泉銘》 （二選一） | 15次課"+
         "3.行書 王義之 《王義之行書卷》 | 15次課"+
         "打印稿，上石篆刻，秦漢印、流派印臨摹創作"
    },{
         title: "任課老師",
         text: "書法基礎：薄振坤、增壽、吉騰飛"
    },{
         title: "學習時間&人數",
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
]

class App extends Component{

    render() {
        return (
            <KeChangeCard list={list} messageList={messageList}/>
        )
    }

}

export default App;
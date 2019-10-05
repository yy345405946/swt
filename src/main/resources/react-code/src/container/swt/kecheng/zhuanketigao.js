import React, {Component} from 'react';
import Jianjie from './jianjie';

const list = [
    "http://localhost:8443/images/zhuanketigao/1.png",
    "http://localhost:8443/images/zhuanketigao/2.png",
    "http://localhost:8443/images/zhuanketigao/3.png",
    "http://localhost:8443/images/zhuanketigao/4.png",
]

const options = {
    jianjie: [
         {
             title: "篆刻基础班",
             text: "提高班旨在通過課程學習，較系統的認識篆刻發展的歷史脈絡，接觸和學習不同時期的印章風"+
             "格，並嘗試仿意創作。"
         },{
             title: "招生對象",
             text: "篆刻基礎班結業學員；有較好篆刻基礎者；四物堂以外學員需經考核，通過后入學。"
         },{
              title: "課程內容",
              text: "第一章 古璽印 第二章 秦印 第三章 漢印 第四章 隋唐官印 第五章五代.宋官印 第六章 元花押 第七章明清流派（上） 第八章明清流派（下） 第九章清末民初"
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
             text: "本堂為學習傳統藝術的課堂，本課程需要認真對待，故不提供類休息娛樂的消費體驗項目。淺嘗者慎報、先存消費者心態者恕不接待。"
         }
    ],
    questions: [
        {
            title: "",
            text: ""
        }
    ]
}

class Zhuanketigao extends Component{

    render() {
        return (
            <Jianjie list={list} options={options}/>
        )
    }

}

export default Zhuanketigao;
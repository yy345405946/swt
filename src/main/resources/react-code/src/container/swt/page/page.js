import React, { Component } from 'react';
import { Layout } from 'antd';
import HeaderComponent from './header';
import FooterComponent from './footer';
import Huodong from '../huodong/overview';
import WuHua from '../wuhua/overview';
import Shipin from '../shipin/overview';
import Kecheng from '../kecheng/overview';
import ShufaJiChu from '../kecheng/shufa';
import ShufaTigao from '../kecheng/shufatigao';
import ShufaYanxi from '../kecheng/shufayanxi';
import Shanshui from '../kecheng/shanshui';
import ShanshuiTigao from '../kecheng/shanshuitigao';
import Huaniao from '../kecheng/huaniao';
import HuaniaoTigao from '../kecheng/huaniaotigao';
import HuaniaoYanxi from '../kecheng/huaniaoyanxi';
import Renwu from '../kecheng/renwu';
import RenwuTigao from '../kecheng/renwutigao';
import Zhuanke from '../kecheng/zhuanke';
import ZhuankeTigao from '../kecheng/zhuanketigao';
import Chake from '../kecheng/chake';
import ChakeGaoji from '../kecheng/chakegaoji';
import Teacher from '../teacher/overview';
import './page.css';

const { Content, Header, Footer } = Layout;

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            menuId: props.menuId,
            subMenuId: 0
        }
    }

    menuClickHandle = (menuId) => {
        this.setState({
            menuId: menuId,
            subMenuId: 0
        });
    }

    subMenuClickHandle = (subMenuId) => {
        this.setState({
            subMenuId: subMenuId
        });
    }

    generate = (menuId, subMenuId) => {
        if(menuId === 1){
            return <Huodong />
        }else if(menuId === 2){
            return <WuHua />
        }else if(menuId === 3){
            return <Shipin />
        }else if(menuId === 4){
            switch(subMenuId){
                case 0:
                    return <Kecheng subMenuClickHandle={this.subMenuClickHandle}/>
                    break;
                case 1:
                    return <ShufaJiChu />
                    break;
                case 2:
                    return <ShufaTigao />
                    break;
                case 3:
                    return <ShufaYanxi />
                    break;
                case 4:
                    return <Shanshui />
                    break;
                case 5:
                    return <Huaniao />
                    break;
                case 6:
                    return <Renwu />
                    break;
                case 7:
                    return <ShanshuiTigao />
                    break;
                case 8:
                    return <HuaniaoTigao />
                    break;
                case 9:
                    return <RenwuTigao />
                    break;
                case 10:
                    return <HuaniaoYanxi />
                    break;
                case 11:
                    return <Zhuanke />
                    break;
                case 12:
                    return <ZhuankeTigao />
                    break;
                case 13:
                    return <Chake />
                    break;
                case 14:
                    return <ChakeGaoji />
                    break;
            }
        }else if(menuId === 5){
            return <Teacher />
        }
    }

    render() {

        const { menuId, subMenuId } = this.state;

        return (
            <div className="swt-page">
                <Layout>
                    <Header className="header">
                        <HeaderComponent menuId={menuId} menuClickHandle={this.menuClickHandle}/>
                    </Header>
                    <Content>
                        {this.generate(menuId, subMenuId)}
                    </Content>
                    <Footer>
                        <FooterComponent />
                    </Footer>
                </Layout>
            </div>
        )
    }

}

export default App;
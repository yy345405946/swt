import React, {Component} from 'react';
import { Layout } from 'antd';
import CarouselComponent from '../carousel';
import HeaderComponent from './header';
import MenuComponent from './menu';
import FooterComponent from '../footer';
import './homepage.css';

const { Header, Content, Footer } = Layout;

const list = [
    "http://192.168.0.139:8443/images/homepage/wugewu.png",
    "http://192.168.0.139:8443/images/homepage/wukaiwu.png",
    "http://192.168.0.139:8443/images/homepage/wuruwu.png",
    "http://192.168.0.139:8443/images/homepage/wutiwu.png",
    "http://192.168.0.139:8443/images/homepage/wuwowu.png",
    "http://192.168.0.139:8443/images/homepage/wuxiangwu.png"
]

class HomePage extends Component{

    render(){
        return (
            <div style={{width: "100%", height: "100%"}}>
                <Layout>
                    <Header style={{width: "100%", height: "20%"}}>
                        <HeaderComponent />
                    </Header>
                    <Content style={{paddingBottom: 50}}>
                        <CarouselComponent list={list} />
                        <MenuComponent />
                    </Content>
                    <Footer>
                        <FooterComponent />
                    </Footer>
                </Layout>
            </div>
        )
    }

}

export default HomePage;
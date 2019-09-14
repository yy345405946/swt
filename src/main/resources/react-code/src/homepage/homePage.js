import React, {Component} from 'react';
import { Layout } from 'antd';
import CarouselComponent from '../carousel';
import HeaderComponent from './header';
import MenuComponent from './menu';
import FooterComponent from '../page/footer';
import './homepage.css';

const { Header, Content, Footer } = Layout;

const list = [
    "/images/homepage/wugewu.png",
    "/images/homepage/wukaiwu.png",
    "/images/homepage/wuruwu.png",
    "/images/homepage/wutiwu.png",
    "/images/homepage/wuwowu.png",
    "/images/homepage/wuxiangwu.png"
]

class HomePage extends Component{

    render(){
        return (
            <div style={{width: "100%", height: "100%", margin: '0 auto'}}>
                <Layout>
                    <Header style={{width: "100%", height: "20%"}}>
                        <HeaderComponent />
                    </Header>
                    <Content style={{paddingBottom: 30}}>
                        <CarouselComponent list={list} />
                        <MenuComponent onMenuClick={this.props.onMenuClick}/>
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
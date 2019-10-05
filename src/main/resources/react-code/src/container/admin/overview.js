import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import CarouselAdmin from './carousel/index';
import HuodongAdmin from './huodong/index';
import KechengAdmin from './kecheng/index';
import ShipinAdmin from './shipin/index';
import TeacherAdmin from './teacher/index';
import './admin.css';

const { Header, Content } = Layout;
const { SubMenu } = Menu;

const menuObj = {
    1: {
        menu: '轮  播',
        content: <CarouselAdmin />
    },
    2: {
        menu: '活  动',
        content: <HuodongAdmin />
    },
    3: {
        menu: '课  程',
        content: <KechengAdmin />
    },
    4: {
        menu: '视  频',
        content: <ShipinAdmin />
    },
    5: {
        menu: '教  师',
        content: <TeacherAdmin />
    }
}

export default class AdminOverview extends Component{
    constructor(props){
        super(props);

        this.state={ key: "1" }
    }  

    handleMenuChange = e => {
        this.setState( { key: e.key } );
    }

    render(){
        const { key } = this.state;

        return (
            <Layout className="swt-admin">
                <Header>
                    <Menu 
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[this.state.key]}
                        style={{ lineHeight: '64px' }}
                        onClick={this.handleMenuChange}
                    >
                        {
                            Object.keys(menuObj).map(key => {
                                return <Menu.Item key={key}>{menuObj[key].menu}</Menu.Item>
                            })
                        }
                    </Menu>
                </Header>
                <Content>
                    {
                        menuObj[key].content
                    }
                </Content>
            </Layout>
        )
    }
}
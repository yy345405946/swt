import React, { Component } from 'react';
import { Tabs } from 'antd';
import Teacher from './teacher';
import Production from './production';
import './teacher.css';

const { TabPane } = Tabs;

export default class TeacherAdmin extends Component {

    render() {
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="教师" key="1">
                    <Teacher />
                </TabPane>
                <TabPane tab="作品" key="2">
                    <Production />
                </TabPane>
            </Tabs>
        )
    }

}
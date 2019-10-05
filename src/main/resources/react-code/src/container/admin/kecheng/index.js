import React, { Component } from 'react';
import { Tabs } from 'antd';
import AssetClass from './class';
import SubAssetClass from './subClass';
import Details from './details';
import Problem from './problem';
import './kecheng.css';

const { TabPane } = Tabs;

export default class KechengAdmin extends Component {

    render() {
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="标签" key="1">
                    <AssetClass />
                </TabPane>
                <TabPane tab="课程" key="2">
                    <SubAssetClass />
                </TabPane>
                <TabPane tab="课程概览" key="3">
                    <Details />
                </TabPane>
                <TabPane tab="常见答疑" key="4">
                    <Problem />
                </TabPane>
            </Tabs>
        )
    }

}
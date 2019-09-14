import React, {Component} from 'react';
import { Row, Col } from 'antd';

const menu = [
    {key: 1, name: 'activity', label: '活動'},
    {key: 2, name: 'concine', label: '物華'},
    {key: 3, name: 'video', label: '視頻'},
    {key: 4, name: 'teacher', label: '老師'},
    {key: 5, name: 'course', label: '課程'},
    {key: 6, name: 'origin', label: '我們'}
];

class MenuComponent extends Component{

    onMenuClick = (e) => {
        this.props.onMenuClick(Number(e.currentTarget.dataset.key));
    }

    render(){
        return (
            <Row className="menuRowHeight wst-homepage-menu">
                <Col span={16}></Col>
                {
                    menu.map(item => {
                        return (
                            <Col span={1} className="lineHeight30 borderStyle3 marginRight20">
                                <Row>
                                    <a data-key={item.key} href="javascript:void(0);" onClick={this.onMenuClick}>
                                        <Col span={12} className="transformStyle">
                                            <div className="fontStyle">{item.name}</div>
                                        </Col>
                                        <Col span={12} className="verticalStyle">
                                            <div>{item.label}</div>
                                        </Col>
                                    </a>
                                </Row>
                            </Col>
                        )
                    })
                }
            </Row>
        );
    }

}

export default MenuComponent;
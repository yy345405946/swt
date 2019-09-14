import React, { Component } from 'react';
import { Popover, Icon } from 'antd';

export default class PopoverComponent extends Component{
    
    render(){
        const content = (
            <span>{this.props.content}</span>
        );

        return (
            <Popover autoAdjustOverflow={true} content={content} overlayStyle={{width: '70%'}}>
                <Icon type="file" />
            </Popover>
        )
    }
}
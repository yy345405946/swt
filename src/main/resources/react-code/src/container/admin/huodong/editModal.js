import React, { Component } from 'react';
import { Button, Modal, Form, Input, Icon } from 'antd';

const { TextArea } = Input;

class Admin extends Component{

    constructor(props){
        super(props);

        this.state={ visible: false }
    }

    handleShowModal = () => {
        this.setState( { visible: true } );
    }

    handleCloseModal = () => {
        this.setState( { visible: false } );
    }

    render(){
        const { isEdit } = this.props;
        const okTextStr = isEdit? "确定" : "新建";

        return (
            <span>
                {
                    isEdit? <a href="javascript:void(0)" onClick={this.handleShowModal}>编辑</a> 
                    : <a type="primary" onClick={this.handleShowModal}>
                        <Icon type="edit" style={{fontSize: 20}} />
                        <span>新建活动</span>
                    </a>
                }
                <Modal
                    title="活动"
                    visible={this.state.visible}
                    onCancel={this.handleCloseModal}
                    footer={null}
                >
                    <AdminForm isEdit={this.props.isEdit} record={this.props.record}/>
                </Modal>
            </span>
        )
    }
}

class AdminContent extends Component{

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if(!err){
                console.log('received values of form: ', values);
            }
        })
    }

    render(){
        const { isEdit, record } = this.props;

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4}
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 20}
            }
        }
        const itemLayout = {
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 24}
            }
        }

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item {...itemLayout}>
                    {
                        getFieldDecorator('title', {
                            initialValue: isEdit? record.title : ''
                        })(
                            <Input placeholder="请输入活动标题"/>
                        )
                    }
                </Form.Item>
                <Form.Item label="活动说明">
                    {
                        getFieldDecorator('description', {
                            initialValue: isEdit? record.description : ''
                        })(
                            <TextArea />
                        )
                    }
                </Form.Item>
                <Form.Item label="活动标签">
                    {
                        getFieldDecorator('type', {
                            initialValue: isEdit? record.type : ''
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label="资源信息">
                    {
                        getFieldDecorator('content', {
                            initialValue: isEdit? record.content : ''
                        })(
                            <Input placeholder="请填写活动链接"/>
                        )
                    }
                </Form.Item>
                <Form.Item {...itemLayout} style={{textAlign: 'center'}}>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        )
    }
}

const AdminForm = Form.create({ name: 'swt-active-admin-form' })(AdminContent);

export default Admin;
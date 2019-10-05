import React, { Component } from 'react';
import { Button, Modal, Form, Input, Select, Icon } from 'antd';

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
                        <span>新建视频</span>
                    </a>
                }
                <Modal
                    title="视频"
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
                <Form.Item label="课程类别">
                    {
                        getFieldDecorator('assetClass', {
                            initialValue: isEdit? record.assetClass : ''
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label="授课老师">
                    {
                        getFieldDecorator('teacher', {
                            initialValue: isEdit? record.teacher : ''
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label="视频类别">
                    {
                        getFieldDecorator('type', {
                            initialValue: isEdit? record.type : ''
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label="精选">
                    {
                        getFieldDecorator('mark', {
                            initialValue: isEdit? record.mark : 'Y'
                        })(
                            <Select>
                                <Select.Option value="Y">是</Select.Option>
                                <Select.Option value="N">否</Select.Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="链接">
                    {
                        getFieldDecorator('url', {
                            initialValue: isEdit? record.url : ''
                        })(
                            <Input />
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

const AdminForm = Form.create({ name: 'swt-shipin-admin-form' })(AdminContent);

export default Admin;
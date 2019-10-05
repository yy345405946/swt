import React, { Component } from 'react';
import { Button, Modal, Form, Input, Icon, Upload } from 'antd';

const { TextArea } = Input;

class Admin extends Component {

    constructor(props) {
        super(props);

        this.state = { visible: false }
    }

    handleShowModal = () => {
        this.setState({ visible: true });
    }

    handleCloseModal = () => {
        this.setState({ visible: false });
    }

    render() {
        const { isEdit } = this.props;
        const okTextStr = isEdit ? "确定" : "新建";

        return (
            <span>
                {
                    isEdit ? <a href="javascript:void(0)" onClick={this.handleShowModal}>编辑</a>
                        : <a type="primary" onClick={this.handleShowModal}>
                            <Icon type="edit" style={{ fontSize: 20 }} />
                            <span>新建轮播</span>
                        </a>
                }
                <Modal
                    title="轮播"
                    visible={this.state.visible}
                    onCancel={this.handleCloseModal}
                    footer={null}
                >
                    <AdminForm isEdit={this.props.isEdit} record={this.props.record} />
                </Modal>
            </span>
        )
    }
}

class AdminContent extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('received values of form: ', values);
            }
        })
    }

    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    render() {
        const { isEdit, record } = this.props;

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 }
            }
        }
        const itemLayout = {
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 24 }
            }
        }

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="页面">
                    {
                        getFieldDecorator('menu', {
                            initialValue: isEdit ? record.menu : ''
                        })(
                            <Input />
                            )
                    }
                </Form.Item>
                <Form.Item label="图片">
                    {getFieldDecorator('image', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="image" action="/upload" listType="picture">
                            <Button>
                                <Icon type="upload" /> Click to upload
                            </Button>
                        </Upload>,
                    )}
                </Form.Item>
                <Form.Item {...itemLayout} style={{ textAlign: 'center' }}>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        )
    }
}

const AdminForm = Form.create({ name: 'swt-carousel-admin-form' })(AdminContent);

export default Admin;
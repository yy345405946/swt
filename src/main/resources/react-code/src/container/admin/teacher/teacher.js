import React, { Component } from 'react';
import { Table, Divider, Popconfirm, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import ImagePopover from '../imagePopover';
import EditModal from './teacherEditModal';

export default class KechengAdmin extends Component {
    constructor(props) {
        super(props);

        this.columns = [
            {
                title: '顺序',
                dataIndex: 'order',
                width: '2%',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.order - b.order
            },
            {
                title: '姓名',
                dataIndex: 'name',
                width: '4%',
                ...this.getColumnSearchProps('name')
            },
            {
                title: '称谓',
                dataIndex: 'title',
                width: '4%'
            },
            {
                title: '头像',
                dataIndex: 'image',
                width: '2%',
                render: (text, record) => <ImagePopover content={text} />
            },
            {
                title: '描述',
                dataIndex: 'description',
                width: '27%'
            }, {
                title: "操作",
                width: '4%',
                render: (text, record) => {
                    return (
                        <span>
                            <EditModal isEdit={true} record={record}/>
                            <Divider type="vertical" />
                            <Popconfirm title="确定要删除吗?" onConfirm={() => this.handleRemove(record.key)}>
                                <a>删除</a>
                            </Popconfirm>
                        </span>
                    )
                }

            }
        ];

        this.state = {
            searchText: '',
            data: [
                {
                    key: '1',
                    order: '1',
                    name: '吉腾飞',
                    title: '书法老师',
                    image: '',
                    description: '山東菏澤人，啟蒙與鄉賢魯世傑先生，又多受益於同門得魚師兄，後進修于中央美術學院，學習逾十載，兼習諸體，並讀古書畫輪，為書體局關大，勢兼方圓，尢弓工北碑斬截法。'
                }
            ]
        }
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`搜索 `}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    搜索
                </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    重置
                </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    handleRemove = (key) => {
        console.log('remove:', key);
    }

    handleChange = (pagination, filters, sorter) => {
        console.log('params:', pagination, filters, sorter);
    }

    render() {
        return (
            <div>
                <div className="swt-teacher-create">
                    <EditModal />
                </div>
                <Table
                    columns={this.columns}
                    dataSource={this.state.data}
                    onChange={this.handleChange}
                />
            </div>
        )
    }

}
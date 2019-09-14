import React, { Component } from 'react';
import { Table, Divider, Popconfirm, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import Popover from '../popover';
import EditModal from './editModal';
import './carousel.css';

export default class CarouselAdmin extends Component {
    constructor(props) {
        super(props);

        this.columns = [
            {
                title: '标题',
                dataIndex: 'title',
                width: '10%',
                ...this.getColumnSearchProps('title')
            },
            {
                title: '活动描述',
                dataIndex: 'description',
                width: '4%',
                render: (text, record) => {
                    return <Popover content={text}/>
                }
            },
            {
                title: '活动标签',
                dataIndex: 'type',
                width: '4%',
                ...this.getColumnSearchProps('type')
            },
            {
                title: '资源信息',
                dataIndex: 'content',
                width: '15%',
                ...this.getColumnSearchProps('content')
            },
            {
                title: '更新时间',
                dataIndex: 'updatedDate',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.updatedDate - b.updatedDate,
                width: '4%',
                ...this.getColumnSearchProps('updatedDate')
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
                    title: '【堂間吃茶 | 八 預告】 岩茶和他的添香茶',
                    description: '“岩岩有茶，非岩不茶”，岩茶因而得名。屬半發酵茶，青茶（烏龍茶）岩岩有茶，非岩不茶”，岩茶因而得名。屬半發酵茶，青茶（烏龍茶）',
                    type: '茶課',
                    content: '',
                    updatedDate: '2019-09-14'
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
                <div className="swt-carousel-create">
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
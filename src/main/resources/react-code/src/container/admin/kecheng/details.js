import React, { Component } from 'react';
import { Table, Divider, Popconfirm, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import EditModal from './detailsEditModal';

export default class KechengAdmin extends Component {
    constructor(props) {
        super(props);

        this.columns = [
            {
                title: '标签',
                dataIndex: 'assetClass',
                width: '4%',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.assetClass - b.assetClass,
                ...this.getColumnSearchProps('assetClass')
            },
            {
                title: '课程',
                dataIndex: 'subAssetClass',
                width: '4%',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.subAssetClass - b.subAssetClass,
                ...this.getColumnSearchProps('subAssetClass')
            },
            {
                title: '顺序',
                dataIndex: 'order',
                width: '2%',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.order - b.order,
            },
            {
                title: '标题',
                dataIndex: 'title',
                width: '5%',
                ...this.getColumnSearchProps('title')
            },
            {
                title: '描述',
                dataIndex: 'description',
                width: '25%',
                ...this.getColumnSearchProps('description')
            }, 
            {
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
                    assetClass: '书法',
                    subAssetClass: '基础班',
                    order: '1',
                    title: '書法基础班',
                    description: '初步課程會學習三種書體的几種經典之作，希望初學者能建立起對書法初步、典正的知見，同事也希望初學者能對自我的書寫漸有切己的體認，能試繁簡、辨書體、明法度、知筆性。'
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
                <div className="swt-details-create">
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
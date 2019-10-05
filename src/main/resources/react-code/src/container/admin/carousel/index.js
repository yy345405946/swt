import React, { Component } from 'react';
import { Table, Divider, Popconfirm, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import reqwest from 'reqwest';
import ImagePopover from '../imagePopover';
import EditModal from './editModal';
import './carousel.css';

export default class CarouselAdmin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            loading: false,
            data: [
                {
                    id: '1',
                    menu: '首页',
                    image: 'aaaa'
                }
            ]
        }
    }

    componentDidMount() {

    }

    fetchData = () => {
        this.setState( { loading: true } );
        reqwest({
            url: '/activity/findByPage',
            method: 'get',
            data: {
                results: 10
            },
            type: 'json',
        }).then(data => {
            const pagination = { ...this.state.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState({
                loading: false,
                data: data.results,
                pagination,
            });
        });
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

    handleTableChange = (pagination, filters, sorter) => {
        console.log('params:', pagination, filters, sorter);
    }

    render() {
        const columns = [
            {
                title: '页面',
                dataIndex: 'menu',
                width: '10%',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.menu - b.menu,
                ...this.getColumnSearchProps('menu')
            },
            {
                title: '图片',
                dataIndex: 'image',
                width: '10%',
                render: (text, record) => (<ImagePopover content={text} />)
            },{
                title: "操作",
                width: '10%',
                render: (text, record) => {
                    return (
                        <span>
                            <EditModal isEdit={true} record={record} />
                            <Divider type="vertical" />
                            <Popconfirm title="确定要删除吗?" onConfirm={() => this.handleRemove(record.key)}>
                                <a>删除</a>
                            </Popconfirm>
                        </span>
                    )
                }

            }
        ];

        return (
            <div>
                <div className="swt-carousel-create">
                    <EditModal />
                </div>
                <Table
                    columns={columns}
                    dataSource={this.state.data}
                    loading={this.state.loading}
                    onChange={this.handleTableChange}
                />
            </div>
        )
    }

}
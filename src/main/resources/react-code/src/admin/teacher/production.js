import React, { Component } from 'react';
import { Table, Divider, Popconfirm, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import Popover from '../popover';
import EditModal from './productionEditModal';

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
                sorter: (a, b) => a.order - b.order
            },
            {
                title: '问题',
                dataIndex: 'problem',
                width: '20%',
                ...this.getColumnSearchProps('problem')
            },
            {
                title: '答案',
                dataIndex: 'answer',
                width: '10%',
                render: (text, record) => {
                    return <Popover content={text} />
                }
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
                    assetClass: '书法',
                    subAssetClass: '基础班',
                    order: '1',
                    problem: '為什麼不從篆書或楷書開始，而是從隸書開始？',
                    answer: '古文字的學習雖然是書法學習中應有的內涵，但初學以方便為要，所以未從“高古”的篆書開始，而隸書與我們今天的文字同屬所謂“今文字”，便于切入當下的認知和書寫，加上其書體成熟、內涵完備，有較明晰的規矩法度可以依循，並且其“去古不遠”，與篆書字體、形態還有仿佛可辨的開源脈絡，也為後一階段提高班學習的“上溯”做一初步準備。之外隸書不僅可以上溯“篆箱”，亦可在流衍明隸楷書之變，對於緊接的楷書學習也大有好處。'
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
                <div className="swt-teacher-production-create">
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
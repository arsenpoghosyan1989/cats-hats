import React, { useState } from 'react';
import { Table } from 'antd';

import { SortableContainer as sortableContainer, SortableElement as sortableElement, SortableHandle as sortableHandle} from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';

const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

const columns = [
  {
    title: 'Sort',
    dataIndex: 'sort',
    width: 30,
    className: 'drag-visible',
    render: () => <DragHandle />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    index: 0,
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    index: 1,
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    index: 2,
  },
];

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

function SortableTable (){
    const [dataSource, setDatasource] =  useState<any>(data)

    const onSortEnd = ({ oldIndex, newIndex }) => {
        if (oldIndex !== newIndex) {
            const newData = [...dataSource]
            newData.splice(newIndex, 0, newData.splice(oldIndex, 1)[0]);
            setDatasource(newData);
        }
    };

    const DraggableContainer = props => (
        <SortableContainer
            useDragHandle
            disableAutoscroll
            helperClass="row-dragging"
            onSortEnd={onSortEnd}
            {...props}
        />
    );

    const DraggableBodyRow = ({ className, style, ...restProps }) => {
        const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
        return <SortableItem index={index} {...restProps} />;
    };

    return (
        <Table
            pagination={false}
            dataSource={dataSource}
            columns={columns}
            rowKey="index"
            components={{
                body: {
                wrapper: DraggableContainer,
                row: DraggableBodyRow,
                },
            }}
        />
    );
}

export default SortableTable
import React from 'react';
import { Table as AntdTable, TableProps } from 'antd';
import { PageData } from './types';
import getPagination from './utils/getPagination';
import { TableContainer } from './style';

interface TProps extends TableProps<Record<string, unknown>> {
  pageData?: PageData;
}

const Table: React.FC<TProps> = (props) => {
  const { pageData, pagination = {}, rowKey = 'id' } = props;

  return (
    <TableContainer>
      <AntdTable
        dataSource={pageData?.listData}
        pagination={getPagination(pagination, pageData)}
        rowKey={rowKey}
        {...props}
      />
    </TableContainer>
  );
};

export default Table;

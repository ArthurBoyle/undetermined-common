import { TablePaginationConfig } from 'antd';
import { PageData } from '../types';

const getPagination = (
  pagination: false | TablePaginationConfig,
  pageData?: PageData,
): false | TablePaginationConfig => {
  const showTotal = (total: number): string => {
    return `共${total}条数据`;
  };

  if (pagination && pageData) {
    const { currPage, pageSize, totalCount } = pageData;
    return {
      current: currPage,
      pageSize,
      total: totalCount,
      showTotal,
      showQuickJumper: true,
      showSizeChanger: true,
      pageSizeOptions: [20, 50, 100, 200],
      ...pagination,
    };
  }
  return false;
};

export default getPagination;

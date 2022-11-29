import { TableColumnsType } from 'antd';

export type Columns = TableColumnsType<any>;

export interface PageData {
  currPage: number;
  pageSize: number;
  listData: Record<string, any>[];
  totalCount?: number;
}

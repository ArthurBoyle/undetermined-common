/**
 * title: 基础使用
 */

import React, { useCallback } from 'react';
import BaseSelect, {
  BaseSelectProps,
} from 'malin-common/components/BaseSelect';

const SearchAllUser: React.FC<BaseSelectProps> = (props) => {
  const getRequest = useCallback(() => {
    // return APIHelper.searchAllUser();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: '李云龙', team: '独立团' },
          { id: 2, name: '张大彪', team: '独立团' },
          { id: 3, name: '楚云飞', team: '358团' },
        ]);
      }, 1000);
    });
  }, []);

  return (
    <BaseSelect
      {...props}
      request={getRequest}
      keyMapper={{ code: 'id', value: 'name' }}
    />
  );
};

export default SearchAllUser;

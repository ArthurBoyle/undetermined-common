/**
 * title: 指定数据
 * description: 服务端返回多个数据源时需指定数据源
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
        resolve({
          naruto: [
            { id: 1, name: '迈特凯', leave: '上忍' },
            { id: 2, name: '旗木卡卡西', leave: '暗部' },
            { id: 3, name: '奈良鹿丸', leave: '上忍' },
            { id: 4, name: '油女志乃', leave: '上忍' },
          ],
          brightSword: [
            { id: 1, name: '李云龙', team: '独立团' },
            { id: 2, name: '张大彪', team: '独立团' },
            { id: 3, name: '楚云飞', team: '358团' },
          ],
        });
      }, 1000);
    });
  }, []);

  return (
    <BaseSelect
      {...props}
      request={getRequest}
      keyMapper={{ code: 'id', value: 'name' }}
      dataKey="naruto"
    />
  );
};

export default SearchAllUser;

import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { utils } from 'malin-common';

const { Option } = Select;

export interface BaseSelectProps {
  value?: any;
  disabled?: boolean;
  placeholder?: string;
  showSearch?: boolean;
  mode?: 'multiple' | 'tags';
  onChange?: (
    val: any,
    options: {
      disable?: boolean;
      [name: string]: any;
    },
    record?: any,
  ) => void;
}

interface IProps extends BaseSelectProps {
  // 接口
  request: () => Promise<any>;
  // Option映射关系
  keyMapper: Record<string, string>;
  // 数据唯一标识
  valueKey?: 'code' | 'value';
  // 返回数据字段
  dataKey?: string;
}

const BaseSelect: React.FC<IProps> = (props) => {
  const {
    value,
    onChange,
    disabled,
    placeholder = '请选择',
    showSearch,
    mode,
    request,
    valueKey = 'code',
    dataKey,
    keyMapper,
  } = props;

  const [optionList, setOptionList] = useState([]);

  useEffect(() => {
    const getOptionData = (data: any): void => {
      if (utils.isObject(data)) {
        if (dataKey) {
          const targetDataKey = Object.keys(data).find((item) => {
            return item === dataKey;
          });
          if (targetDataKey) {
            setOptionList(data[dataKey]);
            return;
          }
          Object.keys(data).forEach((item) => {
            getOptionData(data[item]);
          });
        } else {
          Object.keys(data).forEach((item) => {
            getOptionData(data[item]);
          });
        }
      } else {
        setOptionList(data);
      }
    };
    request().then((data) => {
      getOptionData(data);
    });
  }, [request, dataKey]);

  return (
    <Select
      value={value}
      onChange={(val, options): void => {
        let record;
        if (mode === 'multiple') {
          record = optionList.filter((item) => {
            return val.includes(item[keyMapper[valueKey]]);
          });
        } else {
          record = optionList.find((item) => item[keyMapper[valueKey]] === val);
        }
        onChange?.(val, options, record);
      }}
      allowClear
      disabled={disabled}
      placeholder={placeholder}
      showSearch={showSearch}
      filterOption={(inputValue, option: any): boolean => {
        return (
          option.children.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
        );
      }}
      mode={mode}
    >
      {optionList.map((item) => (
        <Option key={item[keyMapper.code]} value={item[keyMapper.code]}>
          {item[keyMapper.value]}
        </Option>
      ))}
    </Select>
  );
};

export default BaseSelect;

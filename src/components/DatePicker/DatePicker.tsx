import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import moment, { Moment } from 'moment';

interface DatePickerProps {
  value?: Moment | null;
  onChange?: (dateString: string | null) => void;
  showTime?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { value, onChange, showTime } = props;

  const getValue = (): Moment | null => {
    if (value) {
      return moment(value);
    }
    return null;
  };

  const handleChange = (date: Moment | null, dateString: string): void => {
    if (date) {
      onChange?.(dateString);
    } else {
      onChange?.(null);
    }
  };

  return (
    <AntdDatePicker
      value={getValue()}
      onChange={handleChange}
      showTime={showTime}
    />
  );
};

export default DatePicker;

import React from 'react';
import { DatePicker } from 'antd';
import moment, { Moment } from 'moment';

type DateType = [Moment | null, Moment | null] | null;
type RangeValue = [string, string] | null;

interface RangePickerProps {
  value?: RangeValue;
  onChange?: (dateStrings: RangeValue) => void;
  disabled?: boolean;
  showTime?: boolean;
}

const { RangePicker } = DatePicker;

const DateRangePicker: React.FC<RangePickerProps> = (props) => {
  const { value, onChange, disabled, showTime } = props;

  const getValue = (): DateType => {
    if (value && value[0]) {
      return [moment(value[0]), moment(value[1])];
    }
    return null;
  };

  const handleChange = (dates: DateType, dateStrings: RangeValue): void => {
    if (dates) {
      onChange?.(dateStrings);
    } else {
      onChange?.(null);
    }
  };

  return (
    <RangePicker
      value={getValue()}
      onChange={handleChange}
      disabled={disabled}
      showTime={showTime}
    />
  );
};

export default DateRangePicker;

import React from 'react';
import { TimePicker } from 'antd';
import moment, { Moment } from 'moment';

const { RangePicker: AntdRangePicker } = TimePicker;

type TimeType = [Moment | null, Moment | null] | null;
type RangeValue = [string, string] | null;

interface TimeRangePickerProps {
  value?: RangeValue;
  onChange?: (timeString: RangeValue) => void;
  disabled?: boolean;
}

const TimeRangePicker: React.FC<TimeRangePickerProps> = (props) => {
  const { value, onChange, disabled } = props;

  const getValue = (): TimeType => {
    if (value && value[0]) {
      return [
        moment(value[0], moment.HTML5_FMT.TIME_SECONDS),
        moment(value[1], moment.HTML5_FMT.TIME_SECONDS),
      ];
    }
    return null;
  };

  const handleChange = (time: TimeType, timeString: RangeValue): void => {
    if (time) {
      onChange?.(timeString);
    } else {
      onChange?.(null);
    }
  };

  return (
    <AntdRangePicker
      value={getValue()}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default TimeRangePicker;

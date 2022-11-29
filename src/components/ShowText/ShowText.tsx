import React, { Key } from 'react';
import { ShowTextContainer } from './style';

interface ShowTextProps {
  value?: Key | Key[];
  keyMapper?: Record<string, Key>;
  color?: string;
  colorObj?: Record<string, string>;
}

const colorMapper: Record<string, string> = {
  blue: '#1890FF',
  gray: '#808080',
};

const ShowText: React.FC<ShowTextProps> = (props) => {
  const { value, keyMapper, color, colorObj } = props;

  const getValue = (): Key | Key[] | undefined => {
    if (keyMapper) {
      return keyMapper[value as Key];
    }
    return value;
  };

  const getColor = (): string | undefined => {
    if (color) {
      return colorMapper[color] || color;
    }
    if (colorObj) {
      return colorMapper[colorObj[value as Key]];
    }
    return undefined;
  };

  return (
    <ShowTextContainer
      className={getColor() ? 'color' : undefined}
      color={getColor()}
    >
      {getValue()}
    </ShowTextContainer>
  );
};

export default ShowText;

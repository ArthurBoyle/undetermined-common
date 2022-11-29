import React, { useState, useContext, MouseEvent } from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';
import { Context, utils } from 'malin-common';

interface BtnProps extends ButtonProps {
  auth?: string;
}

const Button: React.FC<BtnProps> = (props) => {
  const { children, disabled, onClick, auth } = props;

  const [btnLoading, setBtnLoading] = useState(false);

  const allAuth = useContext(Context);

  const hasAuth = (): boolean => {
    if (auth) {
      return allAuth?.[auth];
    }
    return true;
  };

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    const result = onClick?.(event);
    if (utils.isPromise(result)) {
      setBtnLoading(true);
      (result as unknown as Promise<void>).finally(() => {
        setBtnLoading(false);
      });
    }
  };

  return (
    <AntdButton
      {...props}
      disabled={!hasAuth() || disabled}
      loading={btnLoading}
      onClick={handleClick}
    >
      {children}
    </AntdButton>
  );
};

export default Button;

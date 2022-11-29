import React, { useContext } from 'react';
import { Context } from 'malin-common';

interface AuthProps {
  auth: string;
  children: React.ReactElement;
}

const Auth: React.FC<AuthProps> = (props) => {
  const { auth, children } = props;

  const allAuth = useContext(Context);

  const hasAuth = (): boolean => {
    if (auth) {
      return allAuth?.[auth];
    }
    return true;
  };

  return hasAuth() ? children : null;
};

export default Auth;

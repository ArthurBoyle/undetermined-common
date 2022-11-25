import { useFullSidebarData } from 'dumi';
import React, { type FC } from 'react';

const Foo: FC<{ title: string }> = (props) => {
  const sidebar = useFullSidebarData();
  console.log(sidebar);
  return <h4>{props.title}</h4>;
};

export default Foo;

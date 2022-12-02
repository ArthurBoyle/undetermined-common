# Auth

根据权限展示/隐藏元素

## 何时使用

需要判断当前用户是否有相应操作权限。

```tsx | pure
import React from 'react';
import { Auth } from 'malin-common';

const Demo: React.FC = () => {
  return <Auth auth="auth">HelloWorld</Auth>;
};

export default Demo;
```

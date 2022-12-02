import { defineConfig } from 'dumi';

export default defineConfig({
  resolve: {
    atomDirs: [
      { type: 'commons', dir: 'src/components' },
      { type: 'commons', dir: 'src/utils' },
      { type: 'commons', dir: 'src/hooks' },
    ],
  },
  themeConfig: {
    name: '我是中国DotA的希望',
    nav: [
      { title: '我是中国DotA的希望', link: '/guide' },
      { title: '组件', link: '/commons/auth' },
    ],
    sidebar: {
      '/commons': [
        {
          title: '组件',
          children: [
            { title: 'Foo', link: '/commons/foo' },
            { title: 'Auth', link: '/commons/auth' },
            { title: 'BaseSelect', link: '/commons/baseselect' },
            { title: 'Button', link: '/commons/button' },
            { title: 'DatePicker', link: '/commons/datepicker' },
            { title: 'ShowText', link: '/commons/showtext' },
            { title: 'Table', link: '/commons/table' },
            { title: 'TimePicker', link: '/commons/timepicker' },
          ],
        },
        {
          title: 'hooks',
          children: [{ title: 'useModal', link: '/commons/usemodal' }],
        },
        {
          title: '工具',
          children: [{ title: 'Utils', link: '/commons/utils' }],
        },
      ],
    },
  },
  outputPath: 'docs-dist',
});

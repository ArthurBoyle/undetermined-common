import { defineConfig } from 'dumi';

export default defineConfig({
  resolve: {
    atomDirs: [
      { type: 'tests', dir: 'src/components' },
      { type: 'tests', dir: 'src/utils' },
    ],
  },
  themeConfig: {
    name: '我是中国DotA的希望',
    nav: [
      { title: '我是中国dota的希望', link: '/guide' },
      { title: '组件', link: '/tests/foo' },
    ],
    sidebar: {
      '/tests': [
        {
          title: '组件',
          children: [{ title: 'Foo', link: '/tests/foo' }],
        },
        {
          title: '工具',
          children: [{ title: 'util', link: '/tests/utils' }],
        },
      ],
    },
  },
  outputPath: 'docs-dist',
});

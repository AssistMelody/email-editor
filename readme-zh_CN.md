# Easy email

<br>
<p align="center">
  <a aria-label="Easy email logo" href="https://email.maocanhua.cn/?utm_source=github">
    <img src="./logo_text.svg" width="300">
  </a>
</p>
<br>

<p align="center">

  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/easy-email-editor">
    <img alt="" src="https://badgen.net/npm/v/easy-email-editor">
  </a>
  <a aria-label="React version" href="https://react.js">
    <img alt="" src="https://img.shields.io/badge/React-17.0-yellow.svg">
  </a>
  <a aria-label="MJML" href="https://mjml.io/">
    <img src="https://img.shields.io/badge/MJML-awesome-rgb(120 33 117).svg">
  </a>
  <a aria-label="Package size" href="https://www.typescriptlang.org/">
    <img alt="Using TypeScript" src="https://img.shields.io/badge/%3C/%3E-TypeScript-brightgreenred.svg">
  </a>
  <img alt="" src="https://badgen.net/npm/license/easy-email-editor">
</p>

## Join Our Community

<a aria-label="Join Easy Email Discord Community" href="https://discord.gg/bqrAE2zCjn">
  <img src="./join_discord.png" width="240">
</a>

[English](readme.md) | 简体中文

## 介绍

Easy email 是基于[MJML](https://mjml.io/)开发的，拥有非常好的兼容性. 同时，它可以通过拖放编辑生成代码.

## Features:

- 拖放编辑器
- Can be converted into `MJML`, or generated through `MJML`
- 自定义块
- 动态渲染
- 轻松自定义 UI
- 注意配置

|                  Video Overview                  |
| :----------------------------------------------: |
| <img src="./StandardLayout.png" alt="Overview" > |

## 在线 Demo

Check out the live demo here: <a href="https://email.maocanhua.cn/?utm_source=github" target="_blank" alt="https://email.maocanhua.cn/?utm_source=github">https://email.maocanhua.cn</a>

## Getting started

```sh
$ npm install --save easy-email-core easy-email-editor easy-email-extensions react-final-form
```

or

```sh
$ yarn add easy-email-core easy-email-editor easy-email-extensions react-final-form
```

```js
import React from 'react';
import { BlockManager, BasicType, AdvancedType } from 'easy-email-core';
import { EmailEditor, EmailEditorProvider } from 'easy-email-editor';
import { ExtensionProps, StandardLayout } from 'easy-email-extensions';
import { useWindowSize } from 'react-use';

import 'easy-email-editor/lib/style.css';
import 'easy-email-extensions/lib/style.css';

// theme, If you need to change the theme, you can make a duplicate in https://arco.design/themes/design/1799/setting/base/Color
import '@arco-themes/react-easy-email-theme/css/arco.css';

const initialValues = {
  subject: 'Welcome to Easy-email',
  subTitle: 'Nice to meet you!',
  content: BlockManager.getBlockByType(BasicType.PAGE)!.create({}),
};

export default function App() {
  const { width } = useWindowSize();

  const smallScene = width < 1400;

  return (
    <EmailEditorProvider
      data={initialValues}
      height={'calc(100vh - 72px)'}
      autoComplete
      dashed={false}
    >
      {({ values }) => {
        return (
          <StandardLayout
            compact={!smallScene}
            showSourceCode={true}
          >
            <EmailEditor />
          </StandardLayout>
        );
      }}
    </EmailEditorProvider>
  );
}


```

## Examples

> Please see <a href="https://github.com/m-Ryan/easy-email-demo" target="_blank" alt="https://github.com/m-Ryan/easy-email-demo">https://github.com/m-Ryan/easy-email-demo</a>

</br>

## 配置信息

| property           | Type                                                                                               | Description                                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| height             | string / number                                                                                    | 设置容器高度                                                                                                                         |
| data               | interface IEmailTemplate { content: IPage; subject: string; subTitle: string; }                    | 源数据                                                                                                                               |
| children           | ( props: FormState<T>,helper: FormApi<IEmailTemplate, Partial<IEmailTemplate>>) => React.ReactNode | ReactNode                                                                                                                            |
| onSubmit           | Config<IEmailTemplate, Partial<IEmailTemplate>>['onSubmit'];                                       | 手动触发提交时调用                                                                                                                   |
| fontList           | { value: string; label: string; }[];                                                               | 默认字体列表                                                                                                                         |
| interactiveStyle   | { hoverColor?: string; selectedColor?: string;}                                                    | 交互式提示颜色                                                                                                                       |
| onUploadImage      | (data: Blob) => Promise<string>;                                                                   | 粘贴或上传图像时触发                                                                                                                 |
| onAddCollection    | (payload: CollectedBlock) => void;                                                                 | Add to collection list                                                                                                               |
| onRemoveCollection | (payload: { id: string; }) => void;                                                                | Remove from collection list                                                                                                          |
| dashed             | boolean                                                                                            | 编辑区域展示虚线                                                                                                                     |
| autoComplete       | boolean                                                                                            | Automatically complete missing blocks. For example, Text => Section, will generate Text=>Column=>Section                             |
| mergeTags          | Object                                                                                             | A merge tag is a bit of specific code that allows you to insert dynamic data into emails. Like `{{user.name}}`, and used for preview |
| previewInjectData  | Object                                                                                             | Dynamic data for preview, it will overwrite mergeTags.                                                                               |
| onBeforePreview    | (html: string, mergeTags: PropsProviderProps['mergeTags']) => string                               | Promise<string> You can replace mergeTags when previewing.                                                                           |

## Hotkeys

| hotkey            | Description                                                                         |
| ----------------- | ----------------------------------------------------------------------------------- |
| mod+z             | 撤销                                                                                |
| mod+y             | 恢复                                                                                |
| delete/backspace  | 删除 block                                                                          |
| tab / shift + tab | 快速选中 block, 如果 block 是聚焦状态,`tab` 会选中下一个 & `shift + tab` 选中上一个 |

## Packages

- [easy-email-core](./packages/easy-email-core/readme.md)
- [easy-email-editor](./packages/easy-email-editor/readme.md)
- [easy-email-extensions](./packages/easy-email-extensions/readme.md)

</br>

## How does it work?

<img alt="" src="./work.png">

</br>

## Roadmap

- Localization in progress.
- Awesome responsive, support mobile and desktop display different styles (without any compatibility issues)
- Replace shadow dom with iframe, support firefox/safari browsers.
- Improve documentation and add more usage examples

## Development

```sh
$ git clone git@github.com:arco-design/easy-email.git
$ cd easy-email
$ yarn install-all
$ yarn dev

```

## License

The MIT License

---
title: Tabs 标签页
---

# Tabs 标签页

## Example

```javascript
import { tabs, tabsHead, tabsItem, tabsBody, tabsPane } from 'vigour';
// tabs.name === 'vigour-tabs'
// tabsHead.name === 'vigour-tabs-head'
// tabsItem.name === 'vigour-tabs-item'
// tabsBody.name === 'vigour-tabs-body'
// tabsPane.name === 'vigour-tabs-pane'
```

### Basic

<tabs-example-1></tabs-example-1>

```html
<vigour-tabs :selected.sync="tab" direction="horizontal">
  <vigour-tabs-head>
    <vigour-tabs-item name="tab1">tab 1</vigour-tabs-item>
    <vigour-tabs-item name="tab2">tab 2</vigour-tabs-item>
    <vigour-tabs-item name="tab3" disabled>tab 3</vigour-tabs-item>
  </vigour-tabs-head>
  <vigour-tabs-body>
    <vigour-tabs-pane name="tab1">tab 1 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab2">tab 2 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab3">tab 3 content</vigour-tabs-pane>
  </vigour-tabs-body>
</vigour-tabs>
```

### Slots

You can use `v-slot:actions` to add extra content to the Tabs bar. I added a button in the following example.

你可以使用 `v-slot:actions` 来 Tabs 栏增加额外的内容，在以下例子中我添加了一个按钮。

<tabs-example-2></tabs-example-2>

```html
<vigour-tabs :selected.sync="tab" direction="horizontal">
  <vigour-tabs-head>
    <template v-slot:actions>
      <vigour-button>test</vigour-button>
    </template>
    <vigour-tabs-item name="tab1">tab 1</vigour-tabs-item>
    <vigour-tabs-item name="tab2">tab 2</vigour-tabs-item>
    <vigour-tabs-item name="tab3" disabled>tab 3</vigour-tabs-item>
  </vigour-tabs-head>
  <vigour-tabs-body>
    <vigour-tabs-pane name="tab1">tab 1 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab2">tab 2 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab3">tab 3 content</vigour-tabs-pane>
  </vigour-tabs-body>
</vigour-tabs>
```

### Directions

You can use the `direction` attribute to specify whether the Tabs is displayed horizontally or vertically. By default, the value of `direction` is `'horizontal'`.

你可以使用 `direction` 属性来指定 Tabs 是水平还是垂直展示。默认情况下，`direction` 的值是 `'horizontal'`。

<tabs-example-3></tabs-example-3>

```html
<vigour-tabs :selected.sync="tab" direction="vertical">
  <vigour-tabs-head>
    <vigour-tabs-item name="tab1">tab 1</vigour-tabs-item>
    <vigour-tabs-item name="tab2">tab 2</vigour-tabs-item>
    <vigour-tabs-item name="tab3" disabled>tab 3</vigour-tabs-item>
  </vigour-tabs-head>
  <vigour-tabs-body>
    <vigour-tabs-pane name="tab1">tab 1 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab2">tab 2 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab3">tab 3 content</vigour-tabs-pane>
  </vigour-tabs-body>
</vigour-tabs>
```

<tabs-example-4></tabs-example-4>

```html
<vigour-tabs :selected.sync="tab" direction="vertical">
  <vigour-tabs-head>
    <template v-slot:actions>
      <vigour-button>Button</vigour-button>
    </template>
    <vigour-tabs-item name="tab1">tab 1</vigour-tabs-item>
    <vigour-tabs-item name="tab2">tab 2</vigour-tabs-item>
    <vigour-tabs-item name="tab3" disabled>tab 3</vigour-tabs-item>
  </vigour-tabs-head>
  <vigour-tabs-body>
    <vigour-tabs-pane name="tab1">tab 1 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab2">tab 2 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab3">tab 3 content</vigour-tabs-pane>
  </vigour-tabs-body>
</vigour-tabs>
```

## Props

### Tabs

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| selected.sync | `string` | - | - |
| direction | `string` | - | `'horizontal', 'vertical'` |

---
title: Tree
---

# Tree

```javascript
import { tree } from 'vigour';
// tree.name === 'vigour-tree'
```

## Example

### Basic usage

<tree-example-1></tree-example-1>

```html
<vigour-tree :data="json"></vigour-tree>
```

```javascript
[
    {
      label: '家用电器',
      isExpanded: true,
      id: 1,
      children: [
        {
          label: '电视',
          id: 11,
          isExpanded: true,
        },
      ],
    },
];
```

### onToggle & onClick

The `onToggle` and `onClick` attributes accept a function as an argument.

`onToggle` 和 `onClick` 属性接受一个函数作为参数。

<tree-example-2></tree-example-2>

```html
 <vigour-tree
  :data="json"
  :onToggle="onToggle"
  :onClick="onClick"
></vigour-tree>
```

```javascript
methods: {
  onToggle(data) {
    console.log('onToggle', data);
  },
  onClick(data) {
    console.log('onClick', data);
  },
},
```
## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| data | `array` | - | - |
| onToggle | `function` | - | - |
| onClick | `function` | - | - |

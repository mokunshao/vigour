---
title: Icon 图标
---

# Icon 图标

## Example

```javascript
import { icon } from 'vigour';
// icon.name === 'vigour-icon'
```

### Names

The `name` attribute is required to determine which icon is displayed.

`name` 属性是必须的，决定显示哪个 icon。

<icon-example-1></icon-example-1>

```vue
<div :style="{ padding: '1em' }">
  <vigour-icon name="settings"></vigour-icon>
  <vigour-icon name="download"></vigour-icon>
  <vigour-icon name="upload" color="#999"></vigour-icon>
  <vigour-icon name="left" color="yellowgreen"></vigour-icon>
  <vigour-icon name="right" color="red"></vigour-icon>
</div>
```

### Available Icons

The values that can be set by the `name` property are listed below.

以下列举了 `name` 属性可以设置的值。

<icon-example-2></icon-example-2>

## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| name | `string` | - | - |
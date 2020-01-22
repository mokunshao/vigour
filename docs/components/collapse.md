---
title: Collapse 折叠
---

# Collapse 折叠

```javascript
import { collapse, collapseItem } from 'vigour';
// collapse.name === 'vigour-collapse'
// collapseItem.name === 'vigour-collapse-item'
```

## Example

### Basic

By default, `vigour-collapse` can display multiple `vigour-collapse-items` at the same time.

默认情况下，`vigour-collapse` 可以同时显示多个 `vigour-collapse-item`。

<collapse-example-1></collapse-example-1>

```vue
<vigour-collapse v-model="unfold2">
  <vigour-collapse-item title="title 1">content 1</vigour-collapse-item>
  <vigour-collapse-item title="title 2">content 2</vigour-collapse-item>
  <vigour-collapse-item title="title 3">content 3</vigour-collapse-item>
</vigour-collapse>
<blockquote>
  {{ unfold2 }}
</blockquote>
```

```javascript
export default {
  data() {
    return {
      unfold2: ['title 1', 'title 2'],
    }
  }
}
```

### Single

The `single` attribute enables `vigour-collapse` to display only one `vigour-collapse-item` at a time.

`single` 属性可以使 `vigour-collapse` 一次只能显示一个 `vigour-collapse-item`。

<collapse-example-2></collapse-example-2>

```vue
<vigour-collapse v-model="unfold" single>
  <vigour-collapse-item title="title 1">content 1</vigour-collapse-item>
  <vigour-collapse-item title="title 2">content 2</vigour-collapse-item>
  <vigour-collapse-item title="title 3">content 3</vigour-collapse-item>
</vigour-collapse>
<blockquote>
  {{ unfold }}
</blockquote>
```

```javascript
export default {
  data() {
    return {
      unfold: ['title 1'],
    }
  }
}
```

## Props

### vigour-collapse

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| v-model | `array<string>` | - | - |
| single | `boolean` | `false` | - |

### vigour-collapse-item

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| title | `string` | - | - |

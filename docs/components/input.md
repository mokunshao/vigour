---
title: Input 输入框
---

# Input 输入框

## Example

```javascript
import { input } from 'vigour';
// input.name === 'vigour-input'
```

### Basic

<input-example-1></input-example-1>

```vue
<vigour-input v-model="value"></vigour-input>
```

### Clearable

When the `clearable` attribute is `true`, you can clear the text with one click.

当 `clearable` 属性为 `true` 时，可以一键清空文本。

<input-example-2></input-example-2>

```vue
<vigour-input v-model="value" clearable></vigour-input>
```

### Placeholder

<input-example-3></input-example-3>

```vue
<vigour-input v-model="value" placeholder="请输入内容"></vigour-input>
```

### Types

The attribute of `type` is the same as that of native input element. The following is what happens when `type` is `password`.

`type` 属性与原生 input 元素的属性一样，以下是当 `type` 为 `password` 时的情况。

<input-example-4></input-example-4>

```vue
<vigour-input
  v-model="value"
  placeholder="请输入密码"
  type="password"
  clearable
></vigour-input>
```

### Read Only

<input-example-5></input-example-5>

```vue
<vigour-input v-model="value" readonly></vigour-input>
```

### Disabled

<input-example-6></input-example-6>

```vue
<vigour-input v-model="value" disabled></vigour-input>
```

## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| v-model | `any` | - | - |
| clearable | `boolean` | `false` | - |
| placeholder | `string` | - | - |
| readonly | `boolean` | `false` | - |
| disabled | `boolean` | `false` | - |
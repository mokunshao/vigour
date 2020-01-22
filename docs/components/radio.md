---
title: Radio 单选框
---

# Radio 单选框

## Example

```javascript
import { radio, radioGroup } from 'vigour';
// radio.name === 'vigour-radio'
// radioGroup.name === 'vigour-radio-group'
```

### Use Without Radio Group

You can use `vigour-radio` when not using `vigour-radio-group`.

你可以在使用 `vigour-radio` 时不搭配使用 `vigour-radio-group`。

<radio-example-1></radio-example-1>

```vue
<vigour-radio label="one" v-model="radioValue">one</vigour-radio>
<vigour-radio label="two" v-model="radioValue">two</vigour-radio>
<vigour-radio label="three" disabled v-model="radioValue"
  >three</vigour-radio
>
<div>You are selecting '{{ radioValue }}'</div>
```

### Use With Radio Group

I recommend that you use `vigour-radio-group` with `vigour-radio`.

我推荐你在使用 `vigour-radio` 时搭配使用 `vigour-radio-group`.

<radio-example-2></radio-example-2>

```vue
<vigour-radio-group v-model="radioValue">
  <vigour-radio label="male">male</vigour-radio>
  <vigour-radio label="female">female</vigour-radio>
</vigour-radio-group>
<div>You are selecting '{{ radioValue }}'</div>
```

## Props

### Radio

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| v-model | `string|number` | - | - |
| label | `string|number` | - | - |

### Radio Group

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| v-model | `string|number` | - | - |

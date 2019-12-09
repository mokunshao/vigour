---
title: Radio
---

# Radio

## Example

<radio-example-1></radio-example-1>

```vue
<vigour-radio label="one" v-model="radioValue">one</vigour-radio>
<vigour-radio label="two" v-model="radioValue">two</vigour-radio>
<vigour-radio label="three" disabled v-model="radioValue"
  >three</vigour-radio
>
<div>You are selecting '{{ radioValue }}'</div>
```

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

---
title: Formatted Input
---

# Formatted Input

```javascript
import { formattedInput } from 'vigour';
// formattedInput.name === 'vigour-formatted-input'
```

Formatted Input only accept number. It can be used as a credit card number input field.

Formatted Input 只能接受数字输入。它可以用作信用卡号码的输入框。

## Example

<formatted-input-example-1></formatted-input-example-1>

```html
<div>
  <div style="margin: 0.5em 0;">
    <vigour-formatted-input v-model="n1"></vigour-formatted-input>
  </div>
  <div style="margin: 0.5em 0;">
    <vigour-formatted-input
      v-model="n2"
      template="XXX.XXX.XXX.XXX"
    ></vigour-formatted-input>
  </div>
  <div style="margin: 0.5em 0;">
    <vigour-formatted-input
      v-model="n3"
      template="XXX-XXX-XXX-XXX"
    ></vigour-formatted-input>
  </div>
</div>
```

## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| v-model | `string` | - | - |
| template | `string` | `'XXXX XXXX XXXX XXXX'` | - |
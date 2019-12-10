---
title: Dialog
---

# Dialog

## Example

### Basic

<dialog-example-1></dialog-example-1>

```vue
<vigour-button @click="dialogVisable = !dialogVisable"
  >show/hide dialog</vigour-button
>
<vigour-dialog :visible.sync="dialogVisable">
  <div>hello world</div>
</vigour-dialog>
```

## No Mask

<dialog-example-2></dialog-example-2>

## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| visible.sync | `boolean` | - | - |
| mask | `boolean` | `true` | - |
| closeOnClickMask | `boolean` | `true` | - |
| title | `any` | - | - |
| closeOnEsc | `boolean` | `true` | - |
| preventBackgroundScrolling | `boolean` | - | - |

<style>
.vigour-dialog-mask {
  z-index: 21;
}

.vigour-dialog {
  z-index: 22;
}
</style>
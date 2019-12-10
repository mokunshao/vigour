---
title: Dialog
---

# Dialog

## Example

### Basic

<dialog-example-1></dialog-example-1>

```html
<vigour-button @click="dialogVisable = !dialogVisable"
  >show/hide dialog</vigour-button
>
<vigour-dialog :visible.sync="dialogVisable">
  <div>hello world</div>
</vigour-dialog>
```

### No Mask

<dialog-example-2></dialog-example-2>

```html
<vigour-button @click="dialogVisable = !dialogVisable"
  >show/hide dialog</vigour-button
>
<vigour-dialog :visible.sync="dialogVisable" :mask="false">
  <div>hello world</div>
</vigour-dialog>
```

### Don't Close When Clicked the Mask

<dialog-example-3></dialog-example-3>

```html
<vigour-button @click="dialogVisable = !dialogVisable"
  >show/hide dialog</vigour-button
>
<vigour-dialog :visible.sync="dialogVisable" :closeOnClickMask="false">
  <div>hello world</div>
</vigour-dialog>
```

### Don't Close When 'ESC' Key is Pressed

<dialog-example-4></dialog-example-4>

```html
<vigour-button @click="dialogVisable = !dialogVisable"
  >show/hide dialog</vigour-button
>
<vigour-dialog :visible.sync="dialogVisable" :closeOnEsc="false">
  <div>hello world</div>
</vigour-dialog>
```

### Prevent Background Scrolling

<dialog-example-5></dialog-example-5>

```html
<vigour-button @click="dialogVisable = !dialogVisable"
  >show/hide dialog</vigour-button
>
<vigour-dialog :visible.sync="dialogVisable" preventBackgroundScrolling>
  <div>hello world</div>
</vigour-dialog>
```

### Add Title

<dialog-example-6></dialog-example-6>

```html
<vigour-button @click="dialogVisable = !dialogVisable"
  >show/hide dialog</vigour-button
>
<vigour-dialog title="Attention" :visible.sync="dialogVisable">
  <div>hello world</div>
</vigour-dialog>
```

### Custom Footer

<dialog-example-7></dialog-example-7>

```html
<vigour-button @click="dialogVisable = !dialogVisable"
  >show/hide dialog</vigour-button
>
<vigour-dialog :visible.sync="dialogVisable">
  <div>hello world</div>
  <template v-slot:footer>
    <div>
      <vigour-button @click="dialogVisable = !dialogVisable"
        >Yes</vigour-button
      >
      <vigour-button @click="dialogVisable = !dialogVisable"
        >No</vigour-button
      >
    </div>
  </template>
</vigour-dialog>
```

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
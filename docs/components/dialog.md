---
title: Dialog 对话框
---

# Dialog 对话框

```javascript
import { dialog } from 'vigour';
// dialog.name === 'vigour-dialog'
```

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

When the value of the `mask` attribute is `false`, the `vigour-dialog` will not display the mask layer.

当 `mask` 属性的值为 `false` 时，`vigour-dialog` 将不会显示遮罩层。

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

When the value of the `closeOnClickMask` attribute is `false`, clicking the mask layer of `vigour-dialog` will not close `vigour-dialog`.

当 `closeOnClickMask` 属性的值为 `false` 时，点击 `vigour-dialog` 的遮罩层将不会关闭 `vigour-dialog`。

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

When the value of `closeOnEsc` attribute is `false`, pressing the `ESC` key will not close `vigour-dialog`.

当 `closeOnEsc` 属性的值为 `false` 时，按下 `ESC` 键将不会关闭 `vigour-dialog`。

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

The page will not be scrollable when the value of the `preventBackgroundScrolling` attribute is `true` and `vigour-dialog` is displayed.

当 `preventBackgroundScrolling` 属性的值为 `true` 并且 `vigour-dialog` 为显示状态时，页面将会是是无法滚动的 。

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

You can set the title of `vigour-dialog` through the attribute `title`.

通过 `title` 属性可以设置 `vigour-dialog` 的标题。

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

You can set the footer of `vigour-dialog` through a named slot named `footer`.

通过名为 `footer` 的具名插槽，你可以设置 `vigour-dialog` 的 footer。

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
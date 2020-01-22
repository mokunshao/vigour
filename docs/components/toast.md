---
title: Toast
---

# Toast

In the case of on-demand import, you can import Toast in the following ways. After import, you can use Toast through `this.$toast`.

在按需引入的情况下，你可以通过以下方式引入 Toast，引入后可以通过 `this.$toast` 来使用 Toast。

```javascript
import { toast } from 'vigour';
Vue.use(toast);
```
### autoClose

The `autoClose` attribute can be used to set whether to close Toast automatically.

`autoClose` 属性可以设置是否自动关闭 Toast。

### autoCloseDelay

The `autoCloseDelay` attribute can be set to when to close automatically after the appearance of Toast.

`autoCloseDelay` 属性可以设置在 Toast 出现后多久后会自动关闭。

### closeButton

The `closeButton` attribute sets the text of the close button and the callback function will be executed after Toast is closed.

`closeButton` 属性可以设置关闭按钮的文本，以及 Toast 关闭后执行的回调函数。

### position

The `position` attribute sets the position where the Toast appears.

`position` 属性可以设置 Toast 出现的位置。

## Example

<toast-example-1></toast-example-1>

```html
<div>
  <vigour-button @click="showToast">Show Top Toast</vigour-button>
  <vigour-button @click="showToast2">Show Center Toast</vigour-button>
  <vigour-button @click="showToast3">Show Bottom Toast</vigour-button>
</div>
```

```javascript
export default {
  methods: {
    showToast() {
      this.$toast(<i>Attention <strong>please</strong></i>, {
        closeButton: {
          text: '关闭',
          callback(vm) {
            console.log(vm);
            console.log('已经关闭');
          },
        },
        autoClose: false,
        position: 'top',
      });
    },
    showToast2() {
      this.$toast(<i>Attention <strong>please</strong></i>, {
        closeButton: {
          text: '关闭',
          callback(vm) {
            console.log(vm);
            console.log('已经关闭');
          },
        },
        autoClose: false,
        position: 'center',
      });
    },
    showToast3() {
      this.$toast(<i>Attention <strong>please</strong></i>, {
        closeButton: {
          text: '关闭',
          callback(vm) {
            console.log(vm);
            console.log('已经关闭');
          },
        },
        autoClose: false,
        position: 'bottom',
      });
    },
  }
}
```

<style>
.vigour-toast { z-index: 21; }
</style>

## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| autoClose | `boolean` | - | `true` |
| autoCloseDelay | `number` | - | `2000` |
| closeButton | `{text:string,callback?:function}` | - | - |
| position | `string` | - | `'top', 'center', 'bottom'` |

---
title: Toast
---

# Toast

## Example

<toast-example-1></toast-example-1>

```vue
<template>
  <div>
    <vigour-button @click="showToast">Show Top Toast</vigour-button>
    <vigour-button @click="showToast2">Show Center Toast</vigour-button>
    <vigour-button @click="showToast3">Show Bottom Toast</vigour-button>
    <vigour-toast :closeButton="{ text: 'Close' }" :autoClose="false"
      >Message</vigour-toast
    >
  </div>
</template>

<script>
import button from '../../../src/components/button';
import toast from '../../../src/components/toast.js'
import Vue from 'vue';
Vue.use(toast);

export default {
  components: {
    [button.name]: button,
  },
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
</script>
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

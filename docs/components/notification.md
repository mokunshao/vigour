---
title: Notification 通知
---

# Notification 通知

Please note: in the case of on-demand import, if you want to use `Notification`, you need to import them in the following ways.

请注意：在按需引入的情况下，如果想使用 Notification，你需要通过以下方式引入它们。

```javascript
import {notification} from 'vigour';
Vue.use(notification);
```

## Example

`Notification` can be used through `this.$notify`. You can set the `duration` property to set the duration of `Notification`'s display. When the value of `duration` is `0`, `Notification` will not disappear automatically.

`Notification` 可以通过 `this.$notify` 来使用，你可以设置 `duration` 属性来设置 `Notification` 显示的时长，当 `duration` 的值为 `0` 时，则 `Notification` 不会自动消失。

<notification-example-1></notification-example-1>

```javascript
import notification from 'vigour/notification.js'
Vue.use(notification);
```

```html
<vigour-button @click="showNotification">show notification</vigour-button>
<vigour-button @click="showNotification2">show notification2</vigour-button>
```

```javascript
export default {
  methods: {
    showNotification() {
      this.$notify({ content: '你好世界', duration: 0 });
    },
    showNotification2() {
      this.$notify({ content: 'Hello World' });
    },
  }
}
```

## Options

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| content | `string` | - | - |
| duration | `number` | `3000` | - |

<style>
.vigour-notification {
  z-index: 21;
}
</style>
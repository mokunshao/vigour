---
title: Notification
---

# Notification

## Example

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
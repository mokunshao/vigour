<template>
  <div>
    <vigour-button @click="showNotification">show notification</vigour-button>
    <vigour-button @click="showNotification2">show notification2</vigour-button>
  </div>
</template>

<script>
import Vue from 'vue';
import notification from '../../../src/components/notification.js'
import button from '../../../src/components/button'

Vue.use(notification);

export default {
  components: {
    [button.name]: button
  },
  methods: {
    showNotification() {
      this.$notify({ content: '你好世界', duration: 0 });
    },
    showNotification2() {
      this.$notify({ content: 'Hello World' });
    },
  }
}
</script>
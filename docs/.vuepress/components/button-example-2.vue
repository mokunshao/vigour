<template>
  <div>
    <vigour-button icon="loading">Loading</vigour-button>
    <vigour-button icon="settings">Settings</vigour-button>
    <vigour-button icon="download" kind="primary">Download</vigour-button>
  </div>
</template>

<script>
import Button from '../../../src/components/button.vue';

export default {
  name: 'button-example-2',
  components: {
    [Button.name]: Button,
  },
}
</script>
<template>
  <div>
    <vigour-button icon="thumbs-up">Thumbs Up</vigour-button>
    <vigour-button icon="upload" icon-position="left" kind="primary"
      >Upload</vigour-button
    >
    <vigour-button icon="upload" icon-position="right">Upload</vigour-button>
    <vigour-button icon="loading" icon-position="right">Hello</vigour-button>
  </div>
</template>

<script>
import Button from '../../../src/components/button.vue';

export default {
  name: 'button-example-3',
  components: {
    [Button.name]: Button,
  },
}
</script>
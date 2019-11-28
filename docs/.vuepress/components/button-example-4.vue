<template>
  <div>
    <vigour-button icon="loading">Loading</vigour-button>
    <vigour-button
      icon="settings"
      :loading="loading"
      @click="loading = !loading"
      >Settings</vigour-button
    >
    <vigour-button
      icon="thumbs-up"
      kind="primary"
      icon-position="right"
      :loading="loading"
      @click="loading = !loading"
      >Thumbs Up</vigour-button
    >
    <vigour-button icon="upload" :loading="loading" @click="loading = !loading"
      >Upload</vigour-button
    >
    <vigour-button
      icon="download"
      :loading="loading"
      @click="loading = !loading"
      >Download</vigour-button
    >
  </div>
</template>

<script>
import Button from '../../../src/components/button.vue';
import ButtonGroup from '../../../src/components/button-group.vue';

export default {
  name: 'button-example',
  components: {
    [Button.name]: Button,
    [ButtonGroup.name]: ButtonGroup,
  },
  data() {
    return {
      loading: false
    }
  }
}
</script>
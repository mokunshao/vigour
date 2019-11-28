<template>
  <vigour-button-group>
    <vigour-button icon="thumbs-up" icon-position="right"
      >Thumbs Up</vigour-button
    >
    <vigour-button icon="upload">Upload</vigour-button>
    <vigour-button icon="download">Download</vigour-button>
  </vigour-button-group>
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
}
</script>
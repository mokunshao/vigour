<template>
  <div>
    <vigour-button>Default</vigour-button>
    <vigour-button kind="primary">Primary</vigour-button>
    <vigour-button kind="normal">Normal</vigour-button>
  </div>
</template>

<script>
import Button from '../../../src/components/button.vue';

export default {
  name: 'button-example-1',
  components: {
    [Button.name]: Button,
  }
}
</script>
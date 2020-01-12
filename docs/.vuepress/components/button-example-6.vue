<template>
  <vigour-button disabled>hello</vigour-button>
</template>

<script>
import Button from '../../../src/components/button.vue';

export default {
  components: {
    [Button.name]: Button,
  },
}
</script>
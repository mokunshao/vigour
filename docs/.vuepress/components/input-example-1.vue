<template>
  <vigour-input v-model="value"></vigour-input>
</template>

<script>
import input from '../../../src/components/input';
export default {
  components: {
    [input.name]: input
  },
  data() {
    return {
      value: 'Hello'
    }
  }
}
</script>
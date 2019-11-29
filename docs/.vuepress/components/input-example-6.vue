<template>
  <vigour-input v-model="value" disabled></vigour-input>
</template>

<script>
import input from '../../../src/components/input';
export default {
  components: {
    [input.name]: input
  },
  data() {
    return {
      value: '123'
    }
  }
}
</script>
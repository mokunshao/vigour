<template>
  <vigour-input v-model="value" placeholder="请输入内容"></vigour-input>
</template>

<script>
import input from '../../../src/components/input';
export default {
  components: {
    [input.name]: input
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>
<template>
  <div class="vigour-formatted-input">
    <vigour-input :placeholder="template" v-model="number2"></vigour-input>
  </div>
</template>

<script>
import input from './input.vue';

export default {
  name: 'vigour-formatted-input',
  props: {
    template: {
      type: String,
      default() { return 'xxx-xxx-xxx-xxx'; },
    },
  },
  data() {
    return {
      number: '',
    };
  },
  computed: {
    number2: {
      get() {
        return this.number.replace(/[^(0-9)]/g, '');
      },
      set(value) {
        this.number = value;
      },
    },
  },
  components: {
    [input.name]: input,
  },
};
</script>

<style lang="scss" scoped>
.vigour-formatted-input {
  display: inline-flex;
}
</style>

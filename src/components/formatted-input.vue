<template>
  <div class="vigour-formatted-input">
    <vigour-input
      :placeholder="template"
      :value="value"
      ref="input"
      @input="input"
      clearable
    />
  </div>
</template>

<script>
import input from './input.vue';

export default {
  name: 'vigour-formatted-input',
  props: {
    template: {
      type: String,
      default() { return 'XXXX XXXX XXXX XXXX'; },
    },
    value: {},
  },
  methods: {
    dataTransfer(origin) {
      let result;
      if (origin.trim() === '') {
        result = '';
      } else {
        result = origin.replace(/[^0-9]/g, '')
          .replace(this.theRegex, this.format)
          .substr(0, this.template.length);
      }
      return result;
    },
    input(value) {
      const inputElement = this.$refs.input.$el.querySelector('.vigour-input');
      const result = this.dataTransfer(value);
      inputElement.value = result;
      this.$emit('input', result);
    },
  },
  computed: {
    format() {
      let x = 1;
      return this.template.replace(/X+/g, () => {
        const y = x;
        x += 1;
        return `$${y}`;
      });
    },
    regex() {
      let regex = '^';
      this.template.match(/X+/g).forEach((value) => {
        regex += `(\\d{${value.length}})?`;
      });
      return regex;
    },
    theRegex() {
      return new RegExp(this.regex, 'g');
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

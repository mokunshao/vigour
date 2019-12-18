<template>
  <div class="vigour-formatted-input">
    <vigour-input
      :placeholder="template"
      :value="value2"
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
  data() {
    return {
      value2: this.value,
      decline: false,
    };
  },
  mounted() {
    this.input(this.value2);
  },
  watch: {
    value2(val, oldVal) {
      if (val.length <= oldVal.length) {
        this.decline = true;
      } else {
        this.decline = false;
      }
    },
  },
  methods: {
    dataTransfer(origin) {
      origin = origin.replace(/[^0-9]/g, '');

      if (origin.trim() === '') return '';

      const result = origin
        .replace(this.theRegex, this.format)
        .substr(0, this.template.length);

      return result;
    },
    input(value) {
      const inputElement = this.$refs.input.$el.querySelector('.vigour-input');
      let result;
      if (this.decline) {
        result = value;
      } else {
        result = this.dataTransfer(value);
      }
      inputElement.value = result;
      this.value2 = result;
      this.$emit('input', result);
    },
  },
  computed: {
    template2() {
      return this.template.substr(0, this.value2.length);
    },
    matches() {
      return this.template.match(/X+/g);
    },
    format() {
      let x = 1;
      return this.template2.replace(/X+/g, () => {
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

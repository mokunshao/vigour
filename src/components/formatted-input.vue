<template>
  <div class="vigour-formatted-input">
    <vigour-input
      :placeholder="template"
      v-model="number2"
      clearable
    ></vigour-input>
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
    number2: {
      get() {
        return this.value;
      },
      set(value) {
        let temp;
        if (value.trim() === '') {
          temp = '';
        } else {
          temp = value.replace(/[^0-9]/g, '')
            .replace(this.theRegex, this.format)
            .substr(0, this.template.length);
          console.log(temp);
        }
        this.$emit('input', temp);
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

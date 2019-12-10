<template>
  <div class="vigour-input-wrapper">
    <input
      v-bind="$attrs"
      :value="value"
      class="vigour-input"
      v-on="{
        ...$listeners,
        input: event => $emit('input', event.target.value)
      }"
    />
    <vigour-icon
      class="vigour-input-clear"
      v-if="clearable && value"
      @click="clear"
      name="clear"
    ></vigour-icon>
  </div>
</template>

<script>
import icon from './icon.vue';

export default {
  name: 'vigour-input',
  inheritAttrs: false,
  components: {
    [icon.name]: icon,
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
    },
    error: {
      type: String,
    },
    clearable: {
      type: Boolean,
    },
  },
  methods: {
    clear() {
      this.$emit('input', '');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-input {
  appearance: none;
  padding: 0.3em 0.5em;
  font-size: 1em;
  border: 2px solid $grey2;
  background-color: $grey2;
  box-sizing: border-box;
  transition: all 200ms;

  &-wrapper {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    position: relative;
  }

  &-clear {
    position: absolute;
    right: 0.3em;
    cursor: pointer;
    fill: currentColor;
  }

  &:focus {
    outline: none;
    border: 2px solid $black;
    background-color: $grey;
  }

  &[disabled] {
    cursor: not-allowed;
    background-color: $grey;
    border-color: $grey;
  }
}
</style>

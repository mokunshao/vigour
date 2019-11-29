<template>
  <div
    class="vigour-input-wrapper"
    :class="{ 'vigour-input-wrapper-error': error }"
  >
    <input
      v-bind="$attrs"
      type="text"
      :value="value"
      class="vigour-input"
      v-on="{
        ...$listeners,
        input: event => $emit('input', event.target.value)
      }"
    />
    <template v-if="error">
      <v-icon name="info" class="vigour-input-error-icon"></v-icon>
      <span class="vigour-input-error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import icon from './icon.vue';

export default {
  name: 'vigour-input',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input',
  },
  components: {
    'v-icon': icon,
  },
  props: {
    value: {
    },
    error: {
      type: String,
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

  &-wrapper {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
  }

  &:focus {
    outline: none;
    border: 2px solid $black;
    background-color: $grey;
  }

  &[disabled],
  &:read-only {
    cursor: not-allowed;
    background-color: $grey;
  }

  &-error-icon {
    fill: $red;
  }

  &-error-message {
    color: $red;
  }
}
</style>

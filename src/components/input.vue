<template>
  <div class="vigour-input-wrapper" :class="{ 'vigour-input-wrapper-error': error }">
    <input
      type="text"
      :value="value"
      class="vigour-input"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event)"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
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
  components: {
    'v-icon': icon,
  },
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    readonly: {
      type: Boolean,
      default: false,
      required: false,
    },
    error: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import '../common.scss';

.vigour-input {
  border-radius: 3px;
  border: 1px solid $color3;
  padding: 0.3em 0.5em;
  font-size: 1em;

  &-wrapper {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
  }

  &:hover {
    border-color: $color2;
  }

  &:focus {
    border-color: $color2;
    outline: none;
    box-shadow: inset 0 0 0 1px lighten($color: $color2, $amount: 20%);
  }

  &[disabled],
  &:read-only {
    cursor: not-allowed;
    border-color: $color4;
    color: $color4;
    box-shadow: none;
  }

  &-error-icon {
    fill: $dangerColor;
  }

  &-error-message {
    color: $dangerColor;
  }
}
</style>

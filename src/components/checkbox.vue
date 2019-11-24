<template>
  <label class="vigour-checkbox">
    <input
      class="vigour-checkbox-input"
      type="checkbox"
      :checked="value"
      @change="change"
      :disabled="disabled"
    />
    <span class="vigour-checkbox-checkmark" />
    <div class="vigour-checkbox-children">
      <slot></slot>
    </div>
  </label>
</template>

<script>
export default {
  name: 'vigour-checkbox',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    change(e) {
      this.$emit('input', e.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &-input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  &-checkmark {
    display: inline-flex;
    height: 1em;
    width: 1em;
    margin-right: 0.2em;
    margin-left: 0.2em;
    border: 2px solid $black;
    transition: background-color 200ms;
  }

  &:hover &-checkmark {
    background-color: $grey;
  }

  &-input:checked ~ &-checkmark {
    background-color: $black;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 40%;
      left: 50%;
      width: 0.4em;
      height: 0.7em;
      border: solid white;
      border-width: 0 0.1em 0.1em 0;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }

  &-input:disabled ~ &-checkmark {
    background-color: $grey;
    border-color: $grey;
  }

  &-input:disabled ~ &-checkmark,
  &-input:disabled ~ &-children {
    cursor: not-allowed;
  }
}
</style>

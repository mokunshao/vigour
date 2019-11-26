<template>
  <label class="vigour-toggle">
    <input
      class="vigour-toggle-input"
      :disabled="disabled"
      type="checkbox"
      v-model="theValue"
    />
    <span class="vigour-toggle-slider"></span>
    <div class="vigour-toggle-children">
      <slot></slot>
    </div>
  </label>
</template>

<script>
export default {
  name: 'vigour-toggle',
  props: {
    value: {},
    disabled: {
      type: Boolean,
    },
  },
  computed: {
    theValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-toggle {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &-input {
    visibility: hidden;
    height: 0;
    width: 0;
    position: absolute;
  }

  &-slider {
    display: inline-flex;
    width: 3em;
    height: 1.5em;
    background-color: $grey2;
    margin-right: 0.2em;
    margin-left: 0.2em;
    position: relative;
    box-sizing: border-box;
    transition: all 200ms;

    &::before {
      content: "";
      width: 1em;
      height: 1em;
      background-color: $white;
      position: absolute;
      left: 0.25em;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &-input:checked ~ &-slider {
    background-color: $black;
  }

  &-input:checked ~ &-slider::before {
    left: auto;
    right: 0.25em;
  }

  &-input:disabled ~ &-slider {
    background-color: $grey;
  }

  &-input:disabled ~ &-children {
    color: $grey;
  }

  &-input:disabled ~ &-slider,
  &-input:disabled ~ &-children {
    cursor: not-allowed;
  }
}
</style>

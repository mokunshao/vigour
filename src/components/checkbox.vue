<template>
  <label class="vigour-checkbox">
    <input
      class="vigour-checkbox-input"
      type="checkbox"
      :checked="value"
      @change="change"
    />
    <span class="vigour-checkbox-checkmark" />
    <slot></slot>
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
  },
  methods: {
    change(e) {
      this.$emit('input', e.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.vigour-checkbox {
  border: 1px solid black;
  display: inline-flex;
  align-items: center;

  // &-input {
  //   opacity: 0;
  //   width: 0;
  //   height: 0;
  // }
}
</style>

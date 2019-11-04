<template>
  <div class="vigour-tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-tabs-item',
  props: {
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-tabs-item {
  border: 1px solid black;
  cursor: pointer;
  padding: $padding;
  display: flex;
  align-items: center;
}
</style>

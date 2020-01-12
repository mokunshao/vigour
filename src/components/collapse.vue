<template>
  <div class="vigour-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-collapse',
  props: {
    value: {
      type: Array,
    },
    single: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    event: 'change',
  },
  provide() {
    return {
      collapse: this,
    };
  },
};
</script>

<style lang="scss" >
@import "../common.scss";

.vigour-collapse {
  border-bottom: 1px solid $black2;
  border-left: 1px solid $black2;
  border-right: 1px solid $black2;
}
</style>

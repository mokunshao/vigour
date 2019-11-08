<template>
  <div class="vigour-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-collapse',
};
</script>

<style lang="scss" >
@import "../common.scss";

.vigour-collapse {
  border: 1px solid $color1;
  border-radius: $border-radius;

  &-item:first-child &-item-title {
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }
}
</style>
